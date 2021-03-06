from django.test import TestCase

from django.contrib.auth import get_user_model
from .models import Profile
from rest_framework.test import APIClient

User = get_user_model()


class ProfileTestCase(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            username='cfe', password='somepassword')
        self.userb = User.objects.create_user(
            username='cfe-2', password='somepassword2')

    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password='somepassword')
        return client

    def test_profile_created_via_signal(self):
        qs = Profile.objects.all()
        self.assertEqual(qs.count(), 2)

    def test_following(self):
        first = self.user
        second = self.userb
        first.profile.followers.add(second)  # added a follower
        second_user_following_whom = second.following.all()
        # from a user. check other user user is being followed
        qs = second_user_following_whom.filter(user=first)
        # check new user is not follwing any one
        first_user_following_no_one = first.following.all()
        self.assertTrue(qs.exists())
        self.assertFalse(first_user_following_no_one.exists())

    def test_follow_api_endpoint(self):
        client = self.get_client()
        response = client.post(f"/api/profiles/{self.userb.username}/follow",
                               {"action": "follow"}
                               )
        r_data = response.json()
        count = r_data.get("count")
        self.assertEqual(count, 1)
        # self.assertEqual(response.status_code, 200)
        # self.assertEqual(len(response.json()), 3)

    def test_unfollow_api_endpoint(self):
        first = self.user
        second = self.userb
        first.profile.followers.add(second)
        client = self.get_client()
        response = client.post(f"/api/profiles/{self.userb.username}/follow",
            {"action": "unfollow"}
        )
        r_data = response.json()
        count = r_data.get("count")
        self.assertEqual(count, 0)

    def test_cannot_follow_api_endpoint(self):    
        client = self.get_client()
        response = client.post(f"/api/profiles/{self.user.username}/follow",
            {"action": "unfollow"}
        )
        r_data = response.json()
        count = r_data.get("count")
        self.assertEqual(count, 0)
