import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import "../Styles/main.css"

function NavBar(){
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <div className='container-nav'>
            <h3>Logo</h3>
            
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Products</a>
                <a href="/#">Contact</a>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </div>
    )
}

export default NavBar;