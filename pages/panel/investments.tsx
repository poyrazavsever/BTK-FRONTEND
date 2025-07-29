import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/button";

const isInvestor = true;

const initialInvestments = [
    {
        project: {
            title: "Akıllı Nakliye Platformu",
            description:
                "Eşyaların taşınması ve yeni eve düzenli yerleştirilmesi için dijital bir çözüm.",
            tags: ["nakliye", "otomasyon", "hizmet"],
            avatars: ["/images/defaultAvatar.png", "/images/defaultAvatar.png"],
        },
        amount: 25000,
        date: "2025-07-10",
        status: "aktif",
    },
    {
        project: {
            title: "Evcil Hayvan Takip Sistemi",
            description:
                "Evcil hayvanların kaybolmasını önleyen, konum tabanlı takip uygulaması.",
            tags: ["hayvan", "mobil", "güvenlik"],
            avatars: ["/images/defaultAvatar.png"],
        },
        amount: 10000,
        date: "2025-06-20",
        status: "tamamlandı",
    },
];

const statusColors: Record<string, string> = {
    aktif: "bg-green-100 text-green-700 border-green-300",
    tamamlandı: "bg-gray-100 text-gray-500 border-gray-300",
};

const Investments = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [investments] = useState(initialInvestments);

    const filtered = investments.filter((inv) => {
        const matchesSearch =
            inv.project.title.toLowerCase().includes(search.toLowerCase()) ||
            inv.project.description.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = status ? inv.status === status : true;
        return matchesSearch && matchesStatus;
    });

    if (!isInvestor) {
        return (
            <div className="max-w-3xl mx-auto py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Yatırımlarınız</h1>
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-lg shadow">
                    Yatırımcı olarak kayıtlı değilsiniz. Yatırım yapmak için profilinizden
                    yatırımcı olun.
                </div>
            </div>
        );
    }

    return (
        <div className="py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Yatırımlarınız</h1>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Proje adı veya açıklama ara..."
                    className="border border-gray-300 rounded-lg px-4 py-2 text-base w-full md:w-1/2"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-base w-full md:w-1/4"
                >
                    <option value="">Durum seç</option>
                    <option value="aktif">Aktif</option>
                    <option value="tamamlandı">Tamamlandı</option>
                </select>
            </div>
            {filtered.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-lg shadow">
                    Sonuç bulunamadı.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((inv, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl border border-gray-200 p-5 shadow flex flex-col gap-3"
                        >
                            <div className="flex items-center gap-1 mb-2">
                                {inv.project.avatars.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt="avatar"
                                        className="w-8 h-8 rounded-full object-cover border border-gray-200 -ml-2 first:ml-0 bg-white"
                                        style={{ zIndex: 10 - i }}
                                    />
                                ))}
                            </div>
                            <h2 className="text-header font-bold text-xl mb-1 leading-tight">
                                {inv.project.title}
                            </h2>
                            <p className="text-text text-base mb-2 leading-snug">
                                {inv.project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {inv.project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-green-700 font-semibold text-base flex items-center gap-1">
                                    <Icon icon="hugeicons:money-bag-01" width={20} />
                                    {inv.amount.toLocaleString()} TL
                                </span>
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <Icon icon="hugeicons:calendar-03" width={18} />
                                    {inv.date}
                                </span>
                            </div>
                            <span
                                className={`border rounded-full px-4 py-1 text-xs font-semibold self-start ${statusColors[inv.status]}`}
                            >
                                {inv.status === "aktif" ? "Aktif" : "Tamamlandı"}
                            </span>
                            <Button
                                variant="primary"
                                onClick={() => alert("Proje detayına gidilecek (demo)")}
                            >
                                Detaylar
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Investments;