import React from "react";

function Modal(props) {
  if (props.hidden) {
    return null
  } else {
    return (
      <div className="bg-black bg-opacity-50 fixed z-40 inset-0 flex align-middle justify-center" onClick={() => { props.closeModal() }}>
        <div className="bg-white p-4 rounded-lg">
          {props.children}
        </div>
      </div>
    )
  }
}

export default Modal;