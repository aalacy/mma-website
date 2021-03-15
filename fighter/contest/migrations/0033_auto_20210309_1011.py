# Generated by Django 3.1 on 2021-03-09 18:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0032_auto_20210309_0310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='game_owners', to=settings.AUTH_USER_MODEL),
        ),
    ]