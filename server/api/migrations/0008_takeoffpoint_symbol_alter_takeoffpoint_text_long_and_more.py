# Generated by Django 4.0.6 on 2022-08-04 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_rename_kp_beg_takeoffpoint_chainage_beg_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='takeoffpoint',
            name='symbol',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='takeoffpoint',
            name='text_long',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
        migrations.AlterField(
            model_name='takeoffpoint',
            name='text_shrt',
            field=models.CharField(max_length=128),
        ),
    ]
