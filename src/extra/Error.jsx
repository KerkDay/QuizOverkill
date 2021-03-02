import React from "react";

function Error(props) {
  let message = "🤦 Looks like Quiz Overkill is broken AF. Whoops!"; // Default Message
  if (typeof props.message !== "undefined" && props.message !== "") {
    message = props.message;
  }

  return (
    <div className="bg-red-200 text-red-800 p-4 rounded-lg">
      {message}
    </div>
  )
}

export default Error;