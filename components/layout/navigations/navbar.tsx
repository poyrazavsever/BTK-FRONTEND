import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Logo from "@/components/ui/logo";
import Button from "@/components/ui/button";

type NavbarProps = {
  isLogin?: boolean;
};

const menuItemsTop = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Hakkımızda", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/faq" },
  { label: "Topluluk", href: "/community" },
  { label: "Giriş Yap", href: "/login" },
  { label: "Kayıt Ol", href: "/register" },
];

const menuItemsBottom = [
  { label: "Nasıl Çalışır", href: "/" },
  { label: "Keşfet", href: "/explore" },
  { label: "Fikirler", href: "/ideas" },
  { label: "Projeler", href: "/projects" },
  { label: "Yatırımcılar", href: "/investors" },
  { label: "Geliştiriciler", href: "/developers" },
];

const Navbar: React.FC<NavbarProps> = ({ isLogin = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = !isLogin ? menuItemsTop : menuItemsBottom;

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Dışarı tıklanınca kapat
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [profileOpen]);

  const profileMenu = [
    { label: "Profilim", href: "/profile", icon: "hugeicons:user-account" },
    { label: "Ayarlar", href: "/settings", icon: "hugeicons:settings-01" },
    {
      label: "Şifre Değiştir",
      href: "/auth/reset-password",
      icon: "hugeicons:lock-password",
    },
    {
      label: "Bildirimler",
      href: "/notifications",
      icon: "hugeicons:notification-01",
    },
    {
      label: "Karanlık Mod",
      href: "#",
      icon: "hugeicons:moon-01",
      action: () => {},
    },
    {
      label: "Çıkış Yap",
      href: "/logout",
      icon: "hugeicons:logout-01",
      danger: true,
    },
  ];

  return (
    <nav className="w-full max-w-6xl container mx-auto bg-white py-4 flex items-center justify-between relative">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-2">
        <Logo variant="withText" />
        <div className="hidden md:flex gap-2 ml-6">
          {menuLinks.map((item) => {
            if (
              !isLogin &&
              (item.label === "Giriş Yap" || item.label === "Kayıt Ol")
            ) {
              // Masaüstünde login/register buton olarak gösterilecek, link olarak değil
              return null;
            }
            return (
              <a
                key={item.href}
                href={item.href}
                className="text-text group font-nunito text-base px-2 py-1 hover:text-primary cursor-pointer transition flex items-center"
              >
                {item.label}
                {isLogin && item.label === "Topluluk" && (
                  <Icon
                    icon="hugeicons:arrow-down-01"
                    width={18}
                    height={18}
                    className="ml-1 align-middle text-text/50 group-hover:text-primary"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2">
        {!isLogin ? (
          <>
            <a href="/auth/login">
              <Button variant="secondary">Giriş Yap</Button>
            </a>
            <a href="/auth/register">
              <Button variant="primary">Kayıt Ol</Button>
            </a>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <a href="/panel">
                <Icon
                  icon="hugeicons:dashboard-square-01"
                  width={28}
                  height={28}
                  className="text-gray-600 hover:text-primary cursor-pointer transition"
                /></a>
            <a href="/notifications">
              <Icon
                icon="hugeicons:notification-01"
                width={28}
                height={28}
                className="text-gray-600 hover:text-primary cursor-pointer transition"
              />
            </a>
            <div className="relative" ref={profileRef}>
              <img
                src="/images/defaultAvatar.png"
                alt="Profil"
                className="w-8 h-8 rounded-full object-cover border-2 border-primary/30 ml-2 cursor-pointer shadow-sm transition hover:scale-105"
                onClick={() => setProfileOpen((v) => !v)}
                tabIndex={0}
              />
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 min-w-[200px]"
                  >
                    {profileMenu.map((item, i) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={item.action}
                        className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 focus:bg-primary/10 focus:outline-none ${
                          item.danger
                            ? "text-red-600 hover:bg-red-50"
                            : "text-text"
                        }`}
                      >
                        <Icon
                          icon={item.icon}
                          width={20}
                          height={20}
                          className={
                            item.danger ? "text-red-500" : "text-primary"
                          }
                        />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
              <a
                key={item.href}
                href={item.href}
                className={`text-text font-nunito text-base py-2 px-2 hover:text-primary cursor-pointer transition flex items-center ${
                  !isLogin &&
                  (item.label === "Giriş Yap" || item.label === "Kayıt Ol")
                    ? "font-semibold"
                    : ""
                }`}
              >
                {item.label}
                {isLogin && item.label === "Topluluk" && (
                  <Icon
                    icon="hugeicons:arrow-down-01"
                    width={16}
                    height={16}
                    className="ml-1 align-middle text-text/50 group-hover:text-primary"
                  />
                )}
              </a>
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
                <a href="/panel">
                  <Icon
                    icon="hugeicons:dashboard-square-01"
                    width={28}
                    height={28}
                    className="text-gray-600 hover:text-primary cursor-pointer transition"
                  />
                </a>
                <a href="/notifications">
                  <Icon
                    icon="hugeicons:notification-01"
                    width={28}
                    height={28}
                    className="text-gray-600 hover:text-primary cursor-pointer transition"
                  />
                </a>
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
