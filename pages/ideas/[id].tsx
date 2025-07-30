import React, { useState } from "react";
import { Icon } from "@iconify/react";

import { motion, AnimatePresence } from "framer-motion";

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
  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState("");
  const [hours, setHours] = useState("");

  const handleOpen = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setReason("");
    setHours("");
  };
  const handleSend = () => {
    alert("Başvurunuz gönderildi!");
    handleClose();
  };

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
        <button
          className="bg-primary text-white font-semibold rounded-lg px-6 py-3 text-lg shadow hover:bg-primary/90 transition"
          onClick={handleOpen}
        >
          Projeye Katılma İsteği Oluştur
        </button>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                onClick={handleClose}
                aria-label="Kapat"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Projeye Başvur</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Başvuru Sebebiniz</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2 text-base focus:outline-primary"
                  rows={3}
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                  placeholder="Neden bu projede yer almak istiyorsunuz?"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Günde Kaç Saat Ayırabilirsin?</label>
                <input
                  type="number"
                  min={1}
                  max={24}
                  className="w-full border border-gray-300 rounded-lg p-2 text-base focus:outline-primary"
                  value={hours}
                  onChange={e => setHours(e.target.value)}
                  placeholder="Örn: 3"
                />
              </div>
              <button
                className="bg-primary text-white rounded-lg px-4 py-2 font-semibold w-full text-base hover:bg-primary/90 transition disabled:opacity-50"
                onClick={handleSend}
                disabled={!reason || !hours}
              >
                Gönder
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IdeasDetail;
