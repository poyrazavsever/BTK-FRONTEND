import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  likes: number;
  participants: number;
  avatars: string[]; // up to 3 shown, rest as +N
  onDetail?: () => void;
}


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  likes,
  participants,
  avatars,
}) => {
  const maxAvatars = 3;
  const shownAvatars = avatars.slice(0, maxAvatars);
  const extraCount = avatars.length - maxAvatars;

  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState("");
  const [hours, setHours] = useState("");

  const handleApply = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setReason("");
    setHours("");
  };

  const handleSend = () => {
    // Demo: başvuru gönderildi
    alert("Başvurunuz gönderildi!");
    handleClose();
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs max-w-xl">
        <div className="flex items-center gap-1 mb-2">
          {shownAvatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover border border-gray-200 -ml-2 first:ml-0 bg-white"
              style={{ zIndex: 10 - i }}
            />
          ))}
          {extraCount > 0 && (
            <span className="ml-2 text-sm text-gray-500 font-semibold">
              +{extraCount}
            </span>
          )}
        </div>
        <h2 className="text-header font-bold text-2xl mb-1 leading-tight">
          {title}
        </h2>
        <p className="text-text text-base mb-3 leading-snug">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
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
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-base">
            <Icon
              icon="hugeicons:user-account"
              width={22}
              height={22}
              className="text-primary"
            />
            <span>{participants}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button variant="secondary" className="w-full" onClick={handleApply}>
            Başvur
          </Button>
          <Button href="/ideas/1" variant="primary" className="w-full">
            Detaylar
          </Button>
        </div>
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
              <Button
                variant="primary"
                className="w-full font-semibold text-base"
                onClick={handleSend}
                disabled={!reason || !hours}
              >
                Gönder
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
