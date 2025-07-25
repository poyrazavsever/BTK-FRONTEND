import React from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/button";

const advantages = [
  {
    icon: "hugeicons:user-multiple-02",
    title: "Güçlü Topluluk",
    desc: "Fikrini paylaşabileceğin, destek ve geri bildirim alabileceğin üretken bir topluluk seni bekliyor.",
    bg: "bg-primary/10 text-primary",
  },
  {
    icon: "hugeicons:look-right",
    title: "Mentorluk & Süreçler",
    desc: "Hackathonlardan mentorluk programlarına, projenin her aşamasında yanında olan bir platform.",
    bg: "bg-red-100 text-red-400",
  },
  {
    icon: "hugeicons:message-02",
    title: "Yapay Zeka Destekli Analiz",
    desc: "Fikrinin güçlü ve zayıf yönlerini analiz eden yapay zeka destekli sistemlerle daha bilinçli kararlar al.",
    bg: "bg-green-100 text-green-400",
  },
  {
    icon: "hugeicons:clock-04",
    title: "Zaman Yönetimi",
    desc: "Net hedefler, takvimler ve hatırlatmalarla süreci kontrol altında tut, motivasyonunu koru.",
    bg: "bg-gray-100 text-gray-400",
  },
];

const steps = [
  {
    title: "Fikrini Paylaş",
    desc: "İlk adım cesaretle başlar. Aklındaki fikri açıkla, topluluğun ilgisini ve geri bildirimi al.",
  },
  {
    title: "Ekip Kur & Geliştir",
    desc: "Birlikte güçlüsün. Geliştiriciler, tasarımcılar ve iş ortaklarıyla ekibini oluştur.",
  },
  {
    title: "Yatırım Al & Büyüt",
    desc: "Projen olgunlaştığında, yatırımcılarla buluşma zamanı.",
  },
];

const Platform = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero */}
      <section className="w-full max-w-4xl mx-auto py-16 flex flex-col items-center justify-center">
        <h1 className="text-header font-bold text-center text-3xl md:text-5xl mb-4">
          Gelişiyor Platformu ile Fikrini Hayata Geçir
        </h1>
        <p className="text-text text-center text-lg max-w-2xl mb-8">
          Gelişiyor, girişimciler, geliştiriciler ve yatırımcıları bir araya getiren, fikirlerin hayata geçmesini kolaylaştıran modern bir platformdur. Fikrini paylaş, ekibini kur, yatırım al ve büyüt!
        </p>
        <Button variant="primary" className="px-8 py-3 text-lg">Hemen Başla</Button>
      </section>

      {/* Avantajlar */}
      <section className="w-full bg-[#f7fbff] py-16 flex flex-col items-center">
        <h2 className="text-header text-2xl md:text-3xl font-bold text-center mb-4">Neden Gelişiyor?</h2>
        <p className="text-text text-center text-base md:text-lg mb-10 max-w-2xl">
          Hayal gücünü somut çözümlere dönüştürmenin yolu sistematik bir süreçten geçer. <span className="text-primary font-semibold">Gelişiyor</span>, seni bu yolculukta adım adım destekler.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl w-full">
          {advantages.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${feature.bg}`}>
                <Icon icon={feature.icon} width={36} height={36} />
              </div>
              <div>
                <h3 className="font-semibold text-header text-lg mb-1">{feature.title}</h3>
                <p className="text-text text-sm md:text-base max-w-xs">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adımlar */}
      <section className="w-full max-w-4xl mx-auto py-16 flex flex-col items-center">
        <h2 className="text-header text-2xl md:text-3xl font-bold text-center mb-4">Platformda Yolculuğun 3 Temel Adımı</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 w-full justify-center mt-8">
          <div className="flex flex-col gap-8 w-full md:w-2/3">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-header text-lg mb-1">{step.title}</h3>
                  <p className="text-text text-sm md:text-base max-w-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
