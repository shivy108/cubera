from django.shortcuts import render
from contacts.models import Contact
from rest_framework import generics
from contacts.serializers import ContactSerialize
# Create your views here.

class ListCreateContactView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerialize
