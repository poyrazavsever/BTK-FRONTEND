import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "@/components/ui/logo";
import Button from "@/components/ui/button";

type NavbarProps = {
  isLogin?: boolean;
};

const menuItemsTop = [
  "Ana Sayfa",
  "Platform",
  "Hakkımızda",
  "Blog",
  "SSS",
  "Topluluk",
];

const menuItemsBottom = [
  "Nasıl Çalışır",
  "Keşfet",
  "Fikirler",
  "Projeler",
  "Yatırımcılar",
  "Geliştiriciler",
];

const Navbar: React.FC<NavbarProps> = ({ isLogin = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = isLogin ? menuItemsTop : menuItemsBottom;

  return (
    <nav className="w-full max-w-6xl container mx-auto bg-white py-4 flex items-center justify-between relative">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-2">
        <Logo variant="withText" />
        <div className="hidden md:flex gap-2 ml-6">
          {menuLinks.map((item) => (
            <span
              key={item}
              className="text-text group font-nunito text-base px-2 py-1 hover:text-primary cursor-pointer transition flex items-center"
            >
              {item}
              {isLogin && item === "Topluluk" && (
                <Icon
                  icon="hugeicons:arrow-down-01"
                  width={18}
                  height={18}
                  className="ml-1 align-middle text-text/50 group-hover:text-primary"
                />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2">
        {!isLogin ? (
          <>
            <Button variant="secondary">Giriş Yap</Button>
            <Button variant="primary">Hemen Başla</Button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Icon
              icon="hugeicons:dashboard-square-01"
              width={28}
              height={28}
              className="text-gray-600 hover:text-primary cursor-pointer transition"
            />
            <Icon
              icon="hugeicons:notification-01"
              width={28}
              height={28}
              className="text-gray-600 hover:text-primary cursor-pointer transition"
            />
            <img
              src="/images/defaultAvatar.png"
              alt="Profil"
              className="w-8 h-8 rounded-full object-cover border border-gray-300 ml-2"
            />
          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden w-screen flex items-center justify-between gap-2 px-4">
        <Logo variant="withText" />
        <button
          className="ml-2 p-2 rounded hover:bg-gray-100"
          onClick={() => setMenuOpen(true)}
          aria-label="Menüyü Aç"
        >
          <Icon icon="hugeicons:menu-01" width={28} height={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-background transition-all duration-500 ease-in-out ${
          menuOpen ? "w-screen" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <button
            className="p-2 rounded hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
            aria-label="Menüyü Kapat"
          >
            <Icon icon="hugeicons:cancel-01" width={28} height={28} />
          </button>
          <div className="flex-1 flex flex-col gap-1 px-4 py-6">
            {menuLinks.map((item) => (
              <span
                key={item}
                className="text-text font-nunito text-base py-2 px-2 hover:text-primary cursor-pointer transition flex items-center"
              >
                {item}
                {isLogin && item === "Topluluk" && (
                  <Icon
                    icon="hugeicons:arrow-down-01"
                    width={16}
                    height={16}
                    className="ml-1 align-middle text-text/50 group-hover:text-primary"
                  />
                )}
              </span>
            ))}
          </div>
          <div className="px-4 pb-6 flex flex-col gap-3">
            {!isLogin ? (
              <>
                <Button variant="secondary" className="w-full">
                  Giriş Yap
                </Button>
                <Button variant="primary" className="w-full">
                  Hemen Başla
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Icon
                  icon="hugeicons:dashboard-square-01"
                  width={28}
                  height={28}
                  className="text-gray-600 hover:text-primary cursor-pointer transition"
                />
                <Icon
                  icon="hugeicons:notification-01"
                  width={28}
                  height={28}
                  className="text-gray-600 hover:text-primary cursor-pointer transition"
                />
                <img
                  src="/images/defaultAvatar.png"
                  alt="Profil"
                  className="w-8 h-8 rounded-full object-cover border border-gray-300 ml-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
