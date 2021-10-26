import React from "react";
import { apiTweetAction } from "./lookup";

export function ActionBtn(props) {
  const { tweet, action, didPerformACtion } = props;

  const likes = tweet.likes ? tweet.likes : 0;

  const className = props.className
    ? props.className
    : "btn btn-primary btn-sm";
  const actionDiplay = action.display ? action.display : "Action";

  const handleActionBackendEvent = (response, status) => {
    console.log(response, status);
    if ((status === 200 || status === 201) && didPerformACtion) {
      // setLikes(response.likes);
      didPerformACtion(response, status);
      // setUserLike(true);
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    apiTweetAction(tweet.id, action.type, handleActionBackendEvent);
  };
  const display =
    action.type === "like" ? `${likes} ${actionDiplay}` : actionDiplay;

  return (
    <button className={className} onClick={handleClick}>
      {display}
    </button>
  );
}
