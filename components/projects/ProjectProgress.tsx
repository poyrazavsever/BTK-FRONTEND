import React from "react";
import { Icon } from "@iconify/react";

const completedTasks = [
    {
        title: "Backend API Tamamlandı",
        desc: "Tüm endpointler ve authentication işlemleri başarıyla tamamlandı.",
        date: "10.07.2025",
        icon: "hugeicons:server-02",
    },
    {
        title: "Frontend Tasarımı Tamamlandı",
        desc: "Ana sayfa, panel ve proje detay arayüzleri geliştirildi.",
        date: "15.07.2025",
        icon: "hugeicons:monitor-01",
    },
    {
        title: "Testler Başlatıldı",
        desc: "Unit ve entegrasyon testleri başlatıldı.",
        date: "20.07.2025",
        icon: "hugeicons:check-list-01",
    },
];

const ProjectProgress: React.FC = () => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">İlerleme</h2>
        {/* Progress Bar */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow mb-8">
            <span className="font-semibold text-gray-700">Proje Tamamlanma:</span>
            <div className="w-full bg-gray-100 rounded-full h-5 mt-2 flex items-center">
                <div
                    className="bg-primary h-5 rounded-full flex items-center"
                    style={{ width: "75%" }}
                >
                    <span className="ml-4 text-white font-bold">%75</span>
                </div>
            </div>
            <span className="text-sm text-gray-500 mt-2 block">%75 tamamlandı</span>
        </div>

        {/* Son Tamamlanan Görevler */}
        <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-primary">
                Son Tamamlanan Görevler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedTasks.map((task, i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow flex flex-col gap-2"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Icon
                                icon={task.icon}
                                width={32}
                                height={32}
                                className="text-primary"
                            />
                            <span className="font-semibold text-gray-800 text-base">
                                {task.title}
                            </span>
                        </div>
                        <p className="text-text text-sm mb-1">{task.desc}</p>
                        <span className="text-xs text-gray-500">{task.date}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Genel Durum Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 flex flex-col items-center">
                <Icon
                    icon="hugeicons:users-group"
                    width={36}
                    className="text-primary mb-2"
                />
                <span className="font-bold text-primary text-xl">3</span>
                <span className="text-sm text-gray-700">Takım Üyesi</span>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-xl p-6 flex flex-col items-center">
                <Icon
                    icon="hugeicons:check-list-01"
                    width={36}
                    className="text-green-700 mb-2"
                />
                <span className="font-bold text-green-700 text-xl">12</span>
                <span className="text-sm text-gray-700">Tamamlanan Görev</span>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-6 flex flex-col items-center">
                <Icon
                    icon="hugeicons:calendar-date"
                    width={36}
                    className="text-yellow-700 mb-2"
                />
                <span className="font-bold text-yellow-700 text-xl">
                    28.07.2025
                </span>
                <span className="text-sm text-gray-700">Son Güncelleme</span>
            </div>
        </div>
    </div>
);

export default ProjectProgress;
