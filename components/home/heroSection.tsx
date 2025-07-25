import React from "react";
import Button from "@/components/ui/button";
import { Icon } from "@iconify/react";

const HeroSection = () => {
  return (
    <section className="w-full max-w-lg container mx-auto py-16 flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-header font-bold text-center text-3xl sm:text-4xl md:text-5xl flex flex-col items-center gap-2">
          <span className="flex items-center gap-3">
            Üret,
            <Icon
              icon="hugeicons:fire"
              width={40}
              height={40}
              className="text-primary mx-2"
            />
            Geliştir,
          </span>
          <span>Yatırıma Dönüştür.</span>
        </h1>
        <p className="text-text text-center text-lg max-w-2xl font-normal">
          İster yeni bir fikri filizlendirmek isteyen bir girişimci ol, ister
          yeteneklerini geliştirmek isteyen bir profesyonel ya da yatırımını
          doğru alanda değerlendirmek isteyen biri...
          <br className="hidden md:block" />
          Gelişiyor, seni hedeflerine ulaştırmak için tasarlandı.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Button variant="link" className="min-w-[220px]">
            Fikrini Gerçekleştir
          </Button>
          <Button variant="primary" className="min-w-[220px]">
            Geliştirici Olarak Devam Et
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
