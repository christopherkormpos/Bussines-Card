import React from 'react'
import facebook from "../images/Facebook-Icon.png";
import instagram from "../images/Instagram-Icon.png";
import github from "../images/GitHub-Icon.png";

export default function Footer() {
    return (
        <footer className='footer'>
            <a href="https://www.facebook.com/profile.php?id=100009072761232">
                <img src={facebook} alt="facebook-icon" className='facebook' />
            </a>
            <a href="https://www.instagram.com/xristoforosk._/">
                <img src={instagram} alt="instagram-icon" className='instagram' />
            </a>
            <a href="https://github.com/christopherkormpos">
                <img src={github} alt="github-icon" className='github' />
            </a>
        </footer>
    )
}