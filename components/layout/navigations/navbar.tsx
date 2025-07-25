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
  return (
    <nav className="w-full max-w-6xl container mx-auto bg-white py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo variant="withText" />
        <div className="hidden md:flex gap-2 ml-6">
          {(isLogin ? menuItemsTop : menuItemsBottom).map((item) => (
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
      <div className="flex items-center gap-2">
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
    </nav>
  );
};

export default Navbar;
