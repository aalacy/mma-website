# Generated by Django 3.1 on 2021-01-22 23:22

from django.conf import settings
import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0011_auto_20210119_1808'),
    ]

    operations = [
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
        migrations.AddField(
            model_name='customuser',
            name='avatar',
            field=models.CharField(blank=True, max_length=500, null=True),
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
                ('file', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='chat_files', to='contest.chatfile')),
                ('reply_message', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='chat_messages', to='contest.chatmessage')),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chat_rooms', to='contest.chatroom')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='senders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
