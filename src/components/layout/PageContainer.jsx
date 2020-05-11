import React from "react";
import { Router } from "@reach/router";

const PageContainer = ({ children, links, ...props }) => (
    <div
        className="w-full bg-gray-200 p-5"
        style={{ height: "Calc(100% - 3rem)" }}
    >
        <Router primary={false}>
            <div path={"/"}>Dashboard</div>
            {links.map(link => {
                return <Item path={`/${link}`} link={link} />;
            })}
        </Router>
    </div>
);

const Item = ({ link }) => {
    return <div>{link}</div>;
};
export default PageContainer;
