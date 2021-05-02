from django.urls import path
from contacts.views import ListCreateContactView

urlpatterns = [path("", ListCreateContactView.as_view())]
