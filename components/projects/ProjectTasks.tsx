import React, { useState } from "react";
import Button from "@/components/ui/button";
import { Icon } from "@iconify/react";

const initialTasks = [
    {
        title: "Backend API'yi test et",
        desc: "Tüm endpointlerin doğru çalıştığını kontrol et. Test senaryolarını yaz ve hata raporlarını ilet.",
        status: "devam ediyor",
        icon: "hugeicons:server-02",
        detail: "Backend API'nin authentication, veri doğrulama ve hata yönetimi test edilecek.",
    },
    {
        title: "Frontend arayüzünü tamamla",
        desc: "Kullanıcı paneli ve ana sayfa arayüzünü bitir. Responsive ve erişilebilir olmasına dikkat et.",
        status: "bekliyor",
        icon: "hugeicons:monitor-01",
        detail: "Kullanıcı deneyimi ve mobil uyumluluk için ek kontroller yapılacak.",
    },
    {
        title: "Dokümantasyonu güncelle",
        desc: "Proje dokümantasyonunu güncel tut. API ve arayüz açıklamalarını ekle.",
        status: "tamamlandı",
        icon: "hugeicons:check-list-01",
        detail: "Son değişiklikler ve yeni özellikler dokümana eklendi.",
    },
];

const statusColors: Record<string, string> = {
    "devam ediyor": "bg-yellow-100 text-yellow-700 border-yellow-300",
    bekliyor: "bg-gray-100 text-gray-500 border-gray-300",
    tamamlandı: "bg-green-100 text-green-700 border-green-300",
};

const ProjectTasks: React.FC = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const handleComplete = (idx: number) => {
        setTasks((prev) =>
            prev.map((task, i) =>
                i === idx ? { ...task, status: "tamamlandı" } : task
            )
        );
    };

    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Görevleriniz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {tasks.map((task, idx) => (
                    <div
                        key={idx}
                        className={`bg-white border rounded-xl p-5 shadow flex flex-col gap-3 transition-all duration-200 ${statusColors[task.status]}`}
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
                        <div className="text-xs text-gray-500 mb-2">
                            {task.detail}
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full inline-block border ${statusColors[task.status]}`}>
                            {task.status}
                        </span>
                        <Button
                            variant="primary"
                            className="mt-3 px-4 py-2 text-sm bg-green-600 hover:bg-green-700"
                            disabled={task.status === "tamamlandı"}
                            onClick={() => handleComplete(idx)}
                        >
                            Tamamlandı
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectTasks;
