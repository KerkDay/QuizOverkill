import React from "react";

function Settings(props) {

  return(
    <div>
      Nothing set up for Settings yet 🤷
      <div className="font-bold" onClick={() => {
        props.setPage("characters")
      }}>
        Go to Characters tab?
      </div>
    </div>
  )

}

export default Settings;