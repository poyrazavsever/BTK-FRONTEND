import React from 'react';

const Terms = () => {
  return (
    <main className="w-full min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-header mb-8">Şartlar & Koşullar</h1>
          
          <div className="prose prose-lg max-w-none text-text">
            <p className="lead mb-8">
              Bu şartlar ve koşullar, Gelişiyor platformunu kullanımınızı düzenleyen yasal anlaşmayı oluşturur.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Hesap Oluşturma ve Kullanım</h2>
              <ul className="space-y-3">
                <li>18 yaşından büyük olmalısınız</li>
                <li>Doğru ve güncel bilgiler sağlamalısınız</li>
                <li>Hesap güvenliğinizden siz sorumlusunuz</li>
                <li>Hesap paylaşımı yasaktır</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Platform Kuralları</h2>
              <ul className="space-y-3">
                <li>Diğer kullanıcılara saygılı davranın</li>
                <li>Telif haklarına uyun</li>
                <li>Spam ve yanıltıcı içerik paylaşmayın</li>
                <li>Platform güvenliğini tehdit etmeyin</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">İçerik Politikası</h2>
              <p>
                Platformda paylaştığınız içerikler:
              </p>
              <ul className="space-y-3 mt-4">
                <li>Yasalara uygun olmalı</li>
                <li>Başkalarının haklarını ihlal etmemeli</li>
                <li>Topluluk kurallarına uymalı</li>
                <li>Doğru ve yanıltıcı olmamalı</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-header mb-4">Fikri Mülkiyet</h2>
              <p>
                Platform üzerindeki tüm içerik ve özellikler Gelişiyor'un fikri mülkiyetidir.
                Kullanıcılar kendi içeriklerinin haklarını korur ancak platforma paylaşım lisansı verir.
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

export default Terms;
