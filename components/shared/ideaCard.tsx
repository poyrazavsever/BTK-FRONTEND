
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface IdeaCardProps {
  user: {
    name: string;
    avatar: string;
  };
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  participants: number;
}

const IdeaCard: React.FC<IdeaCardProps> = ({
  user,
  id,
  title,
  description,
  tags,
  likes,
  participants,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs max-w-xl">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-9 h-9 rounded-full object-cover border border-gray-200"
        />
        <span className="text-text font-medium text-base">{user.name}</span>
      </div>
      <h2 className="text-header font-bold text-xl mb-1 leading-tight">
        {title}
      </h2>
      <p className="text-text text-base mb-3 leading-snug">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
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
      <Link
        href={`/ideas/${id}`}
        className="py-2 px-6 rounded-md font-poppins text-base cursor-pointer transition-all duration-200 flex items-center justify-center bg-primary text-background hover:bg-primary/90 w-full text-center"
      >
        Detaylar
      </Link>
    </div>
  );
};

export default IdeaCard;
