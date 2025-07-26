import { Field, ErrorMessage } from "formik";
import React from "react";

const StepTitleDesc = () => (
  <div className="max-w-md mx-auto">
    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2">
      Fikrin mi var? <span className="text-2xl">💭</span>
    </h1>
    <p className="text-text text-base mb-4">
      Fikirlerini paylaşmaya başla! Sorunlar fikirler ile çözülür, fikirlerini
      paylaş ve sorunları çözelim!
    </p>
    <div>
      <label className="block text-sm font-medium text-text mb-1">
        Fikir Başlığı
      </label>
      <Field
        name="title"
        type="text"
        maxLength={100}
        placeholder="Maksimum 100 karakter"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
      />
      <ErrorMessage name="title">
        {(msg) => <div className="text-xs text-red-500 mt-1">{msg}</div>}
      </ErrorMessage>
    </div>
    <div>
      <label className="block text-sm font-medium text-text mb-1 mt-3">
        Kısa Açıklama
      </label>
      <Field
        name="summary"
        type="text"
        maxLength={200}
        placeholder="Fikrin 2-3 cümlelik özeti"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
      />
      <ErrorMessage name="summary">
        {(msg) => <div className="text-xs text-red-500 mt-1">{msg}</div>}
      </ErrorMessage>
    </div>
  </div>
);

export default StepTitleDesc;
