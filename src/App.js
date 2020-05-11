import React from "react";
import "./index.css";
import {
    MainContainer,
    NavigationBar,
    PageContainer
} from "./components/layout";

import { Frontpage } from "./pages";

function App() {
    const links = ["link1", "link2", "link3"];
    const website = true;
    return website ? (
        <Frontpage />
    ) : (
        <>
            <MainContainer>
                {/* left bar */}
                <NavigationBar links={links} />

                {/* right panel bar */}
                <div className="w-full bg-gray-900">
                    {/* top bar */}
                    <div className="w-full bg-gray-300 h-12"></div>
                    {/* content */}
                    <PageContainer links={links} />
                </div>
            </MainContainer>
        </>
    );
}

export default App;
