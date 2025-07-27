import React, { useState } from "react";
import Navbar from "./navigations/navbar";
import Footer from "./navigations/footer";
import Cta from "./cta";
import MessageBox from "./messageBox";
import { Icon } from "@iconify/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [msgOpen, setMsgOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Navbar />

      <main className="flex-grow container mx-auto">{children}</main>

      <Cta />
      <Footer />

      {/* Floating Message Button */}
      <button
        onClick={() => setMsgOpen(true)}
        className="fixed z-[99] bottom-6 right-6 md:bottom-10 md:right-10 bg-primary text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl hover:bg-primary/90 transition"
        aria-label="Mesajlar"
      >
        <Icon icon="hugeicons:message-02" width={32} height={32} />
      </button>

      {/* Message Modal */}
      <MessageBox open={msgOpen} onClose={() => setMsgOpen(false)} />
    </div>
  );
};

export default Layout;
