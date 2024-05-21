import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div>
        <header className='header'>
            <nav className='navbar'>
                <ul className="flex justify-around">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/advice">Advice</Link></li>
                    <li><Link to="/login"><i class="fa-solid fa-user-tie"></i></Link></li>
                    
                </ul>
            </nav>
        </header>
    </div>
  )
}
