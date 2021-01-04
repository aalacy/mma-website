# Generated by Django 2.2 on 2021-01-04 07:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0022_bout_go_the_distance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bout',
            name='round',
            field=models.PositiveIntegerField(blank=True, default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)]),
        ),
    ]