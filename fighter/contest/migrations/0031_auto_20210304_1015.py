# Generated by Django 3.1 on 2021-03-04 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0030_auto_20210304_0338'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ['-date']},
        ),
        migrations.AlterField(
            model_name='game',
            name='buyin',
            field=models.PositiveIntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='buyin_bonus',
            field=models.PositiveIntegerField(blank=True, default=0, null=True),
        ),
    ]
