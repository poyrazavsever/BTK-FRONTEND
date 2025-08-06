import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <main className="w-full min-h-[85vh] bg-background flex items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-64 md:h-80 mb-8"
          >
            <Image
              src="/images/404.png"
              alt="404 Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-header mb-4"
          >
            Sayfa Bulunamadı
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text text-lg mb-8 max-w-xl mx-auto"
          >
            Bu sayfa ya yok ya da henüz inşa edilmedi. Biliyorsunuz daha yapım
            aşamasındayız :)
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/" variant="primary">
              Ana Sayfaya Dön
            </Button>
            <Button href="/contact" variant="secondary">
              Bize Ulaşın
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;
