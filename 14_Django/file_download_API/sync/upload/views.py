from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import subprocess
import os.path

# Create your views here.
def index(request):
	return HttpResponse('this is upload view!')

@csrf_exempt# tell the view not check csrf token
def file(request):
	if request.method == 'GET':
		return HttpResponse('this is upload view - file(GET)!')	
	if request.method == 'POST':
		file_name = request.path.split('=')[1]
		base_path = os.path.dirname(os.path.abspath(__file__))
		file = open(os.path.join(base_path, file_name), 'wb')
		file.write(request.body)
		file.close()
		return HttpResponse('this is upload view - file(POST)!\n' )