import React from "react";

const Panel = () => {
    return (
        <div className="py-10 px-4 font-nunito">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Gelişiyor Paneli</h1>
            <p className="text-lg text-gray-600 mb-8">
                Gerçek hayattaki problemleri çözmek, geliştiricilere iş ve gelir fırsatı sunmak, fikir sahiplerinin projelerinden kazanç elde etmesini sağlamak ve yatırımcılarla geliştiricileri bir araya getirerek sürdürülebilir ürünlerin ortaya çıkmasına öncülük etmek için buradayız.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Fikir Gönderimi</h2>
                    <p className="text-gray-500 mb-4">Karşılaştığınız problemleri yazılımsal çözüm fikirleri olarak platforma yükleyin.</p>
                    <a href="/ideas/create" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Fikirini Gönder</a>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Projeye Katılım</h2>
                    <p className="text-gray-500 mb-4">İlgi alanlarına ve beceri düzeyine göre projelere katıl, iş ve gelir fırsatı yakala.</p>
                    <a href="/projects" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Projeleri İncele</a>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Yatırımcı Erişimi</h2>
                    <p className="text-gray-500 mb-4">Tamamlanan projeler yatırımcılara ve şirketlere sunulur. Yatırım yapabilir, hisse alabilir veya projeleri satın alabilirsiniz.</p>
                    <a href="/investors" className="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Yatırımcıları Gör</a>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Gemini AI Entegrasyonu</h2>
                    <p className="text-gray-500 mb-4">Fikirleri analiz eden, teknoloji ve beceri öneren, geliştiricilere uygun projeleri sunan akıllı sistem.</p>
                    <a href="/developers" className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Geliştiricileri Gör</a>
                </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Platformun İşleyişi</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Fikir gönder, analiz ve lisanslama sürecinden geçsin.</li>
                    <li>Lisanslanan fikirler geliştiricilere sunulsun.</li>
                    <li>Projeye katılım sağla, hisse sahibi ol.</li>
                    <li>Tamamlanan projeler yatırımcılara ve şirketlere sunulsun.</li>
                </ul>
            </div>
        </div>
    );
};

export default Panel;