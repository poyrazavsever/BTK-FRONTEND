import React, { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";

interface MessageBoxProps {
  open: boolean;
  onClose: () => void;
}

const contacts = [
  {
    id: 1,
    name: "Bora Özkent",
    avatar: "/images/defaultAvatar.png",
    lastMessage: "Yatırım için uygun bir zaman mı?",
    messages: [
      { from: "Bora Özkent", text: "Merhaba, projeniz çok ilgimi çekti!" },
      { from: "Siz", text: "Çok teşekkürler, detayları konuşabiliriz." },
      { from: "Bora Özkent", text: "Yatırım için uygun bir zaman mı?" },
    ],
  },
  {
    id: 2,
    name: "Ayşe Yılmaz",
    avatar: "/images/defaultAvatar.png",
    lastMessage: "Projeniz hakkında daha fazla bilgi alabilir miyim?",
    messages: [
      {
        from: "Ayşe Yılmaz",
        text: "Projeniz hakkında daha fazla bilgi alabilir miyim?",
      },
    ],
  },
  {
    id: 3,
    name: "Mehmet Demir",
    avatar: "/images/defaultAvatar.png",
    lastMessage: "Görüşmek isterim.",
    messages: [{ from: "Mehmet Demir", text: "Görüşmek isterim." }],
  },
];

const MessageBox: React.FC<MessageBoxProps> = ({ open, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-end">
          {/* Overlay */}
          <motion.div
            className="w-full h-full bg-black/40 absolute top-0 left-0"
            style={{ zIndex: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            ref={ref}
            className="pointer-events-auto bg-white rounded-t-2xl md:rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl md:mr-10 md:mb-10 mx-auto md:mx-0 mb-0 flex flex-row overflow-hidden"
            style={{ minHeight: 400, maxHeight: 600, zIndex: 1 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 400, damping: 32, duration: 0.32 }}
          >
            {/* Contacts Sidebar */}
            <div className="hidden md:flex flex-col w-60 border-r border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-100 bg-primary/5">
                <Icon
                  icon="hugeicons:message-02"
                  width={22}
                  className="text-primary"
                />
                <span className="font-semibold text-primary text-lg">Contacts</span>
              </div>
  <div className="flex-1 overflow-y-auto">
    {contacts.map((contact) => (
      <button
        key={contact.id}
        onClick={() => setSelectedContact(contact)}
        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition text-left ${
          selectedContact.id === contact.id ? "bg-primary/10" : ""
        }`}
      >
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-9 h-9 rounded-full object-cover border border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {contact.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {contact.lastMessage}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            {/* Chat Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-primary/5">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="hugeicons:message-02"
                    width={22}
                    className="text-primary"
                  />
                  <span className="font-semibold text-primary text-lg">
                    {selectedContact.name}
                  </span>
                </div>
                <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
                  <Icon icon="hugeicons:close-square" width={24} />
                </button>
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
                {selectedContact.messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.from === "Siz" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-2 max-w-[70%] text-sm shadow-sm ${
                        msg.from === "Siz"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-white text-text border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      <span className="block font-medium mb-1 text-xs opacity-60">
                        {msg.from}
                      </span>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              {/* Input */}
              <form
                className="flex items-center gap-2 border-t border-gray-100 px-4 py-3 bg-white"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    );
  };
  
  export default MessageBox;
