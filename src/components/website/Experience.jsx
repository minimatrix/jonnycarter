import React, { useEffect, useState } from "react";

const Experience = () => {
    const [selectedItem, setSelectedItem] = useState("Bluewren");
    const data = [
        {
            key: "Bluewren",
            from: "2017",
            to: "Present",
            duties: [
                "Engineering complete end-to-end web application solutions with the latest frameworks and technologies, such as Laravel, Node.js and React.",
                "Building cross-platform mobile applications with React Native",
                "Collaborating with other Software Engineers to design, implement and enhance features of internal and external platforms.",
                "Embracing the Scrum Methodology to manage my own workload when necessary and, completing tasks in a timely manner, producing well written, organized and optimized code.",
                "Adhering to Coding Standards and contributing to the standards where I feel appropriate."
            ]
        },
        {
            key: "TextGoto",
            from: "2010",
            to: "2017",
            duties: [
                "Building mobile applications for internal management of the TextGoto systems and public facing applications which integrate with the TextGoto API.",
                "Developing diagnostic tools to perform automated analytics, complex testing and reporting the state of the TextGoto Platform, These tools were written in PHP",
                "Updating, maintaining and testing changes to the TextGoto Platform, which was written in ASP.NET with VB.NET and uses an MSSQL database.",
                "Developing websites for the company, the companies products and on occasions developing sites for customer products too."
            ]
        },
        {
            key: "MobileDataUK",
            from: "2007",
            to: "2010",
            duties: [
                "Maintaining, updating and developing functionality of the MDUK-Console, a PHP platform for running analytics on data collection",
                "Building mobile data collection applications which run on a variety of handheld devices/platforms such as Windows mobile, Android and Apple Devices and also J2ME applets which run on Nokia devices"
            ]
        }
    ];

    return (
        <div className="md:flex text-lg font-light pt-4 justify-start">
            <div className="w-full md:w-1/4 pt-12 mb-12 ">
                {/* <div className="bg-red-700 text-white p-2 font-semibold">
                    Blue Wren
                </div>
                <div className="hover:bg-gray-500 cursor-pointer hover:text-white p-2 font-semibold">
                    TextGoto
                </div>
                <div className="hover:bg-gray-500 cursor-pointer hover:text-white p-2 font-semibold">
                    Mobile Data UK
                </div> */}
                {data.map(e => {
                    const bgColor =
                        selectedItem == e.key ? "bg-red-700" : "bg-gray-300";
                    const hoverColor =
                        selectedItem == e.key
                            ? "hover:bg-red-700"
                            : "hover:bg-gray-500";

                    const textColor = selectedItem == e.key && "text-white";

                    return (
                        <div
                            onClick={() => setSelectedItem(e.key)}
                            className={`${hoverColor} ${bgColor} cursor-pointer ${textColor} hover:text-white p-2 font-semibold`}
                        >
                            {e.key}
                        </div>
                    );
                })}
            </div>
            <div className="w-full md:w-3/4  p-2 md:pl-12">
                <div className="font-semibold">
                    Software Engineer{" "}
                    <span className="text-red-700 font-bold">
                        @ {data.find(e => e.key == selectedItem).key}
                    </span>
                    <div className="font-thin text-base">
                        {" "}
                        {data.find(e => e.key == selectedItem).from} -{" "}
                        {data.find(e => e.key == selectedItem).to}
                    </div>
                </div>
                <div>
                    <ul className="list-disc">
                        {data
                            .find(e => e.key == selectedItem)
                            .duties.map(duty => {
                                return (
                                    <li className="text-base m-4">{duty}</li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
