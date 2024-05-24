import React, { useState } from 'react'
import './Navbar.css'
import './App.css'
import './Thumb.css'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from './image/logo.png'

function Header() {



    const Navigate = useNavigate()

    const handalDev = () => {
        Navigate('/devloper')
    }

    return (
        <>
            {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <div className="menu-toggle" id="hamburger" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} style={{ color: 'white' }}></i>
            </div>
            <div className={`overlay ${isMenuOpen ? 'menu-open' : ''}`}></div>
            <div className={` ${isMenuOpen ? 'menu-open' : ''}`}>
                <nav className={`${isMenuOpen ? 'menu-open' : ''}`}>
                    <img src={logo} className="brand" />
                    <ul class="navbar">
                        <li class="nav">
                            <div class="f-18 navItem ">
                                <a href="/">HOME</a>
                            </div>
                        </li>
                        <li class="nav" onClick={handalDev}>
                            <div class="f-18 navItem ">
                                <a>DEVELOPERS</a>
                            </div>
                        </li>
                        <li class="nav">
                            <div class="f-18 navItem ">
                                <a href="/affiliate">AFFILIATES</a>
                            </div>
                        </li>
                        <li class="nav">
                            <div class="f-18 navItem ">
                                <a href="/contactus">CONTACT US</a>
                            </div>
                        </li>
                        <li class="nav">
                            <div class="f-18 navItem ">
                                <a href="/aboutus">ABOUT US</a>
                            </div>
                        </li>
                        <li class="nav">
                            <div class="f-18 navItem ">
                                <a href="/privacy-policy">PRIVACY-POLICY</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div> */}

            <Navbar bg="black" className='fun' expand="lg">
                <Navbar.Brand href="" onClick={() => Navigate('/')}><img style={{ width: '300px' }} src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: 'white' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="ms-auto"> */}
                    <ul className="ms-auto okok" >
                        <li class="nav ok" >
                            <div class="f-18 navItem " onClick={() => Navigate('/')}>
                                <a >HOME</a>
                            </div>
                        </li>
                        <li class="nav ok" onClick={handalDev}>
                            <div class="f-18 navItem ">
                                <a>DEVELOPERS</a>
                            </div>
                        </li>
                        <li class="nav ok">
                            <div class="f-18 navItem " onClick={() => Navigate('/contact')}>
                                <a >AFFILIATES</a>
                            </div>
                        </li>
                    </ul>
                    {/* <Nav.Link href="/devloper">DEVELOPERS</Nav.Link> */}

                    {/* </Nav> */}
                </Navbar.Collapse>
            </Navbar>



        </>
    )
}

export default Header