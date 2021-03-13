import React, { useState } from "react";

import Menu from "./Menu.jsx";

import Options from "./tabs/Options.jsx";
import Characters from "./tabs/Characters.jsx";
import Questions from "./tabs/Questions.jsx";
import Testing from "./tabs/Testing.jsx";

function Edit(props) {
  // Set and change the current page
  const [page, setPage] = useState("options");
  let content = (
    <div>🤦‍♂️ There was a problem. Sorry about that!</div>
  )

  let passed;

  switch(page) {
    case "options":
      passed = {
        options: props.options,
        setOptions: props.setOptions,
        setPage: setPage
      }
      content = (
        <Options {...passed} />
      )
      break;
    case "characters":
      passed = {
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
    <div className="w-full h-full flex flex-col sm:flex-row bg-gray-800">
      <Menu page={page} setPage={setPage}></Menu>
      <div className="overflow-y-auto overflow-x-visible w-full h-full bg-purple-500">
        {content}
      </div>
    </div>
  )

}

export default Edit;