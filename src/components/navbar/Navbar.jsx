import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <header>
      <div className="logo">
        <h2>ar shakir</h2>
      </div>
      <nav>
        <ul>
          <li><a href=" ">Product</a></li>
          <li><a href=" ">Template</a></li>
          <li><a href=" ">Blog </a></li>
          <li><a href=" ">Website</a></li>
        </ul>
      </nav>
      <div className="buttons">
         <a href=" " >sign in</a>
         <a href=" " className='start-free'>start free</a>
      </div>
    </header>
  )
}

export default Navbar