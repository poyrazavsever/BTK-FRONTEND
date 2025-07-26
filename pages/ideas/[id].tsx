import React from "react";
import { Icon } from "@iconify/react";

const idea = {
  user: { name: "Poyraz Avsever", avatar: "/images/defaultAvatar.png" },
  title: "Ev Taşımayı Kolaylaştıran Akıllı Platform",
  description:
    "Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya getiren dijital platform.",
  tags: ["lojistik", "mobiluygulama", "yapayzeka"],
  likes: 24,
  participants: 196,
  point: 84,
};

const IdeasDetail: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Başlık ve etiketler */}
      <div className="text-center mb-6">
        <h1 className="text-primary font-bold text-3xl md:text-4xl mb-3">
          {idea.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {idea.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-text text-lg max-w-2xl mx-auto mb-2">
          {idea.description}
        </p>
      </div>

      {/* Kullanıcı, puan, beğeni, katılımcı, paylaş */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <img
            src={idea.user.avatar}
            alt={idea.user.name}
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <span className="text-text font-medium text-base">
            {idea.user.name}
          </span>
        </div>
        <span className="text-green-500 font-semibold text-base">
          {idea.point} Puan
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-gray-500 text-base">
            <Icon
              icon="hugeicons:favourite-square"
              width={22}
              height={22}
              className="text-red-400"
            />
            <span>{idea.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-base">
            <Icon
              icon="hugeicons:user-account"
              width={22}
              height={22}
              className="text-primary"
            />
            <span>{idea.participants}</span>
          </div>
          <button
            className="hover:bg-gray-100 rounded-full p-2 transition"
            title="Paylaş"
          >
            <Icon
              icon="hugeicons:share-01"
              width={22}
              height={22}
              className="text-gray-500"
            />
          </button>
        </div>
      </div>

      {/* Detaylı bölümler */}
      <div className="space-y-8">
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">
            Problem Tanımı
          </h2>
          <p className="text-text text-base">
            Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
            araya getiren dijital platform. Taşınma sürecini yöneten, nakliye ve
            iç tasarım çözümlerini bir araya getiren dijital platform. Taşınma
            sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya
            getiren dijital platform. Taşınma sürecini yöneten, nakliye ve iç
            tasarım çözümlerini bir araya getiren dijital platform.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">
            Çözüm Yaklaşımı
          </h2>
          <p className="text-text text-base">
            Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
            araya getiren dijital platform. Taşınma sürecini yöneten, nakliye ve
            iç tasarım çözümlerini bir araya getiren dijital platform. Taşınma
            sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya
            getiren dijital platform.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">Hedef Kitle</h2>
          <p className="text-text text-base">
            Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
            araya getiren dijital platform. Taşınma sürecini yöneten, nakliye ve
            iç tasarım çözümlerini bir araya getiren dijital platform.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">
            Tahmini Süre & Bütçe
          </h2>
          <p className="text-text text-base">
            Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
            araya getiren dijital platform. Taşınma sürecini yöneten, nakliye ve
            iç tasarım çözümlerini bir araya getiren dijital platform. Taşınma
            sürecini yöneten, nakliye ve iç tasarım çözümlerini bir araya
            getiren dijital platform.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">SWOT Analizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-text text-base">
              Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
              araya getiren dijital platform. Taşınma sürecini yöneten, nakliye
              ve iç tasarım çözümlerini bir araya getiren dijital platform.
              Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
              araya getiren dijital platform.
            </div>
            <div className="text-text text-base">
              Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
              araya getiren dijital platform. Taşınma sürecini yöneten, nakliye
              ve iç tasarım çözümlerini bir araya getiren dijital platform.
              Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
              araya getiren dijital platform.
            </div>
            <div className="text-text text-base">
              Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
              araya getiren dijital platform. Taşınma sürecini yöneten, nakliye
              ve iç tasarım çözümlerini bir araya getiren dijital platform.
              Taşınma sürecini yöneten, nakliye ve iç tasarım çözümlerini bir
              araya getiren dijital platform.
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-primary text-white font-semibold rounded-lg px-6 py-3 text-lg shadow hover:bg-primary/90 transition">
          Projeye Katılma İsteği Oluştur
        </button>
      </div>
    </div>
  );
};

export default IdeasDetail;
