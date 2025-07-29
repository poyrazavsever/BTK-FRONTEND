import React from "react";
import { Icon } from "@iconify/react";

export type UserCategory = "user" | "developer" | "investor";

const categories: { key: UserCategory; label: string; icon: string; desc: string }[] = [
    {
        key: "user",
        label: "Normal Kullanıcı",
        icon: "hugeicons:location-user-01",
        desc: "Fikirleri keşfet, projelere katıl, topluluğa dahil ol."
    },
    {
        key: "developer",
        label: "Geliştirici",
        icon: "hugeicons:third-bracket-square",
        desc: "Projelerde geliştirici olarak yer al, katkı sağla."
    },
    {
        key: "investor",
        label: "Yatırımcı",
        icon: "hugeicons:money-bag-01",
        desc: "Projeleri incele, yatırım fırsatlarını değerlendir."
    }
];

interface Props {
    value: UserCategory | null;
    onChange: (cat: UserCategory) => void;
}

const CategoryStep: React.FC<Props> = ({ value, onChange }) => (
    <div>
        <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left flex items-center gap-2">
            Kategori Seçimi
        </h1>
        <p className="text-text text-base mb-4 text-center md:text-left">
            Lütfen kayıt olmak istediğin kullanıcı tipini seç.
        </p>
        <div className="flex flex-col gap-4">
            {categories.map((cat) => (
                <button
                    key={cat.key}
                    type="button"
                    className={`flex items-center gap-4 border rounded-lg px-4 py-3 transition hover:shadow-md ${value === cat.key ? "border-primary bg-primary/10" : "border-gray-200 bg-white"
                        }`}
                    onClick={() => onChange(cat.key)}
                >
                    <Icon icon={cat.icon} className="text-3xl text-primary" />
                    <div className="flex flex-col items-start">
                        <span className="font-semibold text-lg">{cat.label}</span>
                        <span className="text-xs text-gray-500">{cat.desc}</span>
                    </div>
                </button>
            ))}
        </div>
    </div>
);

export default CategoryStep;
