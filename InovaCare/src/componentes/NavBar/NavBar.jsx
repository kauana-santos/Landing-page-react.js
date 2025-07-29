import React from 'react'
import "./NavBar.css"
import Rodape from '../Rodape/Rodape'

const NavBar = () => {
  return (
    <div className='containerNav'>
        <span>Logo</span>

        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Planos</a></li>
                <li><a href="">Nossos valores</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
        </nav>

        <div>
            <button>Entrar</button>
        </div>
    </div>
  )
}

export default NavBar