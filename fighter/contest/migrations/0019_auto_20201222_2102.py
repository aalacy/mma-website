# Generated by Django 2.2 on 2020-12-22 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0018_auto_20201222_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bout',
            name='time',
            field=models.CharField(blank=True, default='00:00', max_length=50),
        ),
    ]