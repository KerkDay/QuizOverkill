import React from "react";

import Icons from "../../extra/Icons.jsx";

function CharCard(props) {
  // Decide whether or not to show an image or a default icon
  let img = <img src={props.char.img} className="object-contain min-w-24 w-24 h-24 block" />
  if (typeof props.char.img === "undefined" || props.char.img === "")
    img = <Icons.Upload className="object-contain block min-w-24 w-24 h-24 p-8" />

  return (
    <CardBox onClick={()=>{props.setEditingChar(props.char.id)}} {...props}>

      {/* Image */}
      <div className="p-2 bg-gray-800 rounded-t-lg sm:rounded-none sm:rounded-l-lg">
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


function NewCharCard(props) {

  return (
    <div className={`flex justify-center align-middle bg-gray-800 hover:bg-gray-900 shadow-lg rounded-lg w-full cursor-pointer col-span-full select-none`} onClick={()=>{ props.setChar({}) }} {...props}>


      {/* Description */}
      <div className="h-20 flex items-center">
        <div className="font-bold text-2xl text-white">+ New Character</div>
      </div>

    </div>
  )
}



function CardBox(props) {

  let editing = props.editing ? "ring-4 ring-blue-500" : ""
  return (
    <div className={`${editing} flex flex-col sm:flex-row justify-evenly align-stretch bg-white shadow-lg rounded-lg space-y-2 sm:space-y-0 sm:space-x-2 w-full cursor-pointer`} {...props}>
      {props.children}
    </div>
  )
}


export {
  CharCard,
  NewCharCard
}