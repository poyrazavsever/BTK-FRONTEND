import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/button';

// İnvestment type enum
type InvestmentType = 'buy' | 'invest' | null;

const InvestmentPage = () => {
    const [step, setStep] = useState(1);
    const [investmentType, setInvestmentType] = useState<InvestmentType>(null);
    const [reason, setReason] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [amount, setAmount] = useState('');

    const steps = [
        'Yatırım Türü',
        'Detaylar',
        'Süreç',
        'Ödeme'
    ];

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <main className="min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-12">
                        {steps.map((stepName, index) => (
                            <React.Fragment key={stepName}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step > index + 1 ? 'bg-primary text-white' :
                                            step === index + 1 ? 'bg-primary text-white' :
                                                'bg-gray-100 text-text'
                                        }`}>
                                        {step > index + 1 ? (
                                            <Icon icon="mdi:check" width={24} />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>
                                    <span className="text-sm mt-2 text-text">{stepName}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`h-0.5 w-16 mx-4 ${step > index + 1 ? 'bg-primary' : 'bg-gray-200'
                                        }`} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Step Content */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        {/* Step 1: Investment Type Selection */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-header mb-6">Yatırım Türünü Seçin</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        className={`p-6 rounded-lg border text-left hover:border-primary hover:shadow-md transition-all ${investmentType === 'buy' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                            }`}
                                        onClick={() => setInvestmentType('buy')}
                                    >
                                        <Icon icon="mdi:shopping-outline" className="text-primary mb-3" width={32} />
                                        <h3 className="font-semibold text-lg mb-2">Satın Al</h3>
                                        <p className="text-text text-sm">Projenin tamamına sahip olun ve tam kontrol sağlayın.</p>
                                    </button>
                                    <button
                                        className={`p-6 rounded-lg border text-left hover:border-primary hover:shadow-md transition-all ${investmentType === 'invest' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                            }`}
                                        onClick={() => setInvestmentType('invest')}
                                    >
                                        <Icon icon="mdi:chart-line" className="text-primary mb-3" width={32} />
                                        <h3 className="font-semibold text-lg mb-2">Yatırım Yap</h3>
                                        <p className="text-text text-sm">Projeye ortak olun ve gelirden pay alın.</p>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Details */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-header mb-6">Yatırım Detayları</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-text mb-1">
                                            Yatırım Sebebiniz
                                        </label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                                            rows={4}
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            placeholder="Bu projeye neden yatırım yapmak istiyorsunuz?"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text mb-1">
                                            Yatırım Tutarı
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="₺"
                                        />
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <input
                                            type="checkbox"
                                            id="agreement"
                                            className="mt-1"
                                            checked={agreement}
                                            onChange={(e) => setAgreement(e.target.checked)}
                                        />
                                        <label htmlFor="agreement" className="text-sm text-text">
                                            Yatırım koşullarını ve şartlarını okudum, kabul ediyorum.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Process */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-header mb-6">Süreç Nasıl İşliyor?</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-primary font-medium">1</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Başvuru İncelemesi</h3>
                                            <p className="text-text">Yatırım başvurunuz ekibimiz tarafından incelenir.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-primary font-medium">2</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Görüşme</h3>
                                            <p className="text-text">Proje ekibiyle online görüşme gerçekleştirilir.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-primary font-medium">3</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Sözleşme</h3>
                                            <p className="text-text">Anlaşma sağlanırsa yasal sözleşme imzalanır.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-primary font-medium">4</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Transfer</h3>
                                            <p className="text-text">Ödeme güvenli bir şekilde transfer edilir.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Payment */}
                        {step === 4 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-header mb-6">Ödeme</h2>
                                <div className="space-y-4">
                                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                                        <h3 className="font-semibold mb-2">Yatırım Özeti</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Yatırım Türü:</span>
                                                <span className="font-medium">
                                                    {investmentType === 'buy' ? 'Satın Alma' : 'Yatırım'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Tutar:</span>
                                                <span className="font-medium">₺{amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-text mb-1">
                                                Kart Numarası
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                                                placeholder="1234 5678 9012 3456"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-text mb-1">
                                                    Son Kullanma
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                                                    placeholder="MM/YY"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-text mb-1">
                                                    CVC
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            {step > 1 && (
                                <Button variant="secondary" onClick={handleBack}>
                                    Geri
                                </Button>
                            )}
                            <Button
                                variant="primary"
                                className="ml-auto"
                                onClick={handleNext}
                                disabled={
                                    (step === 1 && !investmentType) ||
                                    (step === 2 && (!reason || !amount || !agreement)) ||
                                    step === 4
                                }
                            >
                                {step === 4 ? 'Ödemeyi Tamamla' : 'Devam Et'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default InvestmentPage;
