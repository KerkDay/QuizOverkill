import React, { useCallback, useState } from "react";

function Options(props) {
  const [temp, setTemp] = useState(props.options)

  const update = (val) => {
    setTemp({
      ...temp,
      ...val
    })
    debounceUpdate(val)
  }

  const debounceUpdate = useCallback(
    debounce( val => {
        props.setOptions({
          ...temp,
          ...val
        })
      }
    )
  )

  return(
    <div className="mx-auto">
      <div className="p-4 bg-gray-100 rounded-lg">
        <label>
          <input value={temp.title} onChange={event => {
            update({title: [event.target.value]})
          }} />
        </label>
      </div>
    </div>
  )

}

export default Options;