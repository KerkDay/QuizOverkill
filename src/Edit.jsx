import React, { useState } from "react";

import Settings from "./tabs/Settings.jsx";
import Characters from "./tabs/Characters.jsx";
import Questions from "./tabs/Questions.jsx";
import Testing from "./tabs/Testing.jsx";

function Edit(props) {
  // Set and change the current page
  const [page, setPage] = useState("settings");
  let content = (
    <div>🤦‍♂️ There was a problem. Sorry about that!</div>
  )

  switch(page) {
    case "settings":
      content = (
        <Settings setPage={setPage}/>
      )
      break;
    case "characters":
      let passed = {
        chars: props.characters,
        setChars: props.setCharacters,
        setPage: setPage
      }
      content = (
        <Characters {...passed} className="w-full"/>
      )
      break;
    case "questions":
      content = (
        <Questions />
      )
      break;
    case "testing":
      content = (
        <Testing />
      )
      break;
  }

  return(
    <div className="overflow-auto">
      {content}
    </div>
  )

}

export default Edit;