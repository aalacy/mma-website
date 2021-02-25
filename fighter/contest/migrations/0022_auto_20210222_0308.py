# Generated by Django 3.1 on 2021-02-22 11:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0021_auto_20210212_1311'),
    ]

    operations = [
        migrations.AddField(
            model_name='entry',
            name='game',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='games', to='contest.game'),
        ),
        migrations.AddField(
            model_name='game',
            name='action',
            field=models.CharField(blank=True, choices=[('started', 'Started'), ('completed', 'Completed')], default='started', max_length=50),
        ),
        migrations.AddField(
            model_name='game',
            name='joined_users',
            field=models.ManyToManyField(blank=True, related_name='game_joined_users', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='game',
            name='owner',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='game_owners', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='game',
            name='date_started',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='entrants',
            field=models.ManyToManyField(blank=True, related_name='game_entrants', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='game',
            name='instructions',
            field=models.TextField(default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='game',
            name='rules_set',
            field=models.TextField(default='', max_length=500),
        ),
    ]