import React from "react";

import Icons from "../../extra/Icons.jsx";

function CharCard(props) {
  // Decide whether or not to show an image or a default icon
  let img = <img src={props.char.img} className="object-contain w-full h-full" />
  if (typeof props.char.img === "undefined" || props.char.img === "")
    img = <Icons.Upload className="object-contain w-full h-full p-8" />

  return (
    <CardBox onClick={()=>{props.setEditingChar(props.char.id)}}>

      {/* Image */}
      <div className="h-32 sm:h-auto sm:w-32 sm:min-w-32 p-2 bg-gray-800 rounded-t-lg sm:rounded-none sm:rounded-l-lg">
        {img}
      </div>

      {/* Description */}
      <div className="px-2 w-full sm:px-0 sm:py-2 b">
        <div className="font-bold text-lg">{props.char.name}</div>
        <div className="break-words min-w-full w-0">{props.char.desc}</div>
      </div>

      {/* Tools */}
      {/* <div className="justify-self-end p-2">
        <span onClick={() => { props.setEditingChar(props.char.id) }}>
          <Icons.Edit className="h-8 w-8" />
        </span>
      </div> */}

    </CardBox>
  )
}

function CardBox(props) {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly align-stretch bg-white shadow-lg rounded-lg space-y-2 sm:space-y-0 sm:space-x-2 w-full" {...props}>
      {props.children}
    </div>
  )
}


export default CharCard;