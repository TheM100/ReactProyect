import React from "react";
import { FaTwitter, FaGithub, FaMastodon } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FiTwitch } from "react-icons/fi";

function SocialNetworkIcons() {
    return (
        <div className="socialNetworkIcons flex justify-between px-2 py-6">
            <FaTwitter className="h-6 w-6" />
            <BiLogoFacebookSquare className="h-6 w-6" />
            <FaGithub className="h-6 w-6" />
            <AiFillInstagram className="h-6 w-6" />
            <FiTwitch className="h-6 w-6" />
            <FaMastodon className="h-6 w-6" />
        </div>
    )
}


export { SocialNetworkIcons }