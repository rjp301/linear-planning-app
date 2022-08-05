from rest_framework import viewsets

from . import models
from . import serializers

class ProjectViewSet(viewsets.ModelViewSet):
  queryset = models.Project.objects.all()
  serializer_class = serializers.ProjectSerializer
  http_method_names = ['get']

class CenterlineViewSet(viewsets.ModelViewSet):
  queryset = models.Centerline.objects.all()
  serializer_class = serializers.CenterlineSerializer
  http_method_names = ['get']