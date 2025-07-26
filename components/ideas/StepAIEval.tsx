import React from "react";

interface Props {
  aiScore: { invest: number; general: number; risk: number };
}

const StepAIEval: React.FC<Props> = ({ aiScore }) => (
  <>
    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center max-w-2xl mx-auto">
      Yapay Zeka Analizi.
    </h1>
    <p className="text-text text-base mb-8 text-center">
      Yapay zeka ihtiyaçlarını belirliyor, yüklendikçe gelecek ve ihtiyaçlarını
      anlayacaksın.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span className="text-lg text-gray-500 mb-1">
          Yatırıma Uygunluk Skoru
        </span>
        <span className="text-4xl font-bold text-yellow-400">
          {aiScore.invest}
        </span>
        <span className="text-xs text-gray-400">Puan</span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span className="text-lg text-gray-500 mb-1">Genel Skor</span>
        <span className="text-4xl font-bold text-green-400">
          {aiScore.general}
        </span>
        <span className="text-xs text-gray-400">Puan</span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span className="text-lg text-gray-500 mb-1">Risk Skoru</span>
        <span className="text-4xl font-bold text-green-400">
          {aiScore.risk}
        </span>
        <span className="text-xs text-gray-400">Puan</span>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
        <span className="font-semibold text-gray-700">SWOT</span>
        <span className="text-primary font-medium cursor-pointer hover:underline">
          SWOT Analizi
        </span>
        <span className="text-xs text-gray-500 text-center">
          detayları için karta tıklayabilirsiniz.
        </span>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
        <span className="font-semibold text-gray-700">Takım Yapısı</span>
        <span className="text-primary font-medium cursor-pointer hover:underline">
          Takım Yapısı
        </span>
        <span className="text-xs text-gray-500 text-center">
          detayları için karta tıklayabilirsiniz.
        </span>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
        <span className="font-semibold text-gray-700">
          Tahmini Bitiş Süresi
        </span>
        <span className="text-primary font-medium cursor-pointer hover:underline">
          3 ay
        </span>
        <span className="text-xs text-gray-500 text-center">
          içerisinde günde 3 saat çalışma ile bitirilebilir.
        </span>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
        <span className="font-semibold text-gray-700">
          Tahmini Gereken Bütçe
        </span>
        <span className="text-primary font-medium cursor-pointer hover:underline">
          Bütçe
        </span>
        <span className="text-xs text-gray-500 text-center">
          detayları için karta tıklayabilirsiniz.
        </span>
      </div>
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-primary text-white font-semibold rounded-lg px-6 py-3 text-lg shadow hover:bg-primary/90 transition"
      >
        Başvuruyu Tamamla
      </button>
    </div>
  </>
);

export default StepAIEval;
