# Generated by Django 3.1 on 2021-03-02 17:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0027_remove_game_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='action',
        ),
    ]