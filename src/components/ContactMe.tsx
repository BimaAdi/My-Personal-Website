"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

const GITHUB_URL = "https://github.com/BimaAdi"
const LINKEDIN_URL = "https://www.linkedin.com/in/muhammad-bima-adi-prabowo-0a9847192/"
const GMAIL = "bimaadi419@gmail.com"

const ContactMe = () => {
    const [isGithubCopied, setIsGithubCopied] = useState<boolean>(false);
    const [isLinkedinCopied, setIsLinkedinCopied] = useState<boolean>(false);
    const [isGmailCopied, setIsGmailCopied] = useState<boolean>(false);

    const copyGithub = () => {
        navigator.clipboard.writeText(GITHUB_URL);
        setIsGithubCopied(true)
        setIsLinkedinCopied(false)
        setIsGmailCopied(false)
    }

    const newTabGithub = () => {
        window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
    }

    const copyLinkedin = () => {
        navigator.clipboard.writeText(LINKEDIN_URL)
        setIsGithubCopied(false)
        setIsLinkedinCopied(true)
        setIsGmailCopied(false)
    }

    const newTabLinkedin = () => {
        window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer');
    }

    const copyGmail = () => {
        navigator.clipboard.writeText(GMAIL);
        setIsGithubCopied(false)
        setIsLinkedinCopied(false)
        setIsGmailCopied(true)
    }

    return (
        <section
            style={{ height: "500px" }}
            className="w-100 flex flex-col items-center justify-center"
        >
            <h2 className="text-center text-3xl pb-5">Contact Me</h2>
            <div className="h-0.5 w-3/12 border-b-2 bg-secondary"></div>
            {/* Mobile */}
            <ul className="mt-5 flex md:hidden ">
                <AiFillGithub
                    style={{ display: "block", margin: "10px", width: "50px", height: "50px", cursor: "pointer" }}
                    onClick={copyGithub}
                />
                <AiFillLinkedin
                    style={{ display: "block", margin: "10px", width: "50px", height: "50px", cursor: "pointer" }}
                    onClick={copyLinkedin}
                />
                <SiGmail
                    style={{ display: "block", margin: "10px", width: "50px", height: "50px", cursor: "pointer" }}
                    onClick={copyGmail}
                />
            </ul>
            {/* Desktop */}
            <ul className="mt-5 hidden md:block">
                <li className="bg-gray rounded-lg p-5 m-2 flex items-center justify-between max-w-lg">
                    <div className="flex justify-start items-center">
                        <AiFillGithub
                            style={{ display: "block", width: "30px", height: "30px" }}
                        />
                        <p className="ml-3">{GITHUB_URL}</p>
                    </div>
                    <div className="flex w-auto justify-end items-center">
                        <FiExternalLink
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={newTabGithub}
                        />
                        {isGithubCopied ? <FaCheck
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={copyGithub}
                        /> : <FaRegCopy
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={copyGithub}
                        />}
                    </div>
                </li>
                <li className="bg-gray rounded-lg p-5 m-2 flex items-center justify-between max-w-lg">
                    <div className="flex justify-start items-center">
                        <AiFillLinkedin style={{ display: "block", width: "30px", height: "30px" }} />
                        <p className="ml-3 max-w-xs">{LINKEDIN_URL}</p>
                    </div>
                    <div className="flex w-auto justify-end items-center">
                        <FiExternalLink
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={newTabLinkedin}
                        />
                        {isLinkedinCopied ? <FaCheck
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={copyLinkedin}
                        /> : <FaRegCopy
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={copyLinkedin}
                        />}
                    </div>
                </li>
                <li className="bg-gray rounded-lg p-5 m-2 flex items-center justify-between max-w-lg">
                    <div className="flex justify-start items-center">
                        <SiGmail style={{ display: "block", margin: "auto 0 auto 0px", width: "30px", height: "30px" }} />
                        <p className="ml-3">{GMAIL}</p>
                    </div>
                    <div className="flex w-auto justify-end items-center">
                        {isGmailCopied ? <FaCheck
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={copyGmail}
                        /> : <FaRegCopy
                            style={{ display: "block", marginLeft: "10px", width: "20px", height: "20px", cursor: "pointer" }}
                            onClick={copyGmail}
                        />}
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ContactMe;