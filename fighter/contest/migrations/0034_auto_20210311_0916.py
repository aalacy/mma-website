# Generated by Django 3.1 on 2021-03-11 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0033_auto_20210309_1011'),
    ]

    operations = [
        migrations.AddField(
            model_name='entry',
            name='quaked',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='survived',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='wins',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]