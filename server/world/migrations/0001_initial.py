# Generated by Django 4.0.6 on 2022-08-02 18:52

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WorldBorder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mpoly', django.contrib.gis.db.models.fields.MultiPolygonField(srid=4326)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
    ]
