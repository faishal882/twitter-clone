import React from "react";

export function UserLink(props) {
  const { username } = props;
  const handleUserlink = (event) => {
    window.location.href = `/profiles/${username}`;
  };
  return (
    <span className="pointer" onClick={handleUserlink}>
      {props.children}
    </span>
  );
}

export function UserDisplay(props) {
  const { user, includeFullName } = props;
  const nameDispaly =
    includeFullName === true ? `${user.first_name} ${user.last_name}` : null;

  return (
    <React.Fragment>
      {nameDispaly}
      <UserLink username={user.username}>@{user.username}</UserLink>
    </React.Fragment>
  );
}

export function UserPicture(props) {
  const { user } = props;
  return (
    <UserLink username={user.username}>
      <span className="mx-1 px-3 py-2 rounded-circle bg-dark text-white">
        {user.username[0]}
      </span>
    </UserLink>
  );
}
