import React from 'react'

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary" >
        {/* desktop/tablet */}
        <div  className="hidden md:flex w-full h-full items-center justify-between">
            
        </div>
        {/* mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full ">

        </div>
    </div>
  )
}

export default Header