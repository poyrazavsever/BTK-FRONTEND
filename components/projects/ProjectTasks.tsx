import React from "react";

const ProjectTasks: React.FC = () => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Görevleriniz</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <ul className="space-y-2">
                <li>
                    <span className="font-semibold text-primary">Backend API'yi test et</span> <span className="text-xs text-gray-500">(devam ediyor)</span>
                </li>
                <li>
                    <span className="font-semibold text-primary">Frontend arayüzünü tamamla</span> <span className="text-xs text-gray-500">(bekliyor)</span>
                </li>
                <li>
                    <span className="font-semibold text-primary">Dokümantasyonu güncelle</span> <span className="text-xs text-gray-500">(tamamlandı)</span>
                </li>
            </ul>
        </div>
    </div>
);

export default ProjectTasks;
