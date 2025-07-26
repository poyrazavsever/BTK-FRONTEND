import React, { useState, useMemo } from "react";
import IdeaCard, { IdeaCardProps } from "@/components/shared/ideaCard";

const mockIdeas: IdeaCardProps[] = [
  {
    user: { name: "Poyraz Avsever", avatar: "/images/defaultAvatar.png" },
    title: "Ev Taşımayı Kolaylaştıran Akıllı Platform",
    description:
      "Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya getiren dijital platform.",
    tags: ["lojistik", "mobiluygulama", "yapayzeka"],
    likes: 24,
    participants: 196,
  },
  {
    user: { name: "Halitcan Emir", avatar: "/images/defaultAvatar.png" },
    title: "Yapay Zeka ile Kişisel Finans Yönetimi",
    description:
      "Gelir-gider takibi, bütçe önerileri ve yatırım tavsiyeleri sunan akıllı finans asistanı.",
    tags: ["fintech", "yapayzeka", "mobiluygulama"],
    likes: 42,
    participants: 88,
  },
  {
    user: { name: "Talha Tarlabaz", avatar: "/images/defaultAvatar.png" },
    title: "Sosyal Sorumluluk Proje Platformu",
    description:
      "Toplumsal fayda odaklı projeleri buluşturan, gönüllü ve sponsorları bir araya getiren platform.",
    tags: ["sosyal", "gönüllülük", "web"],
    likes: 12,
    participants: 54,
  },
  {
    user: { name: "Poyraz Avsever", avatar: "/images/defaultAvatar.png" },
    title: "Akıllı Ev Enerji Yönetimi",
    description:
      "Evdeki enerji tüketimini analiz eden ve tasarruf önerileri sunan IoT tabanlı sistem.",
    tags: ["iot", "enerji", "akıllıev"],
    likes: 31,
    participants: 77,
  },
];

const allCategories = Array.from(
  new Set(mockIdeas.flatMap((idea) => idea.tags))
);
const sortOptions = [
  { label: "En Yeni", value: "newest" },
  { label: "En Popüler", value: "popular" },
  { label: "En Çok Katılımcı", value: "participants" },
];

const Ideas: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState("newest");

  // Filtreleme ve sıralama
  const filteredIdeas = useMemo(() => {
    let ideas = [...mockIdeas];
    if (search.trim()) {
      ideas = ideas.filter(
        (idea) =>
          idea.title.toLowerCase().includes(search.toLowerCase()) ||
          idea.description.toLowerCase().includes(search.toLowerCase()) ||
          idea.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          )
      );
    }
    if (category) {
      ideas = ideas.filter((idea) => idea.tags.includes(category));
    }
    if (sort === "popular") {
      ideas.sort((a, b) => b.likes - a.likes);
    } else if (sort === "participants") {
      ideas.sort((a, b) => b.participants - a.participants);
    }
    // "newest" için mockta sıralama yok, olduğu gibi bırak
    return ideas;
  }, [search, category, sort]);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-medium text-text mb-1">
            Arama
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Başlık, açıklama veya etiket ara..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Kategori
          </label>
          <select
            value={category || ""}
            onChange={(e) => setCategory(e.target.value || null)}
            className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          >
            <option value="">Tümü</option>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Sırala
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredIdeas.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            Hiç fikir bulunamadı.
          </div>
        ) : (
          filteredIdeas.map((idea, i) => (
            <IdeaCard
              key={i}
              {...idea}
              onDetail={() => alert("Detaylar: " + idea.title)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Ideas;
