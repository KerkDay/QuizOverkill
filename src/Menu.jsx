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
      <div className={`${menuOpen} sm:block sm:max-h-screen h-screen transition-all absolute sm:static bg-gray-800 top-full left-0 right-0 z-50 sm:z-0 flex flex-col`}>

        {/* Tabs */}
        <MenuTab {...props} name="options" onClick={()=> { changePage("options") }}>
          ⚙ Options
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

        {/* Links */}
        <div className={`p-2 justify-self-end`}>
          <MenuItem {...props}>
            <a href="https://kerkday.com" target="_blank" className="no-underline">
              <Icons.Link className="h-4 inline-block mr-1"/>
              Created by Kerk Day
            </a>
          </MenuItem>
        </div>
      </div>

    </div>
  )

  
}

export default Menu


// The tabs of the menu
function MenuTab (props) {
  // IF it's the current tab, then change the css a bit
  let currentClass = props.name === props.page
  ? " bg-purple-500"
  : " ml-8 bg-purple-800 cursor-pointer"

  return (
  <div className={`${currentClass} rounded-l-lg text-white p-2 my-2`} {...props}>
    {props.children}
  </div>
  )
}

// The links in the menu
function MenuItem (props) {
  // If the link is an active page, make it bold!
  let currentClass = props.name === props.page
  ? "font-bold"
  : ""

  return (
  <div className={`${currentClass} text-gray-200 text-base text-right hover:text-gray-100`}>
    {props.children}
  </div>
  )
}