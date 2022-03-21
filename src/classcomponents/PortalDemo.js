import React from 'react'
import ReactDOM  from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>
        Portals Demo
    </h1>, document.getElementById('portal-root')
  )
}

export default PortalDemo

//The first parameter to create portal can be any element that react can render
//It can be even number, string, jsx or even component

//what is the use of portals?