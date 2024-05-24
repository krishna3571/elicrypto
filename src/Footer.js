import React from 'react'
import './css/footer.css'
import logo from './image/logo.png'
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
    const navigate = useNavigate();
    const hendelcontavt = () => {
        navigate('/contact')
    }
    const hendelaboutus = () => {
        navigate('/aboutus')
    }
    const hendelaprivacy = () => {
        navigate('/privacypolicy')
    }
    const hendelatermandconditions = () => {
        navigate('/termandconditions')
    }
    return (
        <>

            <footer class="footer ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="widget1">
                                <div class="logo">
                                    <img src={logo} class="img-fluid" alt="" />
                                </div>
                                <p>
                                    🌟 Welcome to Eli Crypto🎮✨ Dive into the ultimate gaming experience! Explore the latest game reviews, tips, and news, all in one place. Join our community and level up your gaming skills with Eli Crypto! 🚀👾 #GameOn #EliCrypto
                                </p>
                                {/* <div class="socialLinks">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        {/* <div class="col-md-6 col-lg-4">
                            <div class="widget2">
                                <h5>
                                    Latest News
                                </h5>
                                <div class="media">
                                    <img class="img-fluid" src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt="" />
                                    <div class="media-body d-flex align-self-center">
                                        <div class="content">
                                            <a href="#">
                                                <p>
                                                    Did son unreserved themselves indulgence its
                                                </p>
                                            </a>
                                            <span>
                                                Aug 17, 2019
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="media">
                                    <img class="img-fluid" src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt="" />
                                    <div class="media-body d-flex align-self-center">
                                        <div class="content">
                                            <a href="#">
                                                <p>
                                                    Rapturous am eagerness it as resolving household
                                                </p>
                                            </a>
                                            <span>
                                                Aug 17, 2019
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div class="col-sm-6 col-lg-3">
                            <div class="widget3     ">
                                <h5>
                                    Quick Links
                                </h5>
                                <ul>
                                    <li>
                                        <a onClick={hendelcontavt}>
                                            CONTACT US
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={hendelaboutus}>
                                            ABOUT US
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={hendelaprivacy}>
                                            PRIVACY-POLICY
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={hendelatermandconditions}>
                                            TERMS & CONDITIONS
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="widget4">
                                <h5>
                                    CONTACT US
                                </h5>
                                <ul>
                                    <li>

                                        <a>
                                            <p><MdEmail className='font_size_01' /> infinityinfotech100@gmail.com</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <p><FaLocationDot className='font_size_01' /> Eli Crypto 123 Gaming Lane Suite 456 Gameville, GT 78910  </p>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyRightArea">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <p>&copy; Copyright All rights reserved 2024.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer