import React, { useState, useMemo } from "react";
import DeveloperCard, {
  DeveloperCardProps,
} from "@/components/shared/developerCard";

const mockDevelopers: DeveloperCardProps[] = [
  {
    avatar: "/images/defaultAvatar.png",
    name: "Ali Yılmaz",
    title: "Senior Full Stack Developer",
    bio: "5+ yıl deneyimli full stack geliştirici. React, Node.js ve AWS konularında uzman.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    avatar: "/images/defaultAvatar.png",
    name: "Zeynep Kara",
    title: "Frontend Developer",
    bio: "3 yıl deneyimli frontend geliştirici. UI/UX tasarım ve React konularında uzmanlaşmış.",
    skills: ["React", "TypeScript", "UI/UX", "Tailwind"],
  },
  {
    avatar: "/images/defaultAvatar.png",
    name: "Murat Demir",
    title: "Backend Developer",
    bio: "4 yıl deneyimli backend geliştirici. Mikroservis mimarisi ve DevOps konularında deneyimli.",
    skills: ["Python", "Django", "Docker", "AWS"],
  },
  {
    avatar: "/images/defaultAvatar.png",
    name: "Ayşe Yıldız",
    title: "Mobile Developer",
    bio: "React Native ve Flutter ile mobil uygulama geliştirme konusunda 3+ yıl deneyim.",
    skills: ["React Native", "Flutter", "Firebase", "Redux"],
  },
];

const allSkills = Array.from(new Set(mockDevelopers.flatMap((d) => d.skills)));

const Developers: React.FC = () => {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState<string | null>(null);

  const filteredDevelopers = useMemo(() => {
    let developers = [...mockDevelopers];
    if (search.trim()) {
      developers = developers.filter(
        (d) =>
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.title.toLowerCase().includes(search.toLowerCase()) ||
          d.bio.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (skill) {
      developers = developers.filter((d) => d.skills.includes(skill));
    }
    return developers;
  }, [search, skill]);

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
            placeholder="İsim, unvan veya biyografi ara..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Yetenek
          </label>
          <select
            value={skill || ""}
            onChange={(e) => setSkill(e.target.value || null)}
            className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          >
            <option value="">Tümü</option>
            {allSkills.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDevelopers.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            Hiç geliştirici bulunamadı.
          </div>
        ) : (
          filteredDevelopers.map((developer, i) => (
            <DeveloperCard
              key={i}
              {...developer}
              onConnect={() => alert("İletişime geç: " + developer.name)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Developers;