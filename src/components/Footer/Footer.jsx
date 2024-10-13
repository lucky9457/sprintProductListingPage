import React, { useState } from 'react';
import curencyicon from "../../assets/Group.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import gpay from "../../assets/gpay.png";
import mastercard from "../../assets/mastercard.png";
import opay from "../../assets/opay.png";
import paypal from "../../assets/paypal.png";
import amex from "../../assets/amex.png";
import applepay from "../../assets/applepay.png";

const Footer = () => {
    const [isMettaMuseOpen, setIsMettaMuseOpen] = useState(false);
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

    // Toggle functions
    const toggleMettaMuse = () => {
        setIsMettaMuseOpen(prevState => !prevState);
    };

    const toggleQuickLinks = () => {
        setIsQuickLinksOpen(prevState => !prevState);
    };

    return (
        <div className='footersection'>
            <div className="topfootersection">
                <div className="getintouchcontainer">
                    <h1 className='befrst'>BE THE FIRST TO KNOW</h1>
                    <p>Sign up for updates from metta muse</p>
                    <br />
                    <div className="emailcontainer">
                        <input type='email' className='emailinput' placeholder='Enter your email' />
                        <button className='subscribebtn'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="contactus">
                    <h1>CONTACT US</h1>
                    <p>+44221335360</p>
                    <br />
                    <h1>CURRENCY</h1>
                    <div className='currencycontainer'>
                        <img src={curencyicon} alt="RS" />
                        <p>USD</p>
                    </div>
                    <p className='aboutransactions'>
                        Transactions will be completed in Euros and a currency reference is available on hover
                    </p>
                </div>
            </div>
            <div className="bottomfootersection">

                <div className="mettamuse">
                    <div className='headingcontainer' onClick={toggleMettaMuse}>
                        <h1>metta muse</h1>
                        {isMettaMuseOpen ? <IoIosArrowUp className='arrow' /> : <IoIosArrowDown className='arrow' />}
                    </div>
                    {isMettaMuseOpen && (
                        <div className="paracontainer">
                            <p>About Us</p>
                            <p>Stories</p>
                            <p>Artisans</p>
                            <p>Boutiques</p>
                            <p>Contact Us</p>
                            <p>EU Compliances Docs</p>
                        </div>
                    )}
                </div>


                <div className="quicklinks">
                    <div className='headingcontainer' onClick={toggleQuickLinks}>
                        <h1>QUICK LINKS</h1>
                        {isQuickLinksOpen ? <IoIosArrowUp className='arrow' /> : <IoIosArrowDown className='arrow' />}
                    </div>
                    {isQuickLinksOpen && (
                        <div className="paracontainer">
                            <p>Orders & Shipping</p>
                            <p>Join/Login as a Seller</p>
                            <p>Payment & Pricing</p>
                            <p>Return & Refunds</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    )}
                </div>

                <div className="followussection">
                    <h1>FOLLOW US</h1>
                    <div className='socialiconscontainer'>
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                    <br />
                    <h1>metta muse ACCEPTS</h1>
                    <div className='walletcontainer'>
                        <div className="paymentbackgrond">
                            <img src={gpay} alt="Google Pay" />
                        </div>
                        <div className="paymentbackgrond">
                            <img src={mastercard} alt="Mastercard" />
                        </div>
                        <div className="paymentbackgrond">
                            <img src={paypal} alt="Paypal" />
                        </div>
                        <div className="paymentbackgrond">
                            <img src={amex} alt="Amex" />
                        </div>
                        <div className="paymentbackgrond">
                            <img src={opay} alt="Opay" />
                        </div>
                        <div className="paymentbackgrond">
                            <img src={applepay} alt="Apple Pay" />
                        </div>
                    </div>
                </div>
            </div>
            <p className='copyright'>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    );
};

export default Footer;
