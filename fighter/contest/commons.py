from django.conf import settings

from contest.models import Event, Bout, Fighter, Selection, Entry, Game
from contest.serializers import (
    UserSerializer,
    GroupSerializer,
    EventSerializer,
    BoutSerializer,
    FighterSerializer,
    SelectionSerializer,
    EntrySerializer,
    GameSerializer,
)

import pdb


def main_contest():
    games = (
        Game.objects.filter(event=Event.objects.latest_event())
        .filter(buyin=0)
        .filter(type_of_registration="public")
        .filter(owner__username="admin")
        .filter(name__iexact="main contest")
    )
    if games:
        return games.first()
    else:
        return -1


def add_game(
    games, _, event_data, engaged_teams, entry=1, has_joined=False, can_have_entry=False
):
    if not event_data:
        event_data = EventSerializer(_.event).data
    bouts = BoutSerializer(
        Bout.objects.filter(event__id=event_data["id"]).order_by("order"), many=True
    ).data
    for bout in bouts:
        bout["fighter1"] = FighterSerializer(
            Fighter.objects.get(id=bout["fighter1"])
        ).data
        bout["fighter2"] = FighterSerializer(
            Fighter.objects.get(id=bout["fighter2"])
        ).data
    custom_date = _.custom_date
    if not custom_date:
        custom_date = _.event.date.strftime("%hh:%mm:%ss")
    return games.append(
        dict(
            id=_.id,
            name=_.name,
            owner=_.owner.username,
            bouts=bouts,
            group="no important",
            date=_.date,
            value=f"{_.id}_{entry}",
            event=event_data,
            custom_date=custom_date,
            type_of_registration=_.type_of_registration,
            instructions=_.instructions,
            summary=_.summary,
            rules_set=_.rules_set,
            action=_.action,
            genre=_.genre,
            entry_limit=_.entry_limit,
            buyin=_.buyin,
            prize=_.prize,
            entrants=UserSerializer(_.entrants, many=True).data,
            joined_users=UserSerializer(_.joined_users, many=True).data,
            added_prizepool=_.added_prizepool,
            re_entry=_.re_entry,
            multientry=_.multientry,
            entry_number=entry,
            has_joined=has_joined,
            can_have_entry=can_have_entry,
            engaged_teams=engaged_teams,
        )
    )


def build_games(games, data, event_data=None, user_id=None):
    for _ in data:
        has_joined = False
        my_teams = 0
        if user_id:
            my_teams = (
                Entry.objects.filter(user_id=user_id).filter(game_id=_.id).count()
            )
            has_joined = my_teams > 0
            if _.type_of_registration == "private":
                has_joined = (
                    has_joined and _.joined_users.filter(id=user_id).count() > 0
                )
        engaged_teams = 0
        for entry in Entry.objects.filter(game_id=_.id):
            if Selection.objects.filter(entry_id=entry.id):
                engaged_teams += 1
        # if _.name.lower() == 'main contest':
        # 	has_joined = True

        if not user_id:
            has_joined = False
        can_have_entry = (
            _.multientry != 0
            and my_teams < _.multientry + 1
            and my_teams < _.entry_limit
        )

        add_game(games, _, event_data, engaged_teams, 1, has_joined, can_have_entry)


def build_games_with_entry(games, data, event_data, user_id=None):
    for _ in data:
        for entry in range(1, (_.multientry or 1) + 1):
            if user_id:
                engaged_teams = (
                    Entry.objects.filter(user_id=user_id)
                    .filter(game_id=_.id)
                    .filter(entry_number=entry)
                    .count()
                )
            else:
                engaged_teams = (
                    Entry.objects.filter(game_id=_.id)
                    .filter(entry_number=entry)
                    .count()
                )

            if _.name.lower() == "main contest":
                add_game(games, _, event_data, engaged_teams, 1, True)
            elif engaged_teams:
                add_game(games, _, event_data, engaged_teams, entry)


def get_all_games(event, games):
    public_games = Game.objects.filter(event_id=event["id"])
    build_games(games, public_games, event)


def get_public_games(event, games, user_id):
    public_games = Game.objects.filter(event_id=event["id"]).filter(
        type_of_registration="public"
    )
    build_games(games, public_games, event, user_id)


def get_games_with_entry(event, user_id=None):
    """
    get games for selection
    For the private games, it will only games where user have already joined
    This will list the games based upon the entry
    e.g. Main Contest
             Private game (1)
             Private game (2)
             ...
    """
    games = []
    event_data = EventSerializer(event).data
    public_games = Game.objects.filter(event=event).filter(
        type_of_registration="public"
    )
    build_games_with_entry(games, public_games, event_data)

    if user_id:
        private_games = (
            Game.objects.filter(joined_users__pk=user_id)
            .filter(event=event)
            .exclude(type_of_registration="public")
            .filter(owner__username="admin")
        )
        build_games_with_entry(games, private_games, event_data, user_id)

    return games


def get_contest_games(event, user_id=None):
    """
    get games for contest
    For the private games, it will only games where user have already joined
    """
    games = []
    event_data = EventSerializer(event).data

    if user_id:
        get_public_games(event_data, games, user_id)

        private_games = (
            Game.objects.filter(entrants=user_id)
            .filter(event=event)
            .exclude(type_of_registration="public")
            .filter(owner__username="admin")
        )
        build_games(games, private_games, event_data, user_id)
    else:
        get_all_games(event_data, games)

    return games


def load_my_games(event, user_id=None):
    """
    load my games in lobby
    For the private games, it will all available games for user
    """
    games = []
    event_data = EventSerializer(event).data
    if user_id:
        public_games = Game.objects.filter(event=event).filter(
            type_of_registration="public"
        )
        build_games(games, public_games, event_data, user_id)

        private_games = (
            Game.objects.filter(entrants__pk=user_id)
            .filter(event=event)
            .exclude(type_of_registration="public")
        )
        build_games(games, private_games, event_data, user_id)
    else:
        get_all_games(event_data, games)

    return games


def load_own_games(owner):
    games = []
    public_games = Game.objects.filter(type_of_registration="public").filter(
        owner_id=owner
    )
    build_games(games, public_games)
    return games


def create_main_contest(event):
    game = Game(name="Main Contest", event=event, added_prizepool=100, buyin=0)
    game.save()
