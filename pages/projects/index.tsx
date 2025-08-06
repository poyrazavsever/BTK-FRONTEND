import React, { useState, useMemo } from "react";
import ProjectCard, { ProjectCardProps } from "@/components/shared/projectCard";
import { motion } from "framer-motion";

const mockProjects: ProjectCardProps[] = [
  {
    title: "Ev Taşımayı Kolaylaştıran Akıllı Platform",
    description:
      "Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya getiren dijital platform.",
    tags: ["lojistik", "mobiluygulama", "yapayzeka"],
    likes: 24,
    participants: 196,
    avatars: [
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
    ],
    isInvestable: true,
  },
  {
    title: "Yapay Zeka ile Kişisel Finans Yönetimi",
    description:
      "Gelir-gider takibi, bütçe önerileri ve yatırım tavsiyeleri sunan akıllı finans asistanı.",
    tags: ["fintech", "yapayzeka", "mobiluygulama"],
    likes: 42,
    participants: 88,
    avatars: [
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
    ],
  },
  {
    title: "Sosyal Sorumluluk Proje Platformu",
    description:
      "Toplumsal fayda odaklı projeleri buluşturan, gönüllü ve sponsorları bir araya getiren platform.",
    tags: ["sosyal", "gönüllülük", "web"],
    likes: 12,
    participants: 54,
    avatars: ["/images/defaultAvatar.png", "/images/defaultAvatar.png"],
  },
  {
    title: "Akıllı Ev Enerji Yönetimi",
    description:
      "Evdeki enerji tüketimini analiz eden ve tasarruf önerileri sunan IoT tabanlı sistem.",
    tags: ["iot", "enerji", "akıllıev"],
    likes: 31,
    participants: 77,
    avatars: [
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
      "/images/defaultAvatar.png",
    ],
  },
];

const allCategories = Array.from(new Set(mockProjects.flatMap((p) => p.tags)));
const sortOptions = [
  { label: "En Yeni", value: "newest" },
  { label: "En Popüler", value: "popular" },
  { label: "En Çok Katılımcı", value: "participants" },
];

const Projects: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState("newest");

  // Filtreleme ve sıralama
  const filteredProjects = useMemo(() => {
    let projects = [...mockProjects];
    if (search.trim()) {
      projects = projects.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (category) {
      projects = projects.filter((p) => p.tags.includes(category));
    }
    if (sort === "popular") {
      projects.sort((a, b) => b.likes - a.likes);
    } else if (sort === "participants") {
      projects.sort((a, b) => b.participants - a.participants);
    }
    // "newest" için mockta sıralama yok, olduğu gibi bırak
    return projects;
  }, [search, category, sort]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end gap-4 mb-8"
      >
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-400 py-12"
          >
            Hiç proje bulunamadı.
          </motion.div>
        ) : (
          filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <ProjectCard
                {...project}
                onDetail={() => alert("Detaylar: " + project.title)}
              />
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
