import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Fikrini Paylaş",
    desc: "İlk adım cesaretle başlar. Aklındaki fikri açıkla, topluluğun ilgisini ve geri bildirimi al.",
  },
  {
    title: "Ekip Kur & Geliştir",
    desc: "Tek başına değil, birlikte güçlüsün. Geliştiriciler, tasarımcılar ve iş ortaklarıyla ekibini oluştur.",
  },
  {
    title: "Yatırım Al & Büyüt",
    desc: "Projen olgunlaştığında, yatırımcılarla buluşma zamanı.",
  },
];

const Stepper = () => {
  return (
    <section className="w-full min-h-[90vh] max-w-5xl mx-auto py-16 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-header text-2xl md:text-3xl font-bold text-center mb-4"
      >
        Geliştirmenin 3 Temel Adımı
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-text text-center text-base md:text-lg mb-10 max-w-xl"
      >
        Hayal gücünü somut çözümlere dönüştürmenin yolu sistematik bir süreçten
        geçer.{" "}
        <span className="text-primary font-semibold font-nunito">
          Gelişiyor
        </span>
        , seni bu yolculukta adım adım destekler.
      </motion.p>
      <div className="flex flex-col md:flex-row items-center gap-10 w-full justify-center">
        {/* Sol: Davet Kartı ve görsel */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/defaultAvatar.png"
              alt="User"
              className="w-[320px] h-[380px] object-cover"
            />
          </div>
          {/* Davet kartı */}
          <div className="absolute left-4 bottom-8 bg-primary text-white rounded-lg px-6 py-3 shadow-lg flex items-center gap-2">
            <span className="text-sm font-medium">Yeni Davet</span>
            <span className="font-semibold">
              Güzel Hayatlar Projesine Davet...
            </span>
          </div>
          <div className="absolute inset-0 rounded-xl bg-primary/10 pointer-events-none" />
        </motion.div>
        {/* Sağ: Adımlar */}
        <div className="flex flex-col gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6 + idx * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-header text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-text text-sm md:text-base max-w-xs">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stepper;
