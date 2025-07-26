import { Field, ErrorMessage } from "formik";
import React from "react";

const StepDetail = () => (
  <div className="max-w-md mx-auto">
    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2">
      Detaylarını Paylaş
    </h1>
    <p className="text-text text-base mb-4">
      Problem nedir? Çözüm ne öneriyor? Hedef kitle kim? Mevcut çözümlerden
      farkı ne? Anlat bakalım!
    </p>
    <div>
      <label className="block text-sm font-medium text-text mb-1">
        Detaylı Açıklama
      </label>
      <Field
        as="textarea"
        name="detail"
        rows={6}
        placeholder="Fikrin arka planını anlat!"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base resize-none"
      />
      <ErrorMessage name="detail">
        {(msg) => <div className="text-xs text-red-500 mt-1">{msg}</div>}
      </ErrorMessage>
    </div>
  </div>
);

export default StepDetail;
