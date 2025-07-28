import React from "react";
import { Icon } from "@iconify/react";

const project = {
  title: "Akıllı Nakliye Platformu",
  description:
    "Eşyaların taşınması ve yeni eve düzenli yerleştirilmesi için dijital bir çözüm.",
  tags: ["nakliye", "otomasyon", "hizmet"],
  likes: 12,
  participants: 3,
  point: 84,
  owner: { name: "Bora Özkent", avatar: "/images/defaultAvatar.png" },
};

const ProjectsDetail: React.FC = () => {
  return (
    <div className="py-10">
      {/* Başlık ve etiketler */}
      <div className="text-center mb-6">
        <h1 className="text-primary font-bold text-3xl md:text-4xl mb-3">
          {project.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-text text-lg max-w-2xl mx-auto mb-2">
          {project.description}
        </p>
      </div>

      {/* Kullanıcı, puan, beğeni, katılımcı, paylaş */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <img
            src={project.owner.avatar}
            alt={project.owner.name}
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <span className="text-text font-medium text-base">
            {project.owner.name}
          </span>
        </div>
        <span className="text-green-500 font-semibold text-base">
          {project.point} Puan
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-gray-500 text-base">
            <Icon
              icon="hugeicons:favourite-square"
              width={22}
              height={22}
              className="text-red-400"
            />
            <span>{project.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-base">
            <Icon
              icon="hugeicons:user-account"
              width={22}
              height={22}
              className="text-primary"
            />
            <span>{project.participants}</span>
          </div>
          <button
            className="hover:bg-gray-100 rounded-full p-2 transition"
            title="Paylaş"
          >
            <Icon
              icon="hugeicons:share-01"
              width={22}
              height={22}
              className="text-gray-500"
            />
          </button>
        </div>
      </div>

      {/* İş geliştirme ve iş modeli detayları */}
      <div className="space-y-8">
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">
            Problem Tanımı
          </h2>
          <p className="text-text text-base">
            Türkiye'de taşınma süreci, nakliye ve yeni eve yerleşme aşamalarında
            ciddi zorluklar barındırıyor. Mevcut hizmetler genellikle sadece taşıma
            ile sınırlı kalıyor, kullanıcılar ise eşyaların düzenli yerleştirilmesi,
            temizlik ve iç tasarım gibi ek hizmetlere ihtiyaç duyuyor.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">
            Çözüm ve İş Modeli
          </h2>
          <p className="text-text text-base">
            Akıllı Nakliye Platformu, taşınma sürecini uçtan uca dijitalleştirerek;
            nakliye, temizlik, iç tasarım ve yerleşim hizmetlerini tek bir çatı
            altında sunar. Platform, kullanıcıların ihtiyaçlarına göre paketler
            oluşturur ve hizmet sağlayıcılarla buluşturur. Hizmetler, puanlama ve
            yorum sistemiyle kalite odaklı olarak sunulur. Gelir modeli; hizmet
            komisyonları, premium paketler ve reklam gelirleri üzerine kuruludur.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">Hedef Kitle</h2>
          <p className="text-text text-base">
            Büyük şehirlerde yaşayan, sık taşınan bireyler, aileler ve kurumsal
            müşteriler. Özellikle zaman ve konfor arayan, dijital çözümlere açık
            kullanıcılar.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">
            Gelir ve Büyüme Stratejisi
          </h2>
          <p className="text-text text-base">
            Komisyon bazlı gelir modeli, ek hizmetler için premium paketler, iş
            ortaklıkları ve reklam gelirleri. Büyüme için dijital pazarlama,
            işbirlikleri ve kullanıcı referansları ön planda olacak.
          </p>
        </section>
        <section>
          <h2 className="text-primary font-bold text-2xl mb-2">SWOT Analizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <span className="font-semibold text-green-700">Güçlü Yönler</span>
              <p className="text-text text-base">
                Tek platformda uçtan uca hizmet, dijital kolaylık, puanlama ve kalite
                kontrol, yenilikçi iş modeli.
              </p>
            </div>
            <div>
              <span className="font-semibold text-yellow-700">Fırsatlar</span>
              <p className="text-text text-base">
                Büyük şehirlerde artan taşınma ihtiyacı, dijitalleşme trendi,
                işbirliği ve entegrasyon fırsatları.
              </p>
            </div>
            <div>
              <span className="font-semibold text-red-700">
                Zayıf Yönler & Tehditler
              </span>
              <p className="text-text text-base">
                Hizmet kalitesi ve operasyonel zorluklar, rekabet, müşteri güveni ve
                sürdürülebilirlik riskleri.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsDetail;