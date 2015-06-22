from django.conf.urls import url

from . import views

urlpatterns = [
	#/polls/
	url(r'^$', views.index, name='index'),
	#/polls/5/
	url(r'^(?P<question_id>[0-9]+)/$', views.detail, name='detail'),
	#/polls/5/results/
	url(r'^(?P<question_id>[0-9]+)/results/$', views.results, name='results'),
	#/polls/5/vote/
	url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
	
]