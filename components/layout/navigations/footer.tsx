import React from "react";
import Logo from "@/components/ui/logo";
import { Icon } from "@iconify/react";

const sections = [
  {
    title: "Platform",
    links: [
      { label: "Hakkımızda", href: "/about" },
      { label: "Nasıl Çalışır?", href: "/how-it-works" },
      { label: "Topluluk", href: "/community" },
      { label: "SSS", href: "/faq" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Kılavuzlar", href: "/guides" },
      { label: "Başlangıç", href: "/getting-started" },
      { label: "Etkinlik", href: "/events" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { label: "Bize Ulaşın", href: "/contact" },
      { label: "İş Birliği", href: "/partnership" },
      { label: "Basın Kiti", href: "/press-kit" },
      { label: "Geri Bildirim", href: "/feedback" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Gizlilik Politikası", href: "/legal/privacy-policy" },
      { label: "Şartlar & Koşullar", href: "/legal/terms" },
      { label: "Çerez Politikası", href: "/legal/cookie-policy" },
    ],
  },
];

const socialIcons = [
  { icon: "mdi:twitter", url: "https://twitter.com" },
  { icon: "mdi:facebook", url: "https://facebook.com" },
  { icon: "mdi:instagram", url: "https://instagram.com" },
  { icon: "mdi:linkedin", url: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        {/* Left: Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <Logo variant="withText" />
          <p className="text-gray-500 text-sm max-w-xs mt-2">
            Gelişiyor, girişimciler, geliştiriciler ve yatırımcılar için
            fikirlerin hayata geçmesini kolaylaştıran modern bir platformdur.
            Fikrini paylaş, ekibini kur, yatırım al ve büyüt!
          </p>
          <div className="flex gap-3 mt-2">
            {socialIcons.map((s) => (
              <a
                key={s.icon}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon={s.icon}
                  width={22}
                  height={22}
                  className="text-gray-500 hover:text-primary transition"
                />
              </a>
            ))}
          </div>
        </div>
        {/* Right: Links */}
        <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <span className="font-semibold text-gray-600 mb-1 text-base">
                {section.title}
              </span>
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 text-sm hover:text-primary transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
