import React, {useState} from "react";
import CharCard from "./characters/CharCard.jsx";

import Error from '../extra/Error.jsx';

function Characters(props) {
  const [editingChar, setEditingChar] = useState(null);

  function setChar(char) {
    let newChar = {
      id: null,
      ...char
    }

    // Create a unique ID if one doesn't already exist
    while (newChar.id === null) {
      function randChar() {
        const idSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        return idSet.charAt(Math.floor(Math.random() * idSet.length))
      }
      let result = randChar()+randChar()
      props.chars.forEach(char => {
        if (result === char.id) {
          newChar.id = null
        }
      })
    }

    let chars = props.chars
    let isID = (el) => el.id === newChar.id
    let charIndex = chars.findIndex(isID)
    console.log(charIndex)
    if (charIndex > -1) {
      chars[charIndex] = {
      ...chars[charIndex],
      ...newChar
      }
    } else {
      chars.push({
        name: "",
        desc: "",
        img: "",
        ...newChar
      })
    }
    
    props.setChars(chars)
  }

  function delChar(id) {
    let result = []
    props.chars.forEach(char => {
      if (char.id !== id) {
        result.push(char)
      }
    })

    console.log(result);

    props.setChars(result);
  }

  const list = [];
  if (props.chars.length > 0) {
    props.chars.forEach(char => {

      let editing = false;
      if (editingChar === char.id) {
        editing = true;
      }

      let passed = {
        char: char,
        editing: editing,
        setEditingChar: setEditingChar,
        setChar: setChar,
        delChar: delChar,
        key: char.id
      }

      list.push(
        <CharCard {...passed} />
      )
    })
  } else {
    list.push( 
      <Error message="🤦 I forget to add anything to allow you to create characters. Whoopsy doodle." />
    )
  }

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-hidden p-4">
      {list}
    </div>
  )

}

export default Characters;