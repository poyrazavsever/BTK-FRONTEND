import React from "react";

interface Props {
    values: { cardNumber: string; cardName: string; cardExpiry: string; cardCvc: string };
    onChange: (field: string, value: string) => void;
}

const InvestorExtraStep: React.FC<Props> = ({ values, onChange }) => (
    <div>
        <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
            Kart Bilgileri
        </h1>
        <p className="text-text text-base mb-4 text-center md:text-left">
            Güvenlik için kart bilgilerini girmen gerekiyor. Bilgiler şifreli tutulacaktır.
        </p>
        <div className="mb-3">
            <label className="block text-sm font-medium text-text mb-1">Kart Numarası</label>
            <input
                type="text"
                maxLength={19}
                placeholder="1234 5678 9012 3456"
                value={values.cardNumber}
                onChange={e => onChange("cardNumber", e.target.value.replace(/[^0-9 ]/g, "").slice(0, 19))}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
            />
        </div>
        <div className="mb-3">
            <label className="block text-sm font-medium text-text mb-1">Kart Üzerindeki İsim</label>
            <input
                type="text"
                placeholder="Ad Soyad"
                value={values.cardName}
                onChange={e => onChange("cardName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
            />
        </div>
        <div className="flex gap-2">
            <div className="flex-1">
                <label className="block text-sm font-medium text-text mb-1">Son Kullanma</label>
                <input
                    type="text"
                    maxLength={5}
                    placeholder="AA/YY"
                    value={values.cardExpiry}
                    onChange={e => onChange("cardExpiry", e.target.value.replace(/[^0-9/]/g, "").slice(0, 5))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                />
            </div>
            <div className="w-20">
                <label className="block text-sm font-medium text-text mb-1">CVC</label>
                <input
                    type="text"
                    maxLength={4}
                    placeholder="123"
                    value={values.cardCvc}
                    onChange={e => onChange("cardCvc", e.target.value.replace(/[^0-9]/g, "").slice(0, 4))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                />
            </div>
        </div>
    </div>
);

export default InvestorExtraStep;
