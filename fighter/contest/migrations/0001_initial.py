# Generated by Django 3.1 on 2021-04-08 09:27

from django.conf import settings
import django.contrib.auth.validators
import django.contrib.postgres.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('displayname', models.CharField(blank=True, max_length=100, null=True, unique=True, validators=[django.core.validators.MinLengthValidator(3)])),
                ('avatar', models.CharField(blank=True, max_length=500, null=True)),
                ('first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('coins', models.PositiveIntegerField(blank=True, default=1000, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('referred_by', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='referrals', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Bout',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(blank=True, choices=[('pending', 'Pending'), ('completed', 'Completed'), ('drawn', 'Drawn')], default='pending', max_length=50)),
                ('weight_class', models.CharField(blank=True, default='', max_length=50)),
                ('method', models.CharField(blank=True, default='', max_length=100)),
                ('round', models.PositiveIntegerField(blank=True, default=1, null=True)),
                ('time', models.CharField(blank=True, default='00:00', max_length=20)),
                ('go_the_distance', models.BooleanField(blank=True, null=True)),
                ('detail_link', models.URLField(blank=True, default='', max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='ChatFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('size', models.PositiveIntegerField()),
                ('type', models.CharField(max_length=50)),
                ('extension', models.CharField(max_length=50)),
                ('url', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='ChatRoom',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.CharField(blank=True, default='room_avatar.jpg', max_length=500, null=True)),
                ('name', models.CharField(max_length=50)),
                ('users', django.contrib.postgres.fields.ArrayField(base_field=models.PositiveIntegerField(blank=True), size=None)),
                ('last_updated', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_edited', models.DateTimeField(auto_now_add=True, null=True)),
                ('survived', models.IntegerField(blank=True, default=0, null=True)),
                ('wins', models.IntegerField(blank=True, default=0, null=True)),
                ('quaked', models.IntegerField(blank=True, default=0, null=True)),
                ('ranking', models.IntegerField(blank=True, default=0, null=True)),
                ('entry_number', models.PositiveIntegerField(blank=True, default=0, help_text='Used in tournament type game. The user can re-sumbit entry up to this number of times', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('location', models.CharField(blank=True, default='', max_length=200)),
                ('date', models.DateTimeField()),
                ('status', models.CharField(blank=True, choices=[('upcoming', 'Upcoming'), ('old', 'Old')], default='upcoming', max_length=50)),
                ('action', models.CharField(blank=True, choices=[('started', 'Started'), ('completed', 'Completed')], max_length=50)),
                ('detail_link', models.URLField(blank=True, default='', max_length=500)),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField(default='')),
                ('answer', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='Fighter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('title', models.CharField(blank=True, default='', max_length=100)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], default='M', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.CharField(choices=[('user', 'User'), ('admin', 'Admin')], max_length=20, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('message', models.TextField(default='')),
                ('answer', models.TextField(default='')),
                ('status', models.CharField(blank=True, choices=[('delivered', 'Delivered'), ('resolved', 'Resolved'), ('failed', 'Failed')], default='', max_length=20)),
                ('delivered', models.DateTimeField(blank=True, null=True)),
                ('resolved', models.DateTimeField(blank=True, null=True)),
                ('agency', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='agencies', to=settings.AUTH_USER_MODEL)),
                ('creator', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ticketCreators', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Selection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bout', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bouts', to='contest.bout')),
                ('entry', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entries', to='contest.entry')),
                ('survivor1', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='survivor1s', to='contest.fighter')),
                ('survivor2', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='survivor2s', to='contest.fighter')),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('type_of_registration', models.CharField(blank=True, choices=[('private', 'Private'), ('public', 'Public')], default='public', max_length=50)),
                ('instructions', models.TextField(default='Choose fighters\nHope they all survive', max_length=1000)),
                ('rules_set', models.TextField(default='User can pick any number of fighters. If any of them get finished, user is eliminated.\nOut of all surviving entries, the user with the most surviving fighters, wins the contest.\nIf there is a tie, the winner is the entry with the most winning fighters.\nYou are allowed to resubmit your team. 1 team per person.', max_length=1000)),
                ('summary', models.TextField(default='FIGHTQUAKE contest', max_length=1000)),
                ('multientry', models.PositiveIntegerField(default=0)),
                ('buyin', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('added_prizepool', models.PositiveIntegerField(blank=True, default=100, null=True)),
                ('entry_limit', models.PositiveIntegerField(blank=True, default=10, null=True)),
                ('entrants', models.ManyToManyField(blank=True, related_name='game_entrants', to=settings.AUTH_USER_MODEL)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='game_event', to='contest.event')),
                ('joined_users', models.ManyToManyField(blank=True, related_name='game_joined_users', to=settings.AUTH_USER_MODEL)),
                ('owner', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='game_owners', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='entry',
            name='event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entry_events', to='contest.event'),
        ),
        migrations.AddField(
            model_name='entry',
            name='game',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='entry_games', to='contest.game'),
        ),
        migrations.AddField(
            model_name='entry',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='ChatMessage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(blank=True, default='', null=True)),
                ('timestamp', models.DateTimeField(blank=True, null=True)),
                ('new', models.BooleanField(blank=True, null=True)),
                ('system', models.BooleanField(blank=True, null=True)),
                ('saved', models.BooleanField(blank=True, null=True)),
                ('seen', models.BooleanField(blank=True, null=True)),
                ('distributed', models.BooleanField(blank=True, null=True)),
                ('disable_actions', models.BooleanField(blank=True, null=True)),
                ('disable_reactions', models.BooleanField(blank=True, null=True)),
                ('deleted', models.DateTimeField(blank=True, null=True)),
                ('edited', models.DateTimeField(blank=True, null=True)),
                ('file', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='chat_files', to='contest.chatfile')),
                ('reply_message', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='chat_messages', to='contest.chatmessage')),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chat_rooms', to='contest.chatroom')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='senders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='bout',
            name='event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bout_events', to='contest.event'),
        ),
        migrations.AddField(
            model_name='bout',
            name='fighter1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fighter1s', to='contest.fighter'),
        ),
        migrations.AddField(
            model_name='bout',
            name='fighter2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fighter2s', to='contest.fighter'),
        ),
        migrations.AddField(
            model_name='bout',
            name='loser',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='losers', to='contest.fighter'),
        ),
        migrations.AddField(
            model_name='bout',
            name='winner',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='winners', to='contest.fighter'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='roles',
            field=models.ManyToManyField(to='contest.Role'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]
