
import React, { useState } from "react";
import IdeaCard, { IdeaCardProps } from "@/components/shared/ideaCard";
import Button from "@/components/ui/button";
import { Icon } from "@iconify/react";

// Demo verisi
const initialIdeas: IdeaCardProps[] = [
    {
        user: {
            name: "Bora Özkent",
            avatar: "/images/defaultAvatar.png",
        },
        title: "Akıllı Nakliye Platformu",
        description:
            "Eşyaların taşınması ve yeni eve düzenli yerleştirilmesi için dijital bir çözüm.",
        tags: ["nakliye", "otomasyon", "hizmet"],
        likes: 12,
        participants: 3,
    },
    {
        user: {
            name: "Ayşe Yılmaz",
            avatar: "/images/defaultAvatar.png",
        },
        title: "Evcil Hayvan Takip Sistemi",
        description:
            "Evcil hayvanların kaybolmasını önleyen, konum tabanlı takip uygulaması.",
        tags: ["hayvan", "mobil", "güvenlik"],
        likes: 8,
        participants: 2,
    },
];

const Ideas = () => {
    const [ideas, setIdeas] = useState<IdeaCardProps[]>(initialIdeas);

    // Fikir silme
    const handleDelete = (idx: number) => {
        if (window.confirm("Bu fikri silmek istediğinize emin misiniz?")) {
            setIdeas((prev) => prev.filter((_, i) => i !== idx));
        }
    };

    // Fikir düzenleme (demo)
    const handleEdit = (idx: number) => {
        alert("Düzenleme ekranı açılacak (demo)");
    };

    return (
        <div className="py-10 px-4">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Yüklediğiniz Fikirler</h1>
                <a href="/ideas/create">
                    <Button variant="primary">
                        Yeni Fikir Ekle
                    </Button>
                </a>
            </div>

            {ideas.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-lg shadow">
                    Henüz bir fikriniz yok. Yeni bir fikir ekleyin!
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ideas.map((idea, idx) => (
                        <div key={idx} className="relative group">
                            <IdeaCard
                                {...idea}
                                onDetail={() => alert("Fikir detayları açılacak (demo)")}
                            />
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                                <Button
                                    variant="secondary"
                                    className="rounded-full p-2"
                                    onClick={() => handleEdit(idx)}
                                >
                                    <Icon icon="hugeicons:edit-01" width={20} height={20} />
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="rounded-full p-2"
                                    onClick={() => handleDelete(idx)}
                                >
                                    <Icon icon="hugeicons:delete-02" width={20} height={20} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Ideas;