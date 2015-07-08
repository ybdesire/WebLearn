from django.shortcuts import render
from django.http import HttpResponse
from django.utils.translation import ugettext
# Create your views here.


def index(request):
	return HttpResponse(ugettext('hello world!'))