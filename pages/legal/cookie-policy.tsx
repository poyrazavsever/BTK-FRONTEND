import React from 'react';

const CookiePolicy = () => {
  return (
    <main className="w-full min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-header mb-8">Çerez Politikası</h1>
          
          <div className="prose prose-lg max-w-none text-text">
            <p className="lead mb-8">
              Bu politika, Gelişiyor platformunun çerezleri nasıl kullandığını ve size nasıl kontrol 
              imkanı sağladığını açıklar.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Çerez Nedir?</h2>
              <p>
                Çerezler, web siteleri tarafından bilgisayarınıza yerleştirilen küçük metin dosyalarıdır. 
                Bu dosyalar, size daha iyi bir deneyim sunmamıza yardımcı olur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Kullandığımız Çerez Türleri</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Zorunlu Çerezler</h3>
                  <p>Platformun temel işlevleri için gereklidir ve devre dışı bırakılamaz.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Performans Çerezleri</h3>
                  <p>Platform kullanımını analiz etmemize ve iyileştirmemize yardımcı olur.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">İşlevsellik Çerezleri</h3>
                  <p>Tercihlerinizi hatırlamamızı ve size özel özellikler sunmamızı sağlar.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Çerez Kontrolü</h2>
              <p>
                Çerezleri tarayıcı ayarlarınızdan kontrol edebilirsiniz. Ancak bazı çerezleri devre 
                dışı bırakmak, platformun işlevselliğini etkileyebilir.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg mt-4">
                <p className="font-medium">Tarayıcı Ayarları:</p>
                <ul className="mt-2 space-y-1">
                  <li>Chrome: Ayarlar → Gelişmiş → Gizlilik ve Güvenlik</li>
                  <li>Firefox: Seçenekler → Gizlilik & Güvenlik</li>
                  <li>Safari: Tercihler → Gizlilik</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Daha Fazla Bilgi</h2>
              <p>
                Çerez politikamız hakkında sorularınız için bize 
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

export default CookiePolicy;
