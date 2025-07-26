import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Logo from "@/components/ui/logo";
import StepTitleDesc from "@/components/ideas/StepTitleDesc";
import StepDetail from "@/components/ideas/StepDetail";
import StepCategoryTags from "@/components/ideas/StepCategoryTags";
import StepAIEval from "@/components/ideas/StepAIEval";
import { div } from "framer-motion/client";

interface AuthPageComponent extends React.FC {
  isAuthPage?: boolean;
}

// const Create = () => {

const stepSchemas = [
  // 1. Adım: Başlık ve kısa açıklama
  Yup.object({
    title: Yup.string()
      .required("Başlık zorunlu")
      .min(5, "Başlık en az 5 karakter olmalı")
      .max(100, "Başlık en fazla 100 karakter olabilir")
      .matches(
        /^[a-zA-Z0-9ğüşöçıİĞÜŞÖÇ\s.,!?-]+$/,
        "Başlık özel karakter içeremez"
      ),
    summary: Yup.string()
      .required("Kısa açıklama zorunlu")
      .min(15, "Kısa açıklama en az 15 karakter olmalı")
      .max(200, "Kısa açıklama en fazla 200 karakter olabilir"),
  }),
  // 2. Adım: Detaylı açıklama
  Yup.object({
    detail: Yup.string()
      .required("Detaylı açıklama zorunlu")
      .min(50, "Detaylı açıklama en az 50 karakter olmalı")
      .max(2000, "Detaylı açıklama en fazla 2000 karakter olabilir"),
  }),
  // 3. Adım: Kategori ve etiketler
  Yup.object({
    category: Yup.string()
      .required("Kategori zorunlu")
      .min(3, "Kategori en az 3 karakter olmalı")
      .max(50, "Kategori en fazla 50 karakter olabilir"),
    tags: Yup.string()
      .required("En az bir etiket girin")
      .test(
        "tags-format",
        "En az bir etiket girin ve virgül ile ayırın",
        (value) => {
          if (!value) return false;
          const tagsArr = value
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);
          return (
            tagsArr.length > 0 &&
            tagsArr.every((t) => t.length >= 2 && t.length <= 20)
          );
        }
      ),
  }),
  // 4. Adım: AI değerlendirme (validasyon yok)
  Yup.object(),
];

const initialValues = {
  title: "",
  summary: "",
  detail: "",
  category: "",
  tags: "",
};

const Create: AuthPageComponent = () => {
  const [step, setStep] = useState(0);
  const [aiScore, setAiScore] = useState({ invest: 61, general: 84, risk: 94 });

  // Adım değiştikçe AI skorunu simüle et
  React.useEffect(() => {
    if (step === 3) {
      setAiScore({
        invest: 50 + Math.floor(Math.random() * 50),
        general: 70 + Math.floor(Math.random() * 30),
        risk: 60 + Math.floor(Math.random() * 40),
      });
    }
  }, [step]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sol: Form alanı */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-xl mx-auto">
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center gap-4 justify-center">
              {step > 0 ? (
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/30 text-primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  <span className="text-xl">&#8592;</span>
                </button>
              ) : (
                <div className="w-8 h-8" />
              )}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/30 text-primary font-semibold">
                {step + 1}
              </div>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={stepSchemas[step]}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (values, helpers) => {
              if (step < 3) {
                setStep(step + 1);
                return;
              }
              // API'ye gönderme simülasyonu
              alert(
                "Fikir başarıyla gönderildi!\n" +
                  JSON.stringify(values, null, 2)
              );
              helpers.setSubmitting(false);
            }}
          >
            {({ isSubmitting, status, setFieldValue, values }) => (
              <Form className="space-y-4 mx-auto">
                {step === 0 && <StepTitleDesc />}
                {step === 1 && <StepDetail />}
                {step === 2 && (
                  <StepCategoryTags
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                )}
                {step === 3 && <StepAIEval aiScore={aiScore} />}
                {status && (
                  <div className="text-xs w-md mx-auto text-red-500 text-center">
                    {status}
                  </div>
                )}
                {step < 3 && (
                  <div className="w-full flex justify-center">
                    <button
                      type="submit"
                      className="w-full max-w-md mx-auto bg-primary text-white font-semibold rounded-lg py-2 mt-2 transition hover:bg-primary/90 disabled:opacity-60"
                      disabled={isSubmitting}
                    >
                      Sonraki Adım
                    </button>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

Create.isAuthPage = true;
export default Create;
