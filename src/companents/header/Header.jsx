
import React, { useState } from "react";
import "./header.scss"
import navlogo from "../../assets/samsung1.jpg"
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const links = ["All", "Mobilli", "TV & Audio", "Appliances", "Accessories", "SmartThings","Shop","About", "Contact us"]
    const search = ["Explore", "Support", "For Business"]
  return (
    <div className='container'>
         <nav className="navbar">
        <div className="navbar__logo">
          <img className="navbar__foto" src={navlogo} alt="" />
        </div>
        <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar__collection">
            {
              links.map((el, index) => (<li className="navbar__item"><a key={index} href="#">{el}<span></span></a></li>))
            }
          </ul>
          <ul className="navbar__collection">
            {
              search.map((el, index) => (<li className="navbar__item"><a key={index} href="#">{el}<span></span></a></li>))
            }
       </ul>
        </div>
        <div className="navbar__icon">
          <IoSearchOutline />
          <CiUser />
          <IoCartOutline />
        </div>

        <div onClick={toggleMenu} className="navbar__menu">
          <RiMenu2Fill />
        </div>
      </nav>
       
     
    </div>
  )
}

export default Header