import React from 'react'
import './social.css'

import {
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

import { BsFillPersonBadgeFill } from 'react-icons/bs'
import { SiLinktree } from 'react-icons/si'

const Socials = () => {
    return (
        <div>
            <div className="social_media">
                <a href="https://github.com/losier" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/zzcwc/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/twxey_" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
                <a href="http://aarabnishchal.herokuapp.com/" target="_blank" rel="noreferrer">
                    <BsFillPersonBadgeFill />
                </a>
                <a href="https://linktr.ee/zzcwc" target="_blank" rel="noreferrer">
                    <SiLinktree />
                </a>
            </div>
            <div className="copyright">
                <small>&copy; Losier. All rights reserved.</small>
            </div>
        </div>
    )
}

export default Socials