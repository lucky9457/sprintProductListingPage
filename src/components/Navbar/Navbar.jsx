import React from 'react'
import companylogo from "../../assets/Vector.svg"
import logo from "../../assets/LOGO.png"
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {
    const [visible, setvisible] = useState(false)

    const handlemenu = () => {
        setvisible((prev) => !prev)
    }
    return (
        <>
            <nav className='nav'>
                <div className='frstnav'>
                    <div className='logoContainer'>
                        <img src={companylogo} />
                    </div>
                    <div className='logocontainer2'>
                        <img src={logo} />
                    </div>
                    <div className='iconslinkscontainer'>
                        <IoIosSearch className='icons' />
                        <CiHeart className='icons' />
                        <LuShoppingBag className='icons' />
                        <CgProfile className='icons' />
                    </div>
                </div>
                <div className='linkContainer'>
                    <button className='navlink'>SHOP</button>
                    <button className='navlink'>SKILLS</button>
                    <button className='navlink'>STORES</button>
                    <button className='navlink'>ABOUT</button>
                    <button className='navlink'>CONTACT US</button>
                </div>

            </nav>
            <div className='mobilenav'>
                <div className='logoContainer'>
                    {!visible ? <IoReorderThreeOutline onClick={handlemenu} className='threelines' />
                        : <RxCross2 onClick={handlemenu} className='threelines' />}
                    <img className='imglog' src={companylogo} />
                </div>
                <div className='logocontainer2'>
                    <img src={logo} />
                </div>
                <div className='iconslinkscontainer'>
                    <IoIosSearch className='icons' />
                    <CiHeart className='icons' />

                </div>

            </div>
            <div className={`linkContainermobile ${visible ? "linkContainermobileview" : "linkContainermobilehide"}`} >
                <button className='navlink'>SHOP</button>
                <button className='navlink'>SKILLS</button>
                <button className='navlink'>STORIES</button>
                <button className='navlink'>ABOUT</button>
                <button className='navlink'>CONTACT US</button>
            </div>
        </>
    )
}

export default Navbar
