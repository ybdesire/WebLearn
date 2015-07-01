from django.shortcuts import render
from django.http import HttpResponse
import subprocess
import os.path

# Create your views here.
def index(request):
	return HttpResponse('this is upload view!')