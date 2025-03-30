"use server"
import React from "react"

export const getCommand = async (command) => {
    console.log("FROM SERVER: ", command);
    if (command === "/help") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p className="text-lg">Here is a list of custom commands</p>
                <ul className="list-disc pl-4">
                    <li>show certifications</li>
                    <li>show employment</li>
                    <li>show education</li>
                    <li>show objective</li>
                    <li>show skills</li>
                    <li>download resume</li>
                </ul>
            </div>
        )
    } else if (command === "show certifications") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p className="text-lg">CERTIFICATIONS</p>
                <ul className="list-disc pl-4">
                    <li>CompTIA A+ - 2025 </li>
                    <li>TCM Security PJPT - 2024</li>
                    <li>TCM Security PWPT - 2024 </li>
                    <li>TCM Security PJIT - 2024 </li>
                    <li>Google IT Support, Coursera - 2024 </li>
                    <li>Google Cybersecurity, Coursera - 2023  </li>
                    <li>IBM Full Stack Developer, Coursera - 2023  </li>
                </ul>
            </div>
        )
    } else if (command === "show employment") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p className="text-lg">EMPLOYMENT</p>
                <ul className="list-disc pl-4">
                    <li>Wal*Mart — Field Support Specialist IV,
                        ( August 2022 - September 2024 ) </li>
                    <li> AT&T — Retail Store Manager,
                        April 2020 - June 2022 </li>
                    <li>The Conflux — CEO, Executive Producer, and Audio Engineer,
                        ( June 2007 - December 2023 )</li>
                    <li>KeyBank — Licensed Relationship Manager,
                        ( April 2017 - April 2020 ) </li>
                    <li> BBVA Compass — Financial Sales Advisor,
                        (June 2015 - April 2017 )</li>
                </ul>
            </div>
        )
    } else if (command === "show objective") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p className="text-lg">OBJECTIVE</p>
                <p>
                    To become a valuable asset to your company while playing an integral part in securing and
                    protecting clients, employees and systems with my knowledge and experience in engineering,
                    technology, and cybersecurity
                </p>
            </div>
        )
    } else if (command === "show skills") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p className="text-lg">TECHNICAL SKILLS AND CORE COMPETENCIES</p>
                <ul className="list-disc pl-4">
                    <li>Active Directory  </li>
                    <li>Burp Suite</li>
                    <li>Wireshark  </li>
                    <li>Bash Scripting  </li>
                    <li>Computer Networking </li>
                    <li>ServiceNow  </li>
                    <li>React / React Native  </li>
                    <li>JavaScript / HTML / CSS   </li>
                    <li>Powershell</li>
                    <li>Computer Hardware  </li>
                    <li>Cloud Computing   </li>
                    <li>Python</li>
                    <li>Virtualization  </li>
                    <li>2-Factor Authentication   </li>
                    <li>Reverse Engineering   </li>
                </ul>
            </div>
        )
    } else if (command === "show education") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p className="text-lg">EDUCATION</p>
                <ul className="list-disc pl-4">
                    <li>ACTIVATE WORK / PER SCHOLAS — IT and Security Fundamentals - 2025  </li>
                    <li>SPRINGBOARD — Software Developer Career Program - 2024 </li>
                    <li>THE CONSERVATORY OF RECORDING ARTS AND SCIENCES  — Master of Recording Arts II - 2007</li>
                </ul>
            </div>
        )
    } else if (command === "download resume") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p className="text-lg">RESUME</p>
            </div>
        )
    } else if (command === "exit" || command === "home") {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">

            </div>
        )
    } else {
        return (
            <div className="text-green-400 flex flex-col pl-4 pb-2">
                <p >Command not found...</p>
            </div>
        )
    }



}