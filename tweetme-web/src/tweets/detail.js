import React, { useState } from "react";

import { ActionBtn } from "./buttons";

function UserLink(props) {
  const { username } = props;
  const handleUserlink = (event) => {
    window.location.href = `/profiles/${username}`;
  };
  return <span className='pointer' onClick={handleUserlink}>{props.children}</span>;
}

function UserDisplay(props) {
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

function UserPicture(props) {
  const { user } = props;
  return (
    <UserLink username={user.username}>
      <span className="mx-1 px-3 py-2 rounded-circle bg-dark text-white">
        {user.username[0]}
      </span>
    </UserLink>
  );
}

export function ParentTweet(props) {
  const { tweet } = props;
  return tweet.parent ? (
    <Tweet
      isRetweet
      retweeter={props.retweeter}
      className={" "}
      tweet={tweet.parent}
      hideActions
    />
  ) : null;
}

export function Tweet(props) {
  const { tweet, didRetweet, hideActions, isRetweet, retweeter } = props;
  const [actionTweet, setActionTweet] = useState(
    props.tweet ? props.tweet : null
  );
  let className = props.className ? props.className : "col-10 mx-auto col-md-6";
  className =
    isRetweet === true ? `${className} p-2 border rounded` : className;
  var path = window.location.pathname;
  var match = path.match(/(?<tweetid>\d+)/);
  var urltweetId = match ? match.groups.tweetid : -1;
  const isDetail = `${tweet.id}` === `${urltweetId}`;
  const handleLink = (event) => {
    event.preventDefault();
    window.location.href = `/${tweet.id}`;
  };
  const handlePerformAction = (newActionTweet, status) => {
    if (status === 200) {
      setActionTweet(newActionTweet);
    } else if (status === 201) {
      // let the tweet list know
      if (didRetweet) {
        didRetweet(newActionTweet);
      }
    }
  };
  return (
    <div className={className}>
      {isRetweet === true && (
        <div className="mb-2">
          <span className="small text-muted">
            Retweet via <UserDisplay user={retweeter} />
          </span>
        </div>
      )}
      <div className="d-flex">
        <div className="">
          <UserPicture user={tweet.user} />
        </div>
        <div className="col-11">
          <div>
            <p>
              <UserDisplay includeFullName user={tweet.user} />
            </p>
            <p>{tweet.content}</p>
          </div>
          <ParentTweet tweet={tweet} retweeter={tweet.user} />

          <div className="btn btn-group px-0">
            {actionTweet && hideActions !== true && (
              <React.Fragment>
                <ActionBtn
                  tweet={actionTweet}
                  didPerformACtion={handlePerformAction}
                  action={{ type: "like", display: "Likes" }}
                />
                <ActionBtn
                  tweet={actionTweet}
                  didPerformACtion={handlePerformAction}
                  action={{ type: "unlike", display: "Unlike" }}
                />
                <ActionBtn
                  tweet={actionTweet}
                  didPerformACtion={handlePerformAction}
                  action={{ type: "retweet", display: "Retweet" }}
                />
              </React.Fragment>
            )}
            {isDetail === true ? null : (
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={handleLink}
              >
                View
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
