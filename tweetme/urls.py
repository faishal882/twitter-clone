from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from tweets.views import (
    local_tweets_list_view,
    local_tweets_detail_view,
    local_tweets_profile_view
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', local_tweets_list_view),
    path('<int:tweet_id>', local_tweets_detail_view),
    path('profile/<str:username>', local_tweets_profile_view),
    path('api/tweets/', include('tweets.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
