import React, { useState } from "react"

import Icons from "./extra/Icons.jsx"

function Menu (props) {
  // The menu in it's default position: Hidden on mobile, shown on big screens
  let defMenuClass = "hidden"
  const [menuOpen, setMenuOpen] = useState(defMenuClass)

  // Change the page
  function changePage(page) {
    props.setPage(page)
    setMenuOpen(defMenuClass)
  }

  let handleMenuOpen = () => {
    menuOpen === defMenuClass ? setMenuOpen("") : setMenuOpen(defMenuClass)
  }

  return (
    <div className="flex flex-col text-xl font-bold w-full sm:w-56 relative">

      {/* The BURGER 🍔 */}
      <div className="sm:hidden flex flex-row justify-end p-4 text-white" onClick={handleMenuOpen}>
        <Icons.Burger className="h-8 w-8 stroke-2"/>
      </div>

      {/* The menu itself */}
      <div className={menuOpen + " sm:block sm:max-h-screen h-screen transition-all absolute sm:static bg-gray-800 top-full left-0 right-0 z-50"}>
        <MenuTab {...props} name="settings" onClick={()=> { changePage("settings") }}>
          ⚙ Settings
        </MenuTab>
        <MenuTab {...props} name="characters" onClick={()=> { changePage("characters") }}>
          👥 Characters
        </MenuTab>
        <MenuTab {...props} name="questions" onClick={()=> { changePage("questions") }}>
          ❓ Questions
        </MenuTab>
        <MenuTab {...props} name="testing" onClick={()=> { changePage("testing") }}>
          ✔ Testing
        </MenuTab>
      </div>

    </div>
  )

  
}

export default Menu


// The tabs of the menu
function MenuTab (props) {
  let classes = "rounded-l-lg text-white p-2 my-2"
  classes += props.name === props.page
  ? " bg-purple-500"
  : " ml-8 bg-purple-800 cursor-pointer"

  return (
  <div className={classes} {...props}>
    {props.children}
  </div>
  )
}

// The links in the menu
function MenuItem (props) {
  let classes = ""
  classes += props.name === props.page
  ? ""
  : ""

  return (
  <div className={classes}>
    {props.children}
  </div>
  )
}