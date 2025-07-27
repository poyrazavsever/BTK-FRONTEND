import React from "react";
import { Icon } from "@iconify/react";

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
  onDetail,
}) => {
  const maxAvatars = 3;
  const shownAvatars = avatars.slice(0, maxAvatars);
  const extraCount = avatars.length - maxAvatars;

  return (
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
      <button
        onClick={onDetail}
        className="w-full bg-primary text-white font-semibold rounded-lg py-2 transition hover:bg-primary/90 text-base"
      >
        Detaylar
      </button>
    </div>
  );
};

export default ProjectCard;
