import React, { useState, useMemo } from "react";
import InvestorCard, {
  InvestorCardProps,
} from "@/components/shared/investorCard";
import { motion } from "framer-motion";

const mockInvestors: InvestorCardProps[] = [
  {
    avatar: "/images/defaultAvatar.png",
    name: "Bora Özkent",
    title: "Angel Investor, Mentor",
    bio: "Girişimcilik, inovasyon ve teknoloji alanında 20+ yıl deneyim. 30'dan fazla girişime yatırım yaptı.",
    tags: ["teknoloji", "girişimcilik", "mentor"],
  },
  {
    avatar: "/images/defaultAvatar.png",
    name: "Ayşe Yılmaz",
    title: "VC Partner",
    bio: "Fintech, SaaS ve yapay zeka odaklı yatırımlar. Kadın girişimcileri destekliyor.",
    tags: ["fintech", "yapayzeka", "vc"],
  },
  {
    avatar: "/images/defaultAvatar.png",
    name: "Mehmet Demir",
    title: "Kurumsal Yatırımcı",
    bio: "Kurumsal inovasyon, enerji ve sürdürülebilirlik alanında yatırımlar.",
    tags: ["enerji", "kurumsal", "sürdürülebilirlik"],
  },
  {
    avatar: "/images/defaultAvatar.png",
    name: "Elif Kaya",
    title: "Startup Advisor",
    bio: "Erken aşama girişimlere mentorluk ve yatırım. SaaS ve mobil uygulama uzmanı.",
    tags: ["saas", "mobiluygulama", "mentor"],
  },
];

const allTags = Array.from(new Set(mockInvestors.flatMap((i) => i.tags)));

const Investors: React.FC = () => {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filteredInvestors = useMemo(() => {
    let investors = [...mockInvestors];
    if (search.trim()) {
      investors = investors.filter(
        (i) =>
          i.name.toLowerCase().includes(search.toLowerCase()) ||
          i.title.toLowerCase().includes(search.toLowerCase()) ||
          i.bio.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (tag) {
      investors = investors.filter((i) => i.tags.includes(tag));
    }
    return investors;
  }, [search, tag]);

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
            placeholder="İsim, unvan veya biyografi ara..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Etiket
          </label>
          <select
            value={tag || ""}
            onChange={(e) => setTag(e.target.value || null)}
            className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          >
            <option value="">Tümü</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {filteredInvestors.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-400 py-12"
          >
            Hiç yatırımcı bulunamadı.
          </motion.div>
        ) : (
          filteredInvestors.map((investor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <InvestorCard
                {...investor}
                onMessage={() => alert("Mesaj gönder: " + investor.name)}
              />
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default Investors;
