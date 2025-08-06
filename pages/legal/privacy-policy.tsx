import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="w-full min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-header mb-8">Gizlilik Politikası</h1>
          
          <div className="prose prose-lg max-w-none text-text">
            <p className="lead mb-8">
              Gelişiyor olarak, gizliliğinize önem veriyoruz. Bu politika, platformumuzda bilgilerinizin nasıl toplandığını, 
              kullanıldığını ve korunduğunu açıklar.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Topladığımız Bilgiler</h2>
              <ul className="space-y-3">
                <li>Hesap bilgileri (isim, e-posta, şifre)</li>
                <li>Profil bilgileri (eğitim, deneyim, beceriler)</li>
                <li>Platform kullanım verileri</li>
                <li>İletişim tercihleri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Bilgilerin Kullanımı</h2>
              <ul className="space-y-3">
                <li>Platform hizmetlerinin sağlanması</li>
                <li>Kullanıcı deneyiminin iyileştirilmesi</li>
                <li>Güvenliğin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Bilgi Güvenliği</h2>
              <p>
                Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz. 
                Bu önlemler şunları içerir:
              </p>
              <ul className="space-y-3 mt-4">
                <li>SSL şifreleme</li>
                <li>Güvenli veri depolama</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Erişim kontrolü ve izleme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">İletişim</h2>
              <p>
                Gizlilik politikamız hakkında sorularınız için bize 
                <a href="mailto:privacy@gelisiyor.com" className="text-primary hover:underline ml-1">
                  privacy@gelisiyor.com
                </a> adresinden ulaşabilirsiniz.
              </p>
            </section>

            <div className="text-sm text-text mt-12 pt-4 border-t">
              <p>Son güncelleme: 6 Ağustos 2025</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
