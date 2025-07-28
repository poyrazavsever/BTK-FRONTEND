import React from "react";
import { Icon } from "@iconify/react";

const techCategories = [
    {
        category: "Frontend",
        techs: [
            { name: "Next.js", icon: "skill-icons:nextjs-light" },
            { name: "TypeScript", icon: "skill-icons:typescript" },
            { name: "TailwindCSS", icon: "skill-icons:tailwindcss-light" },
        ],
    },
    {
        category: "Backend",
        techs: [
            { name: "Node.js", icon: "skill-icons:nodejs-light" },
            { name: "MongoDB", icon: "skill-icons:mongodb" },
        ],
    },
    {
        category: "Animasyon & UI",
        techs: [{ name: "Framer Motion", icon: "skill-icons:framer" }],
    },
];

const ProjectTechs: React.FC = () => (
    <div className="mb-8">
        <div className="flex flex-col gap-6">
            {techCategories.map((cat, idx) => (
                <div key={idx}>
                    <h3 className="text-lg font-semibold text-primary mb-3">{cat.category}</h3>
                    <div className="flex flex-wrap gap-4">
                        {cat.techs.map((tech, i) => (
                            <span key={i} className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
                                <Icon icon={tech.icon} width={24} height={24} />
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ProjectTechs;
