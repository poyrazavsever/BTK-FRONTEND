import React, { useState } from "react";
import Logo from "@/components/ui/logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone?: string;
  code: string;
}

const initialValues: RegisterFormValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  phone: "",
  code: "",
};

const stepSchemas = [
  // 1. Adım: İsim Soyisim, E-posta
  Yup.object({
    name: Yup.string().required("Ad Soyad zorunlu"),
    email: Yup.string()
      .email("Geçerli bir e-posta girin")
      .required("E-posta zorunlu"),
  }),
  // 2. Adım: Şifre, Yeniden Şifre
  Yup.object({
    password: Yup.string()
      .min(8, "En az 8 karakter olmalı")
      .required("Şifre zorunlu"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
      .required("Şifre tekrarı zorunlu"),
  }),
  // 3. Adım: Telefon (opsiyonel)
  Yup.object({
    phone: Yup.string()
      .matches(
        /^$|^(\+90|0)?[1-9][0-9]{9}$/g,
        "Geçerli bir telefon numarası girin"
      )
      .nullable(),
  }),
  // 4. Adım: Kod
  Yup.object({
    code: Yup.string().length(5, "5 haneli kod girin").required("Kod zorunlu"),
  }),
];

const Register: React.FC & { isAuthPage?: boolean } = () => {
  const [step, setStep] = useState(0);
  const [emailForCode, setEmailForCode] = useState("");
  const [codeTimer, setCodeTimer] = useState(0);

  // Kod gönderme simülasyonu
  const handleSendCode = (email: string) => {
    setEmailForCode(email);
    setCodeTimer(30);
    const interval = setInterval(() => {
      setCodeTimer((t) => {
        if (t <= 1) {
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sol: Form alanı */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
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
          <Formik
            initialValues={initialValues}
            validationSchema={stepSchemas[step]}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (values, helpers) => {
              if (step < 3) {
                if (step === 2) {
                  // Telefon adımında, opsiyonel olduğu için validasyon hatası yoksa ilerle
                  setStep(step + 1);
                  // Kod gönderme simülasyonu
                  handleSendCode(values.email);
                } else {
                  setStep(step + 1);
                }
                return;
              }
              // 4. adımda: API'ye gönder
              try {
                // await api.register(values)
                // window.location.href = "/";
              } catch (err: any) {
                helpers.setStatus(err?.message || "Bir hata oluştu");
              } finally {
                helpers.setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, status, values, setFieldValue }) => (
              <Form className="space-y-4">
                {step === 0 && (
                  <>
                    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left flex items-center gap-2">
                      Hoş Geldin <span className="text-2xl">👋</span>
                    </h1>
                    <p className="text-text text-base mb-4 text-center md:text-left">
                      Yeni bir dünyaya dalış yapmaya, fikir paylaşmaya,
                      paylaştıkça büyümeye hazır mısın?
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">
                        Ad - Soyad
                      </label>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Poyraz Avsever"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                      />
                      <ErrorMessage name="name">
                        {(msg) => (
                          <div className="text-xs text-red-500 mt-1">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">
                        E-Posta
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                      />
                      <ErrorMessage name="email">
                        {(msg) => (
                          <div className="text-xs text-red-500 mt-1">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                      Güçlü Bir Şifre Lazım!
                    </h1>
                    <p className="text-text text-base mb-4 text-center md:text-left">
                      Bu dünyada seni korumamız için bize güçlü bir şifre vermen
                      lazım.
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">
                        Şifre
                      </label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="************"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                      />
                      <ErrorMessage name="password">
                        {(msg) => (
                          <div className="text-xs text-red-500 mt-1">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">
                        Yeniden Şifre
                      </label>
                      <Field
                        name="passwordConfirm"
                        type="password"
                        placeholder="************"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                      />
                      <ErrorMessage name="passwordConfirm">
                        {(msg) => (
                          <div className="text-xs text-red-500 mt-1">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                      Numaranı alabilir miyim?
                    </h1>
                    <p className="text-text text-base mb-4 text-center md:text-left">
                      Çift faktörlü doğrulama açmak ister misin? Telefon numaran
                      yeterli?
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">
                        Telefon Numarası
                      </label>
                      <Field
                        name="phone"
                        type="tel"
                        placeholder="+90"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                      />
                      <ErrorMessage name="phone">
                        {(msg) => (
                          <div className="text-xs text-red-500 mt-1">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                      Doğrulama Kodu
                    </h1>
                    <p className="text-text text-base mb-4 text-center md:text-left">
                      E-Posta adresine gelen doğrulama kodunu buraya girer
                      misin?
                    </p>
                    <div className="flex gap-2 justify-center mb-2">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Field
                          key={i}
                          name="code"
                          type="text"
                          maxLength={5}
                          className="w-12 h-12 text-center text-2xl border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                          value={values.code}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFieldValue(
                              "code",
                              e.target.value.replace(/[^0-9]/g, "").slice(0, 5)
                            )
                          }
                        />
                      ))}
                    </div>
                    <ErrorMessage name="code">
                      {(msg) => (
                        <div className="text-xs text-red-500 text-center mb-2">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                    <div className="flex gap-2 justify-center">
                      <button
                        type="button"
                        className="border border-primary text-primary rounded-lg px-4 py-2 text-sm disabled:opacity-60"
                        onClick={() => handleSendCode(values.email)}
                        disabled={codeTimer > 0}
                      >
                        {codeTimer > 0
                          ? `Tekrar Gönder (${codeTimer})`
                          : "Tekrar Gönder"}
                      </button>
                      <button
                        type="submit"
                        className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold"
                        disabled={isSubmitting}
                      >
                        Tamamla
                      </button>
                    </div>
                  </>
                )}
                {step < 3 && (
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-2 transition hover:bg-primary/90 disabled:opacity-60"
                    disabled={isSubmitting}
                  >
                    Sonraki Adım
                  </button>
                )}
                {status && (
                  <div className="text-xs text-red-500 text-center">
                    {status}
                  </div>
                )}
                <div className="mt-6 text-center text-sm text-text">
                  Zaten bir hesabın var mı?{" "}
                  <a
                    href="/auth/login"
                    className="text-primary font-medium hover:underline"
                  >
                    Oturum Aç.
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* Sağ: Görsel ve Logo */}
      <div className="hidden md:flex flex-1 items-center justify-center relative min-h-screen">
        <img
          src="/images/auth.png"
          alt="Auth Background"
          className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
          style={{ zIndex: 1, objectPosition: "center" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <Logo
            variant="withText"
            className="scale-150 md:scale-125"
            textClassName="text-3xl md:text-4xl"
          />
        </div>
        <div
          className="absolute inset-0 bg-white/60 rounded-l-3xl"
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  );
};

Register.isAuthPage = true;
export default Register;
