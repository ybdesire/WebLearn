from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from .models import Question, Choice
from django.template import RequestContext, loader
# Create your views here.

def index(request):
	#return HttpResponse("Hello, world. You're at the polls index.")
	latest_question_list = Question.objects.order_by('-pub_date')[:5]
	template = loader.get_template('polls/index.html')
	context = RequestContext(request, {
		'latest_question_list':latest_question_list,
	})
	return HttpResponse(template.render(context))

def detail(request, question_id):
	latest_question_list = Question.objects.order_by('-pub_date')[:5]
	question = latest_question_list[int(question_id)-1]
	template = loader.get_template('polls/detail.html')
	context = RequestContext(request, {
		'question':question,
	})
	return HttpResponse(template.render(context))
#	return HttpResponse("You're looking at question %s" % question_id)
	
def results(request, question_id):
	response = "You're looking at the results of question %s."
	return HttpResponse(response % question_id)
	
def vote(request, question_id):
    p = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = p.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': p,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(p.id,)))
