import React from "react";

const ProjectProgress: React.FC = () => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">İlerleme</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <div className="mb-4">
                <span className="font-semibold text-gray-700">Proje Tamamlanma:</span>
                <div className="w-full bg-gray-100 rounded-full h-4 mt-2">
                    <div className="bg-primary h-4 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <span className="text-sm text-gray-500 mt-2 block">%60 tamamlandı</span>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Backend API tamamlandı</li>
                <li>Frontend arayüzü geliştiriliyor</li>
                <li>Testler başlatıldı</li>
            </ul>
        </div>
    </div>
);

export default ProjectProgress;
