import React from 'react';
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

const BlogDetail = () => {
    return (
        <main className="w-full min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col gap-6 mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-header">
                            Gelecekteki hayalimiz bir topluluk oluşturmak
                        </h1>
                        <div className="flex items-center gap-4 text-text">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar" className="text-primary" />
                                <span>6 Ağustos 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:account" className="text-primary" />
                                <span>Gelişiyor Ekibi</span>
                            </div>
                        </div>
                    </div>

                    {/* BlogDetail Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-text leading-relaxed mb-6">
                            Gelişiyor olarak, teknoloji dünyasında yeni bir sayfa açmak için yola çıktık.
                            Amacımız sadece bir platform oluşturmak değil, aynı zamanda tutkulu geliştiricilerin,
                            yaratıcı girişimcilerin ve vizyoner yatırımcıların bir araya geldiği canlı bir ekosistem yaratmak.
                        </p>

                        <h2 className="text-2xl font-bold text-header mt-8 mb-4">
                            Neden Bir Topluluk?
                        </h2>
                        <p className="text-text leading-relaxed mb-6">
                            İnanıyoruz ki gerçek inovasyon, farklı perspektiflerin bir araya gelmesiyle ortaya çıkar.
                            Geliştirici topluluğumuz, sadece kod yazan bireyler değil, geleceği şekillendiren,
                            problem çözen ve değer yaratan bir ekosistemdir.
                        </p>

                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 my-8">
                            <blockquote className="text-xl text-primary italic">
                                "Birlikte büyüyerek, birlikte geliştirerek ve birbirimize ilham vererek daha güçlü bir gelecek inşa edebiliriz."
                            </blockquote>
                        </div>

                        <h2 className="text-2xl font-bold text-header mt-8 mb-4">
                            Geleceğe Dair Planlarımız
                        </h2>
                        <p className="text-text leading-relaxed mb-6">
                            Önümüzdeki dönemde, topluluk odaklı etkinlikler, workshoplar ve hackathonlar düzenleyerek
                            üyelerimizin birbirleriyle etkileşimini artırmayı hedefliyoruz. Ayrıca, mentorluk programları
                            ve eğitim içerikleriyle geliştiricilerimizin sürekli öğrenme yolculuğuna destek olacağız.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 flex flex-col items-center gap-6 bg-gray-50 border border-gray-100 rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-header text-center">
                            Bu yolculukta bize katılmak ister misin?
                        </h3>
                        <p className="text-text text-center max-w-2xl">
                            İster geliştirici, ister girişimci veya yatırımcı ol - bu ekosistemin bir parçası olabilirsin.
                        </p>
                        <div className="flex gap-4">
                            <Button href="/auth/register" variant="primary">
                                Hemen Katıl
                            </Button>
                            <Button href="/about" variant="secondary">
                                Daha Fazla Bilgi
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogDetail;