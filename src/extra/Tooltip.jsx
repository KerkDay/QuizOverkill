import React from "react";

function Tooltip(props) {

  let side = "top-center"
  typeof props.side !== 'undefined' ? side = props.side : side = "top-center"

  let c = "opacity-0 group-hover:opacity-100 text-xs min-w-max pointer-events-none bg-black text-white absolute transition-opacity duration-200 p-2 rounded-md " // Class Name

  switch(side) {
    case "top-center":
      c = c + "left-1/2 bottom-full transform -translate-x-1/2"
      break
    case "top-left":
      c = c + "left-0 bottom-full"
      break
    case "top-right":
      c = c + "right-0 bottom-full"
      break
  }

  return (
    <div className="group relative">
      {props.children}
      <div className={c}>
        {props.message}
      </div>
    </div>
  )
}

export default Tooltip;