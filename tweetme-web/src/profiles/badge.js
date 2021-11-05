import React, { useEffect, useState } from "react";

import { UserDisplay, UserPicture } from "./components";
import { apiProfileDetail, apiProfileFollowToggle } from "./lookup";

function ProfileBadge(props) {
  const { user, didFollowToggle, profileLoading } = props;
  // console.log(user);
  let currentVerb = user && user.is_following ? "Unfollow" : "Follow";
  currentVerb = profileLoading ? "Loading..." : currentVerb;
  const handleFollowToggle = (event) => {
    event.preventDefault();
    if (didFollowToggle && !profileLoading) {
      didFollowToggle(currentVerb);
    }
  };
  return user ? (
    <div>
      <UserPicture user={user} hideLink />
      <p>
        <UserDisplay user={user} includeFullName hideLink />
      </p>
      <button onClick={handleFollowToggle} className="btn btn-primary">
        {currentVerb}
      </button>
    </div>
  ) : null;
}

export function ProfileBageComponent(props) {
  const { username } = props;
  const [didLookup, setDidLookup] = useState(false);
  const [profile, setProfie] = useState(null);
  const [profileLoading, setProfieLoading] = useState(false);

  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setProfie(response);
    }
  };
  useEffect(() => {
    if (didLookup === false) {
      apiProfileDetail(username, handleBackendLookup);
      setDidLookup(true);
    }
  }, [username, didLookup, setDidLookup]);

  const handleNewFollow = (actionVerb) => {
    apiProfileFollowToggle(username, actionVerb, (response, status) => {
      // console.log(response, status);
      if (status === 200) {
        setProfie(response);
      }
      setProfieLoading(false);
    });
    setProfieLoading(true);
  };
  return didLookup === false ? (
    "Loading...."
  ) : profile ? (
    <ProfileBadge
      user={profile}
      didFollowToggle={handleNewFollow}
      profileLoading={profileLoading}
    />
  ) : null;
}
