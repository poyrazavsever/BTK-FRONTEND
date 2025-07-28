import React, { useState } from "react";
import Button from "@/components/ui/button";
import { Icon } from "@iconify/react";

const initialProjects = [
  {
    title: "Akıllı Nakliye Platformu",
    description: "Eşyaların taşınması ve yeni eve düzenli yerleştirilmesi için dijital bir çözüm.",
    tags: ["nakliye", "otomasyon", "hizmet"],
    likes: 12,
    participants: 3,
    avatars: ["/images/defaultAvatar.png", "/images/defaultAvatar.png"],
  },
  {
    title: "Evcil Hayvan Takip Sistemi",
    description: "Evcil hayvanların kaybolmasını önleyen, konum tabanlı takip uygulaması.",
    tags: ["hayvan", "mobil", "güvenlik"],
    likes: 8,
    participants: 2,
    avatars: ["/images/defaultAvatar.png"],
  },
  {
    title: "Gelişmiş Mesajlaşma Projesi",
    description: "Yatırımcı ve geliştiriciler için güvenli, hızlı mesajlaşma altyapısı.",
    tags: ["mesaj", "güvenlik", "altyapı"],
    likes: 5,
    participants: 1,
    avatars: ["/images/defaultAvatar.png"],
  },
];

const IncludedProjects = () => {
  const [projects] = useState(initialProjects);

  return (
    <div className="py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dahil Olduğun Projeler</h1>
      {projects.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-lg shadow">
          Henüz dahil olduğun bir proje yok.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
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
              <div className="flex items-center justify-end gap-2 mt-4">
                <Button variant="primary" className="px-4 py-1 text-sm" onClick={() => window.location.href = `/panel/projects/${idx}`}>Detaylar</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncludedProjects;