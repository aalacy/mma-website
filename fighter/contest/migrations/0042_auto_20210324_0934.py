# Generated by Django 3.1 on 2021-03-24 16:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0041_auto_20210324_0916'),
    ]

    operations = [
        migrations.RenameField(
            model_name='game',
            old_name='buyin_bonus',
            new_name='added_prizepool',
        ),
        migrations.RemoveField(
            model_name='game',
            name='genre',
        ),
    ]