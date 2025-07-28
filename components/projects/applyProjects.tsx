import React, { useState } from "react";
import Button from "@/components/ui/button";
import { Icon } from "@iconify/react";

const statusColors: Record<string, string> = {
    bekleyen: "bg-yellow-100 text-yellow-700 border-yellow-300",
    kabul: "bg-green-100 text-green-700 border-green-300",
    reddedildi: "bg-red-100 text-red-700 border-red-300",
};

const initialProjects = [
    {
        title: "Akıllı Nakliye Platformu",
        description: "Eşyaların taşınması ve yeni eve düzenli yerleştirilmesi için dijital bir çözüm.",
        tags: ["nakliye", "otomasyon", "hizmet"],
        likes: 12,
        participants: 3,
        avatars: ["/images/defaultAvatar.png", "/images/defaultAvatar.png"],
        status: "bekleyen",
    },
    {
        title: "Evcil Hayvan Takip Sistemi",
        description: "Evcil hayvanların kaybolmasını önleyen, konum tabanlı takip uygulaması.",
        tags: ["hayvan", "mobil", "güvenlik"],
        likes: 8,
        participants: 2,
        avatars: ["/images/defaultAvatar.png"],
        status: "kabul",
    },
    {
        title: "Gelişmiş Mesajlaşma Projesi",
        description: "Yatırımcı ve geliştiriciler için güvenli, hızlı mesajlaşma altyapısı.",
        tags: ["mesaj", "güvenlik", "altyapı"],
        likes: 5,
        participants: 1,
        avatars: ["/images/defaultAvatar.png"],
        status: "reddedildi",
    },
];

const ApplyProjects = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    // Tüm kategorileri çıkar
    const allCategories = Array.from(new Set(initialProjects.flatMap(p => p.tags)));

    const handleCancel = (idx: number) => {
        if (window.confirm("Başvurunuzu iptal etmek istediğinize emin misiniz?")) {
            setProjects((prev) => prev.filter((_, i) => i !== idx));
        }
    };

    // Filtrelenmiş projeler
    const filteredProjects = projects.filter(project => {
        const matchesSearch =
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category ? project.tags.includes(category) : true;
        const matchesStatus = status ? project.status === status : true;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    return (
        <div className="py-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Proje adı veya açıklama ara..."
                    className="border border-gray-300 rounded-lg px-4 py-2 text-base w-full md:w-1/3"
                />
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-base w-full md:w-1/4"
                >
                    <option value="">Kategori seç</option>
                    {allCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <select
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-base w-full md:w-1/4"
                >
                    <option value="">Durum seç</option>
                    <option value="bekleyen">Beklemede</option>
                    <option value="kabul">Kabul Edildi</option>
                    <option value="reddedildi">Reddedildi</option>
                </select>
            </div>

            {filteredProjects.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-lg shadow">
                    Sonuç bulunamadı.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs max-w-xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-1 mb-2">
                                    {project.avatars.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="avatar"
                                            className="w-8 h-8 rounded-full object-cover border border-gray-200 -ml-2 first:ml-0 bg-white"
                                            style={{ zIndex: 10 - i }}
                                        />
                                    ))}
                                </div>
                                <h2 className="text-header font-bold text-2xl mb-1 leading-tight">
                                    {project.title}
                                </h2>
                                <p className="text-text text-base mb-3 leading-snug">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="flex items-center gap-1 text-gray-500 text-base">
                                        <Icon
                                            icon="hugeicons:favourite-square"
                                            width={22}
                                            height={22}
                                            className="text-red-400"
                                        />
                                        <span>{project.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 text-base">
                                        <Icon
                                            icon="hugeicons:user-account"
                                            width={22}
                                            height={22}
                                            className="text-primary"
                                        />
                                        <span>{project.participants}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-2 mt-4">
                                <span className={`border rounded-full px-4 py-1 text-sm font-semibold ${statusColors[project.status] || "bg-gray-100 text-gray-500 border-gray-300"}`}>
                                    {project.status === "bekleyen" && "Beklemede"}
                                    {project.status === "kabul" && "Kabul Edildi"}
                                    {project.status === "reddedildi" && "Reddedildi"}
                                </span>
                                {project.status === "bekleyen" && (
                                    <Button variant="secondary" className="px-4 py-1 text-sm" onClick={() => handleCancel(idx)}>
                                        İptal Et
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApplyProjects;