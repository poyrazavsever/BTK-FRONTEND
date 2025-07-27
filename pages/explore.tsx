import React, { useState } from "react";
import IdeaCard, { IdeaCardProps } from "@/components/shared/ideaCard";
import { Icon } from "@iconify/react";

// Simüle edilen fikirler
const ideas: (IdeaCardProps & { id: number; details: any })[] = [
  {
    id: 1,
    user: { name: "Poyraz Avsever", avatar: "/images/defaultAvatar.png" },
    title: "Ev Taşımayı Kolaylaştıran Akıllı Platform",
    description:
      "Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya getiren dijital platform.",
    tags: ["lojistik", "mobiluygulama", "yapayzeka"],
    likes: 24,
    participants: 196,
    details: {
      problem:
        "Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya getiren dijital platform.",
      solution:
        "Tüm taşınma sürecini tek noktadan yönetmeyi sağlayan, akıllı eşleştirme ve fiyatlandırma sunan platform.",
      target: "Taşınacak bireyler, aileler ve küçük işletmeler.",
      budget: "3 ay, 500.000₺",
      swot: [
        "Pazar ihtiyacı yüksek, rekabet az.",
        "Operasyonel zorluklar ve müşteri güveni.",
        "Yapay zeka ile farklılaşma.",
      ],
    },
  },
  {
    id: 2,
    user: { name: "Bora Özkent", avatar: "/images/defaultAvatar.png" },
    title: "Akıllı Kargo Takip Sistemi",
    description:
      "Kargoların gerçek zamanlı takibi ve otomatik teslimat planlaması sunan SaaS çözümü.",
    tags: ["kargo", "iot", "otomasyon"],
    likes: 12,
    participants: 88,
    details: {
      problem: "Kargo süreçlerinde şeffaflık ve hız eksikliği.",
      solution: "IoT cihazları ile anlık takip ve rota optimizasyonu.",
      target: "E-ticaret şirketleri, lojistik firmaları.",
      budget: "6 ay, 1.200.000₺",
      swot: [
        "Teknolojik altyapı güçlü.",
        "Yüksek ilk yatırım maliyeti.",
        "B2B satış avantajı.",
      ],
    },
  },
];

const Explore: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [swipe, setSwipe] = useState<"left" | "right" | null>(null);
  const [entering, setEntering] = useState(false);

  const current = ideas[index];

  const handleSwipe = (dir: "left" | "right") => {
    setSwipe(dir);
    setTimeout(() => {
      setSwipe(null);
      setIndex((i) => {
        const next = i + 1 < ideas.length ? i + 1 : 0;
        setEntering(true);
        setTimeout(() => setEntering(false), 410);
        return next;
      });
    }, 350);
  };

  if (!current)
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        No more ideas!
      </div>
    );

  // Animasyon için anahtar
  const cardKey = current.id + "-card";
  const detailKey = current.id + "-detail";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="w-full max-w-5xl py-16 mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* Proje Detayları (fade animasyonlu) */}
        <div
          key={detailKey}
          className={`flex-1 w-full md:max-w-2xl bg-white rounded-xl border border-gray-200 shadow-xs p-6 transition-all duration-500 ease-in-out
            ${
              swipe
                ? "opacity-0 translate-y-8 scale-95"
                : entering && !swipe
                ? "opacity-0 -translate-y-8 scale-95"
                : "opacity-100 translate-y-0 scale-100"
            }
          `}
        >
          <section className="mb-4">
            <h2 className="text-primary font-bold text-lg mb-1">
              Problem Tanımı
            </h2>
            <p className="text-text text-base">{current.details.problem}</p>
          </section>
          <section className="mb-4">
            <h2 className="text-primary font-bold text-lg mb-1">
              Çözüm Yaklaşımı
            </h2>
            <p className="text-text text-base">{current.details.solution}</p>
          </section>
          <section className="mb-4">
            <h2 className="text-primary font-bold text-lg mb-1">Hedef Kitle</h2>
            <p className="text-text text-base">{current.details.target}</p>
          </section>
          <section className="mb-4">
            <h2 className="text-primary font-bold text-lg mb-1">
              Tahmini Süre & Bütçe
            </h2>
            <p className="text-text text-base">{current.details.budget}</p>
          </section>
          <section>
            <h2 className="text-primary font-bold text-lg mb-1">
              SWOT Analizi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.details.swot.map((item: string, i: number) => (
                <div
                  key={i}
                  className="bg-primary/5 rounded-lg p-3 text-text text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Proje Kartı (swipe animasyonlu) */}
        <div
          key={cardKey}
          className={`w-full md:w-[370px] md:sticky md:top-32 flex-shrink-0 transition-all duration-500 ease-in-out
            ${
              swipe === "left"
                ? "-translate-x-[500px] opacity-0 scale-90"
                : swipe === "right"
                ? "translate-x-[500px] opacity-0 scale-90"
                : entering && !swipe
                ? "translate-x-0 opacity-0 scale-90"
                : "translate-x-0 opacity-100 scale-100"
            }
          `}
          style={{ zIndex: 2 }}
        >
          <IdeaCard {...current} onDetail={() => {}} />
        </div>
      </div>

      {/* Sabit Butonlar */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 md:right-10 md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-6 sm:bottom-8 sm:right-1/2 sm:translate-x-1/2 sm:top-auto sm:flex-row">
        <button
          onClick={() => handleSwipe("right")}
          className="bg-white border border-gray-200 shadow-lg rounded-full w-16 h-16 flex items-center justify-center text-green-500 text-3xl hover:bg-green-50 transition"
          aria-label="Beğendim"
        >
          <Icon
            icon="hugeicons:thumbs-up"
            width={38}
            height={38}
            className="text-green-500"
          />
        </button>

        <button
          onClick={() => handleSwipe("left")}
          className="bg-white border border-gray-200 shadow-lg rounded-full w-16 h-16 flex items-center justify-center text-red-500 text-3xl hover:bg-red-50 transition"
          aria-label="Beğenmedim"
        >
          <Icon
            icon="hugeicons:thumbs-down"
            width={38}
            height={38}
            className="text-red-500"
          />
        </button>
      </div>
    </div>
  );
};
export default Explore;
