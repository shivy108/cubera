from rest_framework import serializers
from contacts.models import Contact


class ContactSerialize(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
