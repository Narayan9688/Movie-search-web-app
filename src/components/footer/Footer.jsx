import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Movix is a web application that enables users to search for movies and TV shows based on top reviews, providing a user-friendly experience similar to IMDb. The project was inspired by a YouTube tutorial, and it allows users to discover and explore a vast collection of movies and TV shows..
                </div>
                <div className="socialIcons">
                   <a href="https://www.facebook.com/your-facebook-url" target="_blank" rel="noopener noreferrer" className="icon">
                      <FaFacebookF />
                   </a>
                   <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon">
                       <FaInstagram />
                   </a>
                   <a href="https://www.twitter.com/your-twitter-url" target="_blank" rel="noopener noreferrer" className="icon">
                       <FaTwitter />
                  </a>
                    <a href="https://www.linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                   </a>
             </div>

            </ContentWrapper>
        </footer>
    );
};

export default Footer;
