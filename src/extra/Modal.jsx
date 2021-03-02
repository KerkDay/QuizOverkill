import React from "react";

function Modal(props) {
  if (props.hidden) {
    return null
  } else {
    return (
      <div className="bg-black bg-opacity-50 absolute inset-0 flex align-middle justify-center" onClick={() => { props.closeModal() }}>
        <div>
          {props.children}
        </div>
      </div>
    )
  }
}

export default Modal;