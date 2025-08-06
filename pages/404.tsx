import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

const NotFound = () => {
    return (
        <main className="w-full min-h-[85vh] bg-background flex items-center justify-center py-16">
            <div className="container px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="relative w-full h-64 md:h-80 mb-8">
                        <Image
                            src="/images/404.png"
                            alt="404 Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-header mb-4">
                        Sayfa Bulunamadı
                    </h1>

                    <p className="text-text text-lg mb-8 max-w-xl mx-auto">
                        Bu sayfa ya yok ya da henüz inşa edilmedi. Biliyorsunuz daha yapım aşamasındayız :)
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/" variant="primary">
                            Ana Sayfaya Dön
                        </Button>
                        <Button href="/contact" variant="secondary">
                            Bize Ulaşın
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
