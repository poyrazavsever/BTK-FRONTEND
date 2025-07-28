import React from "react";

const ProjectTimeline: React.FC = () => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Zaman Çizelgesi</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <ul className="space-y-3">
                <li>
                    <span className="font-semibold text-gray-800">01.07.2025:</span> Proje başlangıcı
                </li>
                <li>
                    <span className="font-semibold text-gray-800">10.07.2025:</span> Backend API tamamlandı
                </li>
                <li>
                    <span className="font-semibold text-gray-800">20.07.2025:</span> Frontend arayüzü geliştiriliyor
                </li>
                <li>
                    <span className="font-semibold text-gray-800">28.07.2025:</span> Testler başlatıldı
                </li>
            </ul>
        </div>
    </div>
);

export default ProjectTimeline;
