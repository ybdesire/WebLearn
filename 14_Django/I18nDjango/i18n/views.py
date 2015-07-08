from django.shortcuts import render
from django.http import HttpResponse
from django.utils.translation import ugettext
from django.template import RequestContext, loader
import os

# Create your views here.


def index(request):
	return HttpResponse(ugettext('hello world!'))
	

def page(request):
	template = loader.get_template('tmp.html')
	context = RequestContext(request)
	return HttpResponse(template.render(context))