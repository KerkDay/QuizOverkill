import React, { useCallback, useState } from "react";

function Options(props) {
  const [temp, setTemp] = useState(props.options)

  // Update the temp options, then the global options
  const update = (val) => {
    setTemp({ ...temp, ...val })
    debounce(debounceUpdate(val), 250)
  }

  // Update the global options
  const debounceUpdate = val => props.setOptions({ ...temp, ...val })

  const inputClass = "py-2 px-4 border border-gray-400 rounded-md"

  return(
    <div className="mx-auto p-4 bg-gray-100 rounded-lg w-full sm:w-1/2">
      <label>
        Title<br />
        <input value={temp.title} onChange={event => {
          update({title: event.target.value})
        }}
        className={`${inputClass} `}/>
      </label>
    </div>
  )
}

export default Options;