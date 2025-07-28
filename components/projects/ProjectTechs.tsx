import React from "react";

const ProjectTechs: React.FC = () => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Teknolojiler Listesi</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-wrap gap-4">
            {["Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB", "Framer Motion"].map((tech, i) => (
                <span key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

export default ProjectTechs;
