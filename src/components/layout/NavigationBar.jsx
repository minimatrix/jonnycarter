import React from "react";
import { Link } from "@reach/router";

const Navlink = ({ link }) => {
    return (
        <Link to={link}>
            <li className=" p-2 hover:bg-green-600 cursor-pointer">{link}</li>
        </Link>
    );
};
const NavigationBar = ({ children, links, ...props }) => (
    <div className="bg-gray-800 w-16 h-screen md:w-64">
        <div className="p-0 text-white text-center bg-gray-900 m-2 hidden rounded md:block">
            LOGO HERE
        </div>
        {/* small logo */}
        <div className="p-1 text-white text-center bg-gray-900 m-2 rounded block md:hidden">
            SM LOGO
        </div>
        {/* Navigation */}
        <div className="pt-10 m-4 text-white">
            <ul>
                {links.map(link => (
                    <Navlink link={link} />
                ))}
            </ul>
        </div>
    </div>
);
export default NavigationBar;
