import React from "react";
import Button from "@/components/ui/button";
import { Icon } from "@iconify/react";

const Cta = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
          <Icon
            icon="mdi:email-outline"
            width={36}
            height={36}
            className="text-primary"
          />
        </div>
        <h2 className="font-bold text-2xl md:text-3xl text-center text-text">
          Güncellemeleri Kaçırmayın
        </h2>
        <p className="text-gray-500 text-center text-base max-w-md">
          Son yüklenen fikirler, etkinlikler ve güncellemeleri kaçırmamak için
          bültene kayıt olun!
        </p>
        <form className="flex flex-col md:flex-row items-center gap-3 mt-4 w-full max-w-lg">
          <input
            type="email"
            placeholder="E-Posta Adresiniz"
            className="flex-1 border border-gray-200 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <Button
            variant="primary"
          >
            Abone Ol
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Cta;
