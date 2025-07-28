import React from "react";

const ProjectTeam: React.FC = () => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Takımınız</h2>
        <div className="flex gap-6 flex-wrap">
            {/* Demo takım üyeleri */}
            {["Bora Özkent", "Ayşe Yılmaz", "Ali Veli"].map((name, i) => (
                <div key={i} className="flex flex-col items-center gap-2 bg-white border border-gray-200 rounded-xl p-4 shadow w-40">
                    <img src="/images/defaultAvatar.png" alt={name} className="w-14 h-14 rounded-full object-cover border border-gray-200" />
                    <span className="font-semibold text-gray-800">{name}</span>
                    <span className="text-xs text-gray-500">Geliştirici</span>
                </div>
            ))}
        </div>
    </div>
);

export default ProjectTeam;
