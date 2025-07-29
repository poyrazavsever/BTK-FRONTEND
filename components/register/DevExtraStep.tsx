import React from "react";

interface Props {
    onFileChange: (field: "cv" | "idFront", file: File | null) => void;
    values: { cv?: File | null; idFront?: File | null };
}

const DevExtraStep: React.FC<Props> = ({ onFileChange, values }) => (
    <div>
        <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
            Ek Belgeler
        </h1>
        <p className="text-text text-base mb-4 text-center md:text-left">
            Lütfen CV ve kimlik ön yüz fotoğrafını yükle.
        </p>
        <div className="mb-4">
            <label className="block text-sm font-medium text-text mb-1">CV (PDF)</label>
            <input
                type="file"
                accept="application/pdf"
                onChange={e => onFileChange("cv", e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
            />
            {values.cv && <div className="text-xs text-green-600 mt-1">Yüklendi: {values.cv.name}</div>}
        </div>
        <div>
            <label className="block text-sm font-medium text-text mb-1">Kimlik Ön Yüzü (JPG/PNG)</label>
            <input
                type="file"
                accept="image/jpeg,image/png"
                onChange={e => onFileChange("idFront", e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
            />
            {values.idFront && <div className="text-xs text-green-600 mt-1">Yüklendi: {values.idFront.name}</div>}
        </div>
    </div>
);

export default DevExtraStep;
