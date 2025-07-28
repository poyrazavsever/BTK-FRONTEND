import React, { useState } from "react";
import ProjectTeam from "@/components/projects/ProjectTeam";
import ProjectProgress from "@/components/projects/ProjectProgress";
import ProjectTechs from "@/components/projects/ProjectTechs";
import ProjectTimeline from "@/components/projects/ProjectTimeline";
import ProjectTasks from "@/components/projects/ProjectTasks";
import ProjectsDetail from "@/components/projects/ProjectsDetail";

const tabList = [
  { key: "projectDetail", label: "Proje Detayı" },
  { key: "team", label: "Takımınız" },
  { key: "progress", label: "İlerleme" },
  { key: "techs", label: "Teknolojiler Listesi" },
  { key: "timeline", label: "Zaman Çizelgesi" },
  { key: "tasks", label: "Görevleriniz" },
];

const DetailIncludedProject = () => {
  const [activeTab, setActiveTab] = useState("projectDetail");

  return (
    <div className="py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Proje Yönetim Paneli</h1>
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        {tabList.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-2 px-6 font-medium font-nunito text-base border-b-2 transition-all duration-150 focus:outline-none ${activeTab === tab.key
              ? "border-primary text-primary bg-primary/5"
              : "border-transparent text-gray-500 hover:text-primary"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "projectDetail" && <ProjectsDetail />}
      {activeTab === "team" && <ProjectTeam />}
      {activeTab === "progress" && <ProjectProgress />}
      {activeTab === "techs" && <ProjectTechs />}
      {activeTab === "timeline" && <ProjectTimeline />}
      {activeTab === "tasks" && <ProjectTasks />}
    </div>
  );
};

export default DetailIncludedProject;