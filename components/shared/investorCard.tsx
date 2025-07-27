import React from "react";
import { Icon } from "@iconify/react";

export interface InvestorCardProps {
  avatar: string;
  name: string;
  title: string;
  bio: string;
  tags: string[];
  onMessage?: () => void;
}

const InvestorCard: React.FC<InvestorCardProps> = ({
  avatar,
  name,
  title,
  bio,
  tags,
  onMessage,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs max-w-xl flex flex-col items-center text-center">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border border-gray-200 mb-2"
      />
      <h3 className="text-header font-bold text-lg mb-1">{name}</h3>
      <div className="text-primary text-sm font-medium mb-1">{title}</div>
      <div className="text-text text-sm mb-3 line-clamp-3 min-h-[48px]">
        {bio}
      </div>
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
          >
            #{tag}
          </span>
        ))}
      </div>
      <button
        onClick={onMessage}
        className="w-full bg-primary text-white font-semibold rounded-lg py-2 transition hover:bg-primary/90 text-base flex items-center justify-center gap-2"
      >
        <Icon icon="hugeicons:message-text" width={20} height={20} />
        Mesaj Gönder
      </button>
    </div>
  );
};

export default InvestorCard;
