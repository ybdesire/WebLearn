from django.shortcuts import render
from django.http import HttpResponse
import subprocess
import os.path
import urllib.parse
from urllib.parse import urlencode
# Create your views here.
def index(request):
	return HttpResponse('hello world!')

def list(request):
	return HttpResponse(request.path)
	
def file(request):
	file_name = request.path.split('=')[1]

	base_path = os.path.dirname(os.path.abspath(__file__))
	data = open(os.path.join(base_path, file_name), 'rb')
	
	response = HttpResponse(data, content_type='text/plain')
	#support Unicode file name. [IE9,Chrome,FF]
	response['Content-Disposition'] = 'attachment; filename="{0}";filename*=UTF-8\'\'{1}'.format(urllib.parse.quote_plus(file_name), urllib.parse.quote_plus(file_name))

	return response
