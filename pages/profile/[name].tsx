import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "ongoing" | "completed";
  role?: string;
  investmentAmount?: string;
  technologies?: string[];
  progress?: number;
}

interface UserProfile {
  name: string;
  avatar: string;
  title: string;
  type: "normal" | "developer" | "investor";
  bio: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  skills?: string[];
  specializations?: string[];
  projects?: Project[];
  investments?: Project[];
  stats?: {
    completedProjects?: number;
    activeProjects: number;
    successfulInvestments?: number;
    totalInvestment?: string;
  };
}

// Mock veri
const mockProfile: UserProfile = {
  name: "Ahmet Yılmaz",
  avatar: "/images/defaultAvatar.png",
  title: "Senior Full Stack Developer",
  type: "developer",
  bio: "5+ yıl deneyimli full stack geliştirici. Startup ekosisteminde aktif olarak yer alıyorum.",
  location: "İstanbul, Türkiye",
  website: "https://ahmetyilmaz.dev",
  github: "ahmetyilmaz",
  linkedin: "ahmetyilmaz",
  skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  projects: [
    {
      id: "1",
      name: "E-Nakliyat Platformu",
      description: "Nakliyat süreçlerini dijitalleştiren platform",
      status: "ongoing",
      role: "Backend Lead",
      technologies: ["Node.js", "PostgreSQL", "Docker"],
      progress: 75,
    },
    {
      id: "2",
      name: "Akıllı Ev Sistemleri",
      description: "IoT tabanlı ev otomasyon sistemi",
      status: "completed",
      role: "Full Stack Developer",
      technologies: ["React", "Python", "MongoDB"],
      progress: 100,
    },
  ],
  stats: {
    completedProjects: 8,
    activeProjects: 2,
  },
};

const mockInvestorProfile: UserProfile = {
    name: "Mehmet Demir",
    avatar: "/images/defaultAvatar.png",
    title: "Melek Yatırımcı",
    type: "investor",
    bio: "10+ yıl teknoloji yatırımları deneyimi. Erken aşama startuplara odaklanıyorum.",
    location: "İzmir, Türkiye",
    website: "https://mehmetdemir.com",
    linkedin: "mehmetdemir",
    specializations: ["SaaS", "FinTech", "E-ticaret", "MobilTeknolojiler"],
    investments: [
        {
            id: "1",
            name: "E-Nakliyat Platformu",
            description: "Nakliyat süreçlerini dijitalleştiren platform",
            status: "ongoing",
            investmentAmount: "₺500,000",
        },
        {
            id: "2",
            name: "Akıllı Ev Sistemleri",
            description: "IoT tabanlı ev otomasyon sistemi",
            status: "completed",
            investmentAmount: "₺750,000",
        },
    ],
    stats: {
        successfulInvestments: 12,
        totalInvestment: "₺5,000,000",
        activeProjects: 4,
    },
    projects: []
};

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  status,
  role,
  investmentAmount,
  technologies,
  progress,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "completed"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {status === "completed" ? "Tamamlandı" : "Devam Ediyor"}
        </span>
      </div>

      {(role || investmentAmount) && (
        <div className="mt-3 text-sm text-gray-500">
          {role && <div>Rol: {role}</div>}
          {investmentAmount && <div>Yatırım: {investmentAmount}</div>}
        </div>
      )}

      {technologies && (
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {typeof progress === "number" && (
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>İlerleme</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const StatCard: React.FC<{
  icon: string;
  label: string;
  value: string | number;
}> = ({ icon, label, value }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bg-white rounded-lg border border-gray-200 p-4 text-center"
  >
    <Icon icon={icon} className="text-primary mx-auto mb-2" width={24} />
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-xl font-semibold text-gray-900 mt-1">{value}</div>
  </motion.div>
);

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "investments">(
    "projects"
  );

  // Normalde bu veri API'den gelecek
  const profile = mockProfile.type === "investor" ? mockInvestorProfile : mockProfile;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-10 px-4"
    >
      {/* Profil Başlığı */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl border border-gray-200 p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {profile.type === "developer"
                  ? "Geliştirici"
                  : profile.type === "investor"
                  ? "Yatırımcı"
                  : "Kullanıcı"}
              </span>
            </div>
            <div className="text-lg text-primary font-medium mb-3">
              {profile.title}
            </div>
            <p className="text-gray-600 mb-4 max-w-2xl">{profile.bio}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {profile.location && (
                <div className="flex items-center gap-1">
                  <Icon icon="mdi:map-marker" />
                  {profile.location}
                </div>
              )}
              {profile.website && (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <Icon icon="mdi:web" />
                  Website
                </a>
              )}
              {profile.github && (
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <Icon icon="mdi:github" />
                  GitHub
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={`https://linkedin.com/in/${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <Icon icon="mdi:linkedin" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
            İletişime Geç
          </button>
        </div>
      </motion.div>

      {/* İstatistikler */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {profile.type === "developer" ? (
          <>
            <StatCard
              icon="mdi:check-circle"
              label="Tamamlanan Projeler"
              value={profile.stats?.completedProjects || 0}
            />
            <StatCard
              icon="mdi:rocket-launch"
              label="Aktif Projeler"
              value={profile.stats?.activeProjects || 0}
            />
          </>
        ) : (
          <>
            <StatCard
              icon="mdi:trending-up"
              label="Başarılı Yatırımlar"
              value={profile.stats?.successfulInvestments || 0}
            />
            <StatCard
              icon="mdi:currency-try"
              label="Toplam Yatırım"
              value={profile.stats?.totalInvestment || "₺0"}
            />
            <StatCard
              icon="mdi:rocket-launch"
              label="Aktif Projeler"
              value={profile.stats?.activeProjects || 0}
            />
          </>
        )}
      </div>

      {/* Yetenekler veya Uzmanlıklar */}
      {(profile.skills || profile.specializations) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 p-6 mb-8"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {profile.type === "developer" ? "Yetenekler" : "Uzmanlık Alanları"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {(profile.skills || profile.specializations)?.map((item) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Projeler / Yatırımlar Sekmesi */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
      >
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeTab === "projects"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            {profile.type === "developer" ? "Projeler" : "Yatırım Yapılan Projeler"}
          </button>
          {profile.type === "investor" && (
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "investments"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("investments")}
            >
              Potansiyel Yatırımlar
            </button>
          )}
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            {activeTab === "projects"
              ? (profile.type === "investor"
                  ? profile.investments
                  : profile.projects
                )?.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))
              : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;