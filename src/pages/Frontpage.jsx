import React from "react";
import { Experience } from "../components/website";

const Frontpage = ({ ...props }) => {
    return (
        <div className=" h-screen w-full">
            {/* header */}
            <div className=" hidden md:flex w-full bg-gray-900 pt-4 md:mr-4 p-4 md:pt-0 pb-0 justify-end text-white uppercase font-light">
                <div className="p-12 pt-2 pb-2 border-b-red-700 border-solid border-1 p-2">
                    Home
                </div>
                <div className="p-12 pt-2 pb-2 hover:bg-gray-700  cursor-pointer p-2">
                    About
                </div>
                <div className="mr-12 p-12 pb-2 pt-2 hover:bg-gray-700  cursor-pointer p-2">
                    Blog
                </div>
            </div>

            {/* Body */}
            <div className=" w-full bg-gray-900 ">
                <div className="sm:p-10 md:p-24 pt-20 md:pt-4 p-4 pb-12 lg:16">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 text-center text-left uppercase font-bold text-white text-5xl align-middle rotate-90 ">
                            <div>
                                Jonny
                                <span className=" font-thin">Carter</span>
                            </div>
                        </div>
                        <div className="w-full pt-12 text-center md:pt-0 md:w-1/2 text-xl font-thin text-gray-300 uppercase ">
                            <div>
                                I have over{" "}
                                <span className="text-red-600 font-semibold text-2xl">
                                    13 years
                                </span>{" "}
                                experience, working as a{" "}
                                <span className="text-red-600 font-semibold text-2xl">
                                    Software engineer
                                </span>{" "}
                                in commercial environments
                            </div>
                            <button
                                type="button"
                                className="uppercase bg-red-700 p-2 font-light text-base hover:bg-red-600 mt-8 rounded shadow"
                            >
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full bg-red-700 ">
                <div className="p-6 text-center text-white text-xl md:text-3xl font-hairline">
                    I build cloud-based software systems, mobile applications
                    and websites.
                </div>
            </div>

            <div className=" md:flex md:flex-row md:p-6">
                <div className="sm:w-full md:w-2/3">
                    <div className="container p-12 mb-6">
                        <div className="font-bold uppercase text-3xl">
                            <span className="text-gray-900 font-bold">
                                About
                            </span>
                            <span className="text-red-700 font-thin">Me</span>
                        </div>
                        <div className="text-base mt-10 font-light justify-start">
                            Hi! I'm Jonny, a software engineer, located in{" "}
                            <span className="font-bold text-red-700">
                                Preston, Lancashire
                            </span>
                            .
                            <br />
                            <br />I am a software engineer with over 13 years
                            experience working in commercial environments. My
                            experience includes developing web, mobile and
                            desktop applications.
                            <br />
                            <br /> I have a broad skill-set across numerous
                            programming languages, frameworks and platforms,
                            which has helped to make me a well rounded software
                            engineer, who is always willing to try my hand at
                            the most challenging of tasks.
                            <br />
                            <br />
                            I'm currently working at{" "}
                            <span className="text-red-700 font-bold">
                                Blue Wren
                            </span>
                            , where I build software using the following
                            technologies:
                            <ul className="list-disc ml-12 mt-6">
                                <li>JavaScript (ES6+)</li>
                                <li>React</li>
                                <li>React Native</li>
                                <li>HTML & (S)CSS</li>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/3 p-12  text-center  rounded text-gray-500 m-12">
                    {/* Image Here */}
                </div>
            </div>

            <div className="bg-gray-300 md:flex md:flex-row md:p-6">
                <div className="hidden md:block md:w-1/3 p-12 bg-gray-300 m-12 text-gray-300 text-center">
                    {/* Image Here */}
                </div>
                <div className="sm:w-full md:w-2/3">
                    <div className="container p-12 ">
                        <div className="font-bold uppercase text-4xl">
                            <span className="text-gray-900 font-bold">MY</span>
                            <span className="text-red-700 font-thin">
                                Experience
                            </span>
                        </div>
                        <Experience />
                    </div>
                </div>
            </div>

            <div className="bg-red-700 md:flex md:flex-row">
                <div className="sm:w-full md:w-full">
                    <div className=" w-full p-12">
                        <div className="font-bold uppercase text-4xl">
                            <span className="text-gray-900 font-bold">MY</span>
                            <span className="text-gray-200 font-thin">
                                Skills
                            </span>
                        </div>
                        <div className=" md:flex md:flex-row justify-between md:mx-auto">
                            <div className="md:w-1/3 m-4 md:flex-row">
                                <div className="text-xl text-white font-semibold uppercase">
                                    Current Technologies
                                </div>
                                <div>
                                    <ul className="list-disc ml-6 text-white mt-6 font-thin">
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Javascript (ES6+)</li>
                                        <li>PHP</li>
                                        <li>Laravel 5.2+</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="md:w-1/3 m-4">
                                <div className="text-xl text-white font-semibold uppercase">
                                    Tools
                                </div>
                                <div>
                                    <ul className="list-disc ml-6 text-white mt-6 font-thin">
                                        <li>GIT</li>
                                        <li>AWS</li>
                                        <li>VS Code</li>
                                        <li>NPM</li>
                                        <li>Linux Commands</li>
                                        <li>Expo</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="md:w-1/3 m-4 md:flex-row">
                                <div className="text-xl text-white font-semibold uppercase">
                                    Past Technologies
                                </div>
                                <div>
                                    <ul className="list-disc ml-6 text-white mt-6 font-thin">
                                        <li>Perl</li>
                                        <li>Python</li>
                                        <li>ASP.NET</li>
                                        <li>VB.NET</li>
                                        <li>jQuery</li>
                                        <li>Java</li>
                                        <li>Objective C</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="md:w-1/3 m-4">
                                <div className="text-xl text-white font-semibold uppercase">
                                    Expermented with
                                </div>
                                <div>
                                    <ul className="list-disc ml-6 text-white mt-6 font-thin">
                                        <li>Docker</li>
                                        <li>Apollo</li>
                                        <li>ExpressJS</li>
                                        <li>AdonisJS</li>
                                        <li>Swift</li>
                                        <li>Flutter</li>
                                        <li>React-Three-Fiber</li>
                                        <li>Three.js</li>
                                        <li>AWS Amplify</li>
                                        <li>Gatsby</li>
                                        <li>Netlify</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full p-12 bg-gray-900 mx-auto text-white text-center">
                <div className="uppercase">
                    <span className="font-bold">Jonny</span>
                    <span className="font-thin">Carter</span>
                </div>
            </div>
        </div>
    );
};

export default Frontpage;
