import React, { useState } from "react";
import { TweetCreate } from "./create";
import { TweetList } from "./list";

export function TweetsComponent(props) {
  const [newTweets, setNewTweets] = useState([]);

  const canTweet = props.canTweet === "false" ? false : true;
  const handleNewTweet = (newTweet) => {
    let tempNewTweets = [...newTweets];
    tempNewTweets.unshift(newTweet);
    setNewTweets(tempNewTweets);
  };

  return (
    <div className={props.className}>
      {canTweet === true && (
        <TweetCreate didTweet={handleNewTweet} className="col-12 mb-3" />
      )}
      <TweetList newTweets={newTweets} {...props} />
    </div>
  );
}
