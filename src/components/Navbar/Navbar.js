import React, { Component, useState } from 'react'
import posed from 'react-pose';
import "./Navbar.css"

import HamburgerMenu from 'react-hamburger-menu'
import {Link} from 'react-router-dom';

import Select from 'react-select';

import { useTranslation } from 'react-i18next';

import headerLinks from "../../data/header.json";

const optionsLang = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
    { value: 'az', label: 'AZ' }
  ]
const Animation = posed.div({
    closed: { height: 0 },
    open: { height: 'auto' }
})

const Navbar=(props)=>{
    const { history } = props

    const [open, setOpen] = useState(false);

    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;


   const handleClick=()=> { 
    setOpen(!open);
    }

   const  NavClick=()=>{
        setOpen( false);
        window.scrollTo(0, 0);
    }
        return (
            <nav className='navbar-nav navbar navbar-expand-lg navbar-darg bg-light mb-3 p-3 headMain'>
            <Link to='/' className='navbar-brand'>
                <img className="img" src={require("./logo.png")} width="170px" alt="Logo"/>
            </Link>

            <Animation className="animation ml-auto" pose={open? 'open' : 'closed'}>
            <ul className='navbar-nav ml-auto ul'>
                {headerLinks[lang].map((item,index)=>(
                    <li className='nav-item active' onClick={NavClick} key={index}>
                        <Link to={item.to} className='nav-link'>{item.title}</Link>
                    </li>
                ))}
                <li className="nav-item active lang">
                
                </li>
            </ul>
            
            </Animation>


            <Select 
          placeholder={lang.toUpperCase()}
          isSearchable ={false}
          defaultValue ={lang.toUpperCase()}
          onChange={(item)=>{
          let val=item.value;
        //   i18n.changeLanguage(val);  
        // console.log(window.location.pathname.substr(0));
          let number = 0;
                headerLinks[val].map((item, index) => {
                  if (window.location.pathname.substr(0) !== '/' && item.to ==
                    window.location.pathname.substr(0) || window.location.pathname.substr(3) !== '/' && item.to ==
                    window.location.pathname.substr(3)) {
                    number = index;
                  }
                })
                window.location.pathname = val + headerLinks[val][number].to;


          // window.location.pathname = i18n.language;
        }} options={optionsLang} /> 

        <span  className='span-ham'>
            <HamburgerMenu
            className='ham'
            isOpen={open}
            menuClicked={handleClick}
            width={35}
            height={25}
            strokeWidth={3}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
            />
            </span> 
        </nav>
        )
    
}
export default Navbar;