from django.test import TestCase

from django.contrib.auth import get_user_model
from .models import Profile

User = get_user_model()


class ProfileTestCase(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            username='cfe', password='somepassword')
        self.userb = User.objects.create_user(
            username='cfe-2', password='somepassword2')

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
