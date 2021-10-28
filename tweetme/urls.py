from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
# from django.views.generic import TemplateView

from tweets.views import (
    tweets_list_view,
    tweets_detail_view,
    tweets_profile_view
)

from accounts.views import login_view, register_view, logout_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', tweets_list_view),
    path('login', login_view),
    path('logout/', logout_view),
    path('register/', register_view),
    path('<int:tweet_id>', tweets_detail_view),
    path('profile/<str:username>', tweets_profile_view),
    path('api/tweets/', include('tweets.api.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
