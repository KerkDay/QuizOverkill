import React, { useState } from "react";

import reducer from "image-blob-reduce";

import Icons from "../../extra/Icons.jsx";
import Tooltip from "../../extra/Tooltip.jsx";

function CharEdit(props) {
  const [tempChar, setTempChar] = useState(props.char)

  // Decide whether or not to show an image or a default icon
  let img = <img src={tempChar.img} className="object-contain w-32 h-32" />
  if (typeof tempChar.img === "undefined" || tempChar.img === "")
    img = <Icons.Upload className="object-contain w-32 h-32 p-8" />

  // Update a characters property, send it up the foodchain
  function editChar(entry, val) {
    props.setChar({
      id: props.char.id,
      [entry]: val
    })
    setTempChar({
      ...tempChar,
      ...{[entry]: val}
    })
  }

  // Upload a new char.img
  function uploadImg(event) {
    if (event.target.files[0] && event.target.files[0].type.match("image.*")) {
      const reader = new FileReader();
      const reduce = new reducer;

      reduce.toBlob(event.target.files[0], {max: 300})
      .then(blob => {
          reader.readAsDataURL(blob)
          reader.onload = (evt) => {
          editChar("img", evt.target.result)
          console.log(evt.target.result)
        }
      })
    } else {
      event.target.value = null;
    }
  }



  return (
    <EditBox>

      {/* Image */}
      <div className="h-32 sm:h-auto p-2 bg-gray-800 rounded-t-lg sm:rounded-none sm:rounded-l-lg relative">
        {img}
        <div className="absolute z-10 inset-0 flex items-end justify-end space-x-1 p-2">
          {/* Upload New Picture */}
          <Tooltip message="Upload a new image" >
            <label>
              <Icons.Upload className="h-8 w-8 bg-black bg-opacity-50 text-white" />
              <input type="file" className="hidden" accept="png, jpg, jpeg, gif" onChange={uploadImg} />
            </label>
          </Tooltip>

          {/* Delete Picture */}
          <div onClick={ () => { editChar("img", "") } }>
            <Tooltip message="Remove image">
              <Icons.Trash className="h-8 w-8 bg-black bg-opacity-50 text-white" />
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="w-full px-2 flex-1 sm:px-0 sm:py-2">
          <label className="font-bold text-xs">Name: 
            <input name="char-name" 
              className="rounded-sm border border-gray-500 px-2 w-full text-base"
              maxLength="20" 
              value={tempChar.name} 
              onChange={event => {
                editChar("name", event.target.value)
              }} 
            />
          </label>
        <label className="font-bold text-xs">Description: 
          <textarea name="char-desc" 
            className="rounded-sm border border-gray-500 p-2 h-30 w-full text-sm"
            value={tempChar.desc} 
            onChange={event => {
              editChar("desc", event.target.value)
            }} 
          />
          </label>
      </div>

      {/* Tools */}
      <div className="justify-self-end flex flex-row sm:flex-col align-middle p-2">
        {/* Stop Editing */}
        <div onClick={() => { props.setEditingChar(null); }}>
          <Tooltip message="Stop Editing">
            <Icons.Cancel className="h-8 w-8" />
          </Tooltip>
        </div>

        <div onClick={ () => { props.delChar(props.char.id) }}  className="mt-0">
          <Tooltip message="Remove Character" >
            <Icons.Trash className="h-8 w-8" />
          </Tooltip>
        </div>

        
      </div>

    </EditBox>
  )
}

function EditBox(props) {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly align-stretch bg-white shadow-lg rounded-lg space-y-2 sm:space-y-0 sm:space-x-2 w-full row-span-3 col-span-full" {...props}>
      {props.children}
    </div>
  )
}


export default CharEdit;