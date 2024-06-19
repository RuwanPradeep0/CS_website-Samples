import React, { useState } from 'react';
import { MdMenu, MdClose, MdSearch } from 'react-icons/md';
import './navbar.css';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assests/images/IEEE_CS_SBC _Logo.png'
import IEEELogo from '../../assests/images/IEEE SB Logo.png'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const toggleIcon = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='nav__section'>
      <div className='header__mainContainer'>
        <div className='custom__container header_Container'>
          <div className='Logo01__Container'>
            <img src={LogoWhite} className='logo_01' alt='logo' />
          </div>

          <div className='HeaderBody__container'>
            {/* Navigation menu */}
            <ul className={`${clicked ? 'mobile__menu' : 'nav__menu'}`}>
              <Link to='/' className='nav__link lato-bold' onClick={() => setClicked(false)}>Home</Link>
              <Link to='/aboutUs' className='nav__link lato-bold' onClick={() => setClicked(false)}>About Us</Link>
              <Link to='/committee' className='nav__link lato-bold' onClick={() => setClicked(false)}>Committee</Link>
              <Link to='/PastActivities' className='nav__link lato-bold' onClick={() => setClicked(false)}>Past Activities</Link>
              <Link to='/ContactUs' className='nav__link lato-bold' onClick={() => setClicked(false)}>Contact Us</Link>
            </ul>

            {/* Mobile menu icon */}
            <div id='mobile'>
              {clicked ? (
                <MdClose size={40} className='close-icon icon' onClick={toggleIcon} />
              ) : (
                <MdMenu size={40} className='menu-icon icon' onClick={toggleIcon} />
              )}
            </div>

            {/* Desktop search bar */}
            <div id='desktop_searchbar' className='searchbar_default'>
              <input type='text' placeholder='Search Here...' />
              <button>
                <i className='fa fa-search'><MdSearch size={24} className='search_icon' /></i>
              </button>
            </div>
          </div>

          {/* Second logo */}
          <div className='Logo02__Container'>
            <img src={IEEELogo} className='logo_02' alt='logo' />
          </div>
        </div>

        {/* Mobile search bar */}
        <div id='mobile_searchbar' className='searchbar_default'>
          <input type='text' placeholder='Search Here...' />
          <button>
            <i className='fa fa-search'><MdSearch size={24} className='search_icon' /></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
