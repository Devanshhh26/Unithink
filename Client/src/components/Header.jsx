import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Header() {
  return (
        <Navbar fluid rounded className='top-0 w-full z-10 shadow-md'>
            <Navbar.Brand href="/">
            <img src={logo} className="mr-3 h-16 sm:h-14 md:h-16 lg:h-20" alt="Unithink" />
            
            </Navbar.Brand>
            <div className="flex md:order-2">
            <Link to='/signin'>
                <Button gradientDuoTone='pinkToOrange' outline pill>Get Started</Button>
            </Link>
            <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
            <Navbar.Link active>
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to='/countries'>
                    Countries
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to='/faqs'>
                    FAQs
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to='/contact'>
                    Contact
                </Link>
            </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default Header