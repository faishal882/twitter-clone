from django.http.response import Http404, JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
import random

from .models import Tweet
from .forms import TweetForm

# Create your views here.


def home_view(request, *args, **kwargs):
    return render(request, "pages/home.html")


def tweet_create_view(request, *args, **kwargs):
    form = TweetForm(request.POST or None)
    if form.is_valid():
        obj = form.save(commit=False)
        # do other form logic
        obj.save()
        form = TweetForm()

    return render(request, "components/form.html", context={"form": form})



def tweet_list_view(request, *args, **kwargs):
    """
    REST API VIEW
    Consume by Javascript/Swift/Java/iOS/Android
    return json data
    """
    qs = Tweet.objects.all()
    tweets_list = [{"id": x.id, "content": x.content,
                    "likes": random.randint(0, 145)} for x in qs]
    data = {
        "isUser": False,
        "response": tweets_list
    }
    return JsonResponse(data)


def tweet_detail_view(request, tweet_id, *args, **kwargs):
    """
    REST API VIEW
    Consume by Javascript/Swift/Java/iOS/Android
    return json data
    """

    data = {
        "id": tweet_id,
    }
    status = 200
    try:
        obj = Tweet.objects.get(id=tweet_id)
        data["content"] = obj.content
    except:
        data["content"] = "not found"
        status = 404

    # json.dumps content_type='application/json'
    return JsonResponse(data, status=status)
