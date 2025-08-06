import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/button';

const contactTopics = [
    {
        id: 'general',
        icon: 'mdi:information',
        title: 'Genel Bilgi',
        description: 'Platform hakkında genel sorularınız için'
    },
    {
        id: 'technical',
        icon: 'mdi:tools',
        title: 'Teknik Destek',
        description: 'Teknik sorunlar ve platform kullanımı hakkında'
    },
    {
        id: 'partnership',
        icon: 'mdi:handshake',
        title: 'İş Birliği',
        description: 'Kurumsal iş birlikleri ve ortaklıklar için'
    },
    {
        id: 'feedback',
        icon: 'mdi:message-text',
        title: 'Geri Bildirim',
        description: 'Önerileriniz ve görüşleriniz için'
    }
];

const Contact = () => {
    const [step, setStep] = useState(1);
    const [selectedTopic, setSelectedTopic] = useState('');

    return (
        <main className="w-full min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-header mb-4">
                            Size Nasıl Yardımcı Olabiliriz?
                        </h1>
                        <p className="text-text text-lg max-w-2xl mx-auto">
                            Sorularınız için buradayız. Size en iyi şekilde yardımcı olabilmemiz için lütfen aşağıdaki adımları takip edin.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-100 text-text'
                                }`}>
                                1
                            </div>
                            <div className={`h-0.5 w-16 ${step > 1 ? 'bg-primary' : 'bg-gray-200'
                                }`} />
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-100 text-text'
                                }`}>
                                2
                            </div>
                            <div className={`h-0.5 w-16 ${step > 2 ? 'bg-primary' : 'bg-gray-200'
                                }`} />
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-primary text-white' : 'bg-gray-100 text-text'
                                }`}>
                                3
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-header mb-6">Konu Seçin</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {contactTopics.map((topic) => (
                                        <button
                                            key={topic.id}
                                            onClick={() => {
                                                setSelectedTopic(topic.id);
                                                setStep(2);
                                            }}
                                            className={`p-6 rounded-lg border text-left hover:border-primary hover:shadow-md transition-all ${
                                        selectedTopic === topic.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                                    }`}
                    >
                                    <Icon icon={topic.icon} className="text-primary mb-3" width={24} height={24} />
                                    <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                                    <p className="text-text text-sm">{topic.description}</p>
                                </button>
                        ))}
                    </div>
                </div>
            )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-header mb-6">İletişim Bilgileri</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Ad Soyad</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                                        placeholder="Adınız ve soyadınız"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">E-posta</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Mesajınız</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                                        placeholder="Size nasıl yardımcı olabiliriz?"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <Button variant="secondary" onClick={() => setStep(1)}>
                                    Geri Dön
                                </Button>
                                <Button onClick={() => setStep(3)}>
                                    Gönder
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center w-full flex flex-col items-center py-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icon icon="mdi:check" className="text-primary" width={32} height={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-header mb-4">Mesajınız İletildi</h2>
                            <p className="text-text mb-8">
                                En kısa sürede size dönüş yapacağız. Mesajınız için teşekkür ederiz.
                            </p>
                            <Button variant="secondary" onClick={() => setStep(1)}>
                                Yeni Mesaj Gönder
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </main >
  );
};

export default Contact;