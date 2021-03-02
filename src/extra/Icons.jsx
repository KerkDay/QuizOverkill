import React from 'react';

const SVGBlock = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
      {props.children}
    </svg>
  )
}

const Icons = {
  Edit: (props) => {
    return (
      <SVGBlock {...props}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </SVGBlock>
    )
  },
  Cancel: (props) => {
    return (
      <SVGBlock {...props}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </SVGBlock>
    )
  },
  Upload: (props) => {
    return (
      <SVGBlock {...props}>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"/>
      </SVGBlock>
    )
  },
  Trash: (props) => {
    return (
      <SVGBlock {...props}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
      </SVGBlock>
    )
  }
}
export default Icons