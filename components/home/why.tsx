import React from "react";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "hugeicons:user-multiple-02",
    title: "Topluluk Desteği",
    desc: "Fikrine geri bildirim verecek, onu birlikte geliştirecek meraklı ve üretken bir topluluk seni bekliyor.",
    bg: "bg-primary/10 text-primary",
  },
  {
    icon: "hugeicons:look-right",
    title: "Organize Süreçler",
    desc: "Hackathonlardan mentorluk programlarına, fikrini yapılandırmak için ihtiyacın olan tüm süreçler burada.",
    bg: "bg-red-100 text-red-400",
  },
  {
    icon: "hugeicons:message-02",
    title: "Yapay Zeka Analizleri",
    desc: "Fikrinin güçlü ve zayıf yönlerini analiz eden yapay zeka destekli sistemlerle daha bilinçli kararlar al.",
    bg: "bg-green-100 text-green-400",
  },
  {
    icon: "hugeicons:clock-04",
    title: "Zaman Yönetimi",
    desc: "Her aşamada net hedefler, takvimler ve hatırlatmalarla süreci kontrol altında tut, motivasyonunu koru.",
    bg: "bg-gray-200 text-gray-500",
  },
];

const Why = () => {
  return (
    <section className="w-full bg-primary/10 my-16 py-16 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4">
        <div className="text-center mb-2 text-primary font-semibold tracking-wide uppercase text-sm">
          NEDEN
        </div>
        <h2 className="text-header text-2xl md:text-3xl font-bold text-center mb-4 max-w-lg mx-auto">
          Neden Enerjini Burayla Paylaşmalısın?
        </h2>
        <p className="text-text text-center text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Hayal gücünü somut çözümlere dönüştürmenin yolu sistematik bir
          süreçten geçer.{" "}
          <span className="text-primary font-bold font-nunito">Gelişiyor</span>, seni bu
          yolculukta adım adım destekler.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${feature.bg}`}
              >
                <Icon icon={feature.icon} width={36} height={36} />
              </div>
              <div>
                <h3 className="font-semibold text-header text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-text text-sm md:text-base max-w-xs">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
