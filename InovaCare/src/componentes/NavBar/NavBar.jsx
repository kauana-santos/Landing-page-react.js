import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='containerNav'>
        <span>Logo</span>

        <nav>
            <ul>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
            </ul>
        </nav>

        <div>
            <button>Entrar</button>
        </div>
    </div>
  )
}

export default NavBar