import React from "react";
import PanelSidebar from "@/components/layout/navigations/panelSidebar";

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            {/* Sol Panel Sidebar */}
            <PanelSidebar />
            {/* Sağ ana içerik alanı */}
            <div className="flex flex-col flex-1 ml-[260px]">
                {/* İçerik */}
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default PanelLayout;