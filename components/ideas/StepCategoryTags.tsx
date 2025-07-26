import { Field, ErrorMessage, FormikHelpers } from "formik";
import React from "react";

interface Props {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  values: { tags: string };
}

const StepCategoryTags: React.FC<Props> = ({ setFieldValue, values }) => (
  <div className="max-w-md mx-auto">
    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2">
      Fikrin Ne ile İlgili?
    </h1>
    <p className="text-text text-base mb-4">
      Fikrin neyle ilgili olduğu sistem tarafından daha iyi anlaşılsın.
    </p>
    <div>
      <label className="block text-sm font-medium text-text mb-1">
        Kategori Seçimi
      </label>
      <Field
        name="category"
        type="text"
        placeholder="örn: Web Yazılımı"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
      />
      <ErrorMessage name="category">
        {(msg) => <div className="text-xs text-red-500 mt-1">{msg}</div>}
      </ErrorMessage>
    </div>
    <div>
      <label className="block text-sm font-medium text-text mb-1 mt-3">
        Etiketler
      </label>
      <Field
        name="tags"
        type="text"
        placeholder="Aralarına virgül koyarak etiketlerini yaz!"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFieldValue("tags", e.target.value)
        }
        value={values.tags}
      />
      <ErrorMessage name="tags">
        {(msg) => <div className="text-xs text-red-500 mt-1">{msg}</div>}
      </ErrorMessage>
    </div>
  </div>
);

export default StepCategoryTags;
