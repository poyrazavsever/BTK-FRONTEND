import React, { useState } from "react";

const tabList = [
    { key: "applied", label: "Başvurduğun Projeler" },
    { key: "joined", label: "Dahil Olduğun Projeler" },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState("applied");

    return (
        <div className="py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Projeler</h1>
            <div className="flex gap-4 mb-8 border-b border-gray-200">
                {tabList.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`py-2 px-6 font-medium font-nunito text-base border-b-2 transition-all duration-150 focus:outline-none ${activeTab === tab.key
                                ? "border-primary text-primary bg-primary/5"
                                : "border-transparent text-gray-500 hover:text-primary"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === "applied" && (
                <div>
                    {/* Başvurduğun Projeler içeriği buraya gelecek */}
                    <div className="text-center text-gray-500 text-lg">
                        Henüz başvurduğun bir proje yok.
                    </div>
                </div>
            )}
            {activeTab === "joined" && (
                <div>
                    {/* Dahil olduğun projeler içeriği buraya gelecek */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-lg shadow">
                        Henüz dahil olduğun bir proje yok.
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;