import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

// Proje/grup bazlı örnek veri
const projects = [
  {
    id: 1,
    name: "Nakliye Platformu",
    type: "group",
    avatar: "/images/companies.png",
    members: [
      {
        id: 1,
        name: "Bora Özkent",
        avatar: "/images/defaultAvatar.png",
      },
      {
        id: 2,
        name: "Ayşe Yılmaz",
        avatar: "/images/defaultAvatar.png",
      },
      {
        id: 3,
        name: "Siz",
        avatar: "/images/defaultAvatar.png",
      },
    ],
    messages: [
      { from: "Bora Özkent", text: "Merhaba, projeniz çok ilgimi çekti!" },
      { from: "Siz", text: "Çok teşekkürler, detayları konuşabiliriz." },
      { from: "Ayşe Yılmaz", text: "Ben de katkı sağlamak isterim." },
      { from: "Bora Özkent", text: "Yatırım için uygun bir zaman mı?" },
    ],
  },
  {
    id: 2,
    name: "E-Ticaret Otomasyonu",
    type: "group",
    avatar: "/images/companies.png",
    members: [
      {
        id: 4,
        name: "Mehmet Demir",
        avatar: "/images/defaultAvatar.png",
      },
      {
        id: 3,
        name: "Siz",
        avatar: "/images/defaultAvatar.png",
      },
    ],
    messages: [
      { from: "Mehmet Demir", text: "Projeye yeni bir özellik ekleyelim mi?" },
      { from: "Siz", text: "Olur, detayları konuşalım." },
    ],
  },
  {
    id: 3,
    name: "Bireysel - Bora Özkent",
    type: "private",
    avatar: "/images/defaultAvatar.png",
    members: [
      { id: 1, name: "Bora Özkent", avatar: "/images/defaultAvatar.png" },
      { id: 3, name: "Siz", avatar: "/images/defaultAvatar.png" },
    ],
    messages: [
      { from: "Bora Özkent", text: "Birebir görüşmek isterim." },
      { from: "Siz", text: "Tabii, ne zaman uygunsunuz?" },
    ],
  },
];


const Messages: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [input, setInput] = useState("");
  const [allProjects, setAllProjects] = useState(projects);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedProject.messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const updatedProjects = allProjects.map((p) => {
      if (p.id === selectedProject.id) {
        return {
          ...p,
          messages: [...p.messages, { from: "Siz", text: input }],
        };
      }
      return p;
    });
    setAllProjects(updatedProjects);
    setSelectedProject({
      ...selectedProject,
      messages: [...selectedProject.messages, { from: "Siz", text: input }],
    });
    setInput("");
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Sidebar: Proje/Grup Listesi */}
      <div className="hidden md:flex flex-col w-80 border-r border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-100 bg-primary/5">
          <Icon icon="hugeicons:message-02" width={22} className="text-primary" />
          <span className="font-semibold text-primary text-lg">Projeler & Gruplar</span>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="Proje veya grup ara..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {allProjects
            .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition text-left ${selectedProject.id === project.id ? "bg-primary/10" : ""}`}
              >
                <img
                  src={project.avatar}
                  alt={project.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base truncate">{project.name}</div>
                  <div className="flex gap-1 mt-1">
                    {project.members.map((m) => (
                      <img
                        key={m.id}
                        src={m.avatar}
                        alt={m.name}
                        className="w-5 h-5 rounded-full border border-gray-200 -ml-1 first:ml-0"
                        title={m.name}
                      />
                    ))}
                  </div>
                </div>
                {project.type === "group" && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium ml-2">Grup</span>
                )}
                {project.type === "private" && (
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded font-medium ml-2">Bireysel</span>
                )}
              </button>
            ))}
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-primary/5">
          <div className="flex items-center gap-2">
            <Icon icon="hugeicons:message-02" width={22} className="text-primary" />
            <span className="font-semibold text-primary text-lg">
              {selectedProject.name}
            </span>
            {selectedProject.type === "group" && (
              <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">Grup Sohbeti</span>
            )}
            {selectedProject.type === "private" && (
              <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded font-medium">Bireysel</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {selectedProject.members.map((m) => (
              <img
                key={m.id}
                src={m.avatar}
                alt={m.name}
                className="w-7 h-7 rounded-full border border-gray-200 -ml-2 first:ml-0"
                title={m.name}
              />
            ))}
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
          {selectedProject.messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "Siz" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-[70%] text-sm shadow-sm ${msg.from === "Siz"
                  ? "bg-primary text-white rounded-br-none"
                  : "bg-white text-text border border-gray-200 rounded-bl-none"
                  }`}
              >
                <span className="block font-medium mb-1 text-xs opacity-60">{msg.from}</span>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <form
          className="flex items-center gap-2 border-t border-gray-100 px-4 py-3 bg-white"
          onSubmit={handleSend}
        >
          <input
            type="text"
            placeholder="Mesaj yaz..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
          />
          <button
            type="submit"
            className="bg-primary text-white rounded-lg px-4 py-2 font-semibold hover:bg-primary/90 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;