import React from "react";

const MainContainer = ({ children, ...props }) => (
    <div className="flex bg-gray-500 h-screen w-full">{children}</div>
);
export default MainContainer;
