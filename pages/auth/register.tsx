
import React, { useState } from "react";
import Logo from "@/components/ui/logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authApi } from "@/api/auth";
import { stepSchemas, initialValues } from "@/components/register/steps";
import CategoryStep, { UserCategory } from "@/components/register/CategoryStep";
import DevExtraStep from "@/components/register/DevExtraStep";
import InvestorExtraStep from "@/components/register/InvestorExtraStep";

interface RegisterComponent extends React.FC {
  isNotLayout?: boolean;
}


type ExtraDev = { cv: File | null; idFront: File | null };
type ExtraInvestor = { cardNumber: string; cardName: string; cardExpiry: string; cardCvc: string };

const Register: RegisterComponent = () => {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<UserCategory | null>(null);
  const [emailForCode, setEmailForCode] = useState("");
  const [codeTimer, setCodeTimer] = useState(0);
  // Ekstra adım state'leri
  const [devExtra, setDevExtra] = useState<ExtraDev>({ cv: null, idFront: null });
  const [investorExtra, setInvestorExtra] = useState<ExtraInvestor>({ cardNumber: "", cardName: "", cardExpiry: "", cardCvc: "" });

  // Kategoriye göre toplam adım sayısı
  const getTotalSteps = () => {
    if (category === "developer" || category === "investor") return 6;
    if (category === "user") return 5;
    return 1; // sadece kategori seçimi
  };

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
          {/* 0. adım: Kategori seçimi */}
          {step === 0 && (
            <CategoryStep value={category} onChange={(cat) => setCategory(cat)} />
          )}
          {/* Kategori seçildiyse form adımlarını başlat */}
          {category && step > 0 && (
            <Formik
              initialValues={initialValues}
              validationSchema={stepSchemas[step - 1]}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={async (values, helpers) => {
                // Adım akışı: 1-4 ortak, 5-6 ekstra
                const totalSteps = getTotalSteps();
                // Ekstra adımlar
                if (
                  (category === "developer" && step === 5) ||
                  (category === "investor" && step === 5)
                ) {
                  setStep(step + 1);
                  return;
                }
                if (step < totalSteps - 1) {
                  if (step === 3) {
                    // Kod gönderme simülasyonu
                    handleSendCode(values.email);
                  }
                  setStep(step + 1);
                  return;
                }
                // Son adımda: API'ye gönder
                try {
                  const requestData = {
                    ...values,
                    category,
                    ...(category === 'developer' && devExtra.cv && devExtra.idFront ? {
                      devExtra: {
                        cv: devExtra.cv,
                        idFront: devExtra.idFront
                      }
                    } : {}),
                    ...(category === 'investor' ? { investorExtra } : {})
                  };

                  await authApi.register(requestData);
                  window.location.href = "/";
                } catch (err: any) {
                  helpers.setStatus(err?.message || "Bir hata oluştu");
                } finally {
                  helpers.setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, status, values, setFieldValue }) => {
                // Doğrulama kodu için 5 ayrı input state'i
                const [codeInputs, setCodeInputs] = React.useState(["", "", "", "", ""]);
                const codeRefs = Array.from({ length: 5 }, () => React.createRef<HTMLInputElement>());

                // Kod inputları değişince formik'e kodu string olarak yaz
                React.useEffect(() => {
                  setFieldValue("code", codeInputs.join(""));
                }, [codeInputs]);

                const handleCodeInput = (idx: number, val: string) => {
                  if (!/^[0-9]?$/.test(val)) return;
                  const arr = [...codeInputs];
                  arr[idx] = val;
                  setCodeInputs(arr);
                  if (val && idx < 4) {
                    codeRefs[idx + 1].current?.focus();
                  }
                  if (!val && idx > 0) {
                    codeRefs[idx - 1].current?.focus();
                  }
                };

                // Kod adımına gelince formik kodunu inputlara dağıt
                React.useEffect(() => {
                  if (step === 4 && values.code && values.code.length === 5) {
                    setCodeInputs(values.code.split(""));
                  }
                  if (step !== 4) {
                    setCodeInputs(["", "", "", "", ""]);
                  }
                }, [step]);

                return (
                  <Form className="space-y-4">
                    {/* 1. Adım: Ad Soyad, E-posta */}
                    {step === 1 && (
                      <>
                        <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left flex items-center gap-2">
                          Hoş Geldin <span className="text-2xl">👋</span>
                        </h1>
                        <p className="text-text text-base mb-4 text-center md:text-left">
                          Yeni bir dünyaya dalış yapmaya, fikir paylaşmaya, paylaştıkça büyümeye hazır mısın?
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
                    {/* 2. Adım: Şifre */}
                    {step === 2 && (
                      <>
                        <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                          Güçlü Bir Şifre Lazım!
                        </h1>
                        <p className="text-text text-base mb-4 text-center md:text-left">
                          Bu dünyada seni korumamız için bize güçlü bir şifre vermen lazım.
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
                    {/* 3. Adım: Telefon */}
                    {step === 3 && (
                      <>
                        <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                          Numaranı alabilir miyim?
                        </h1>
                        <p className="text-text text-base mb-4 text-center md:text-left">
                          Çift faktörlü doğrulama açmak ister misin? Telefon numaran yeterli?
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
                        <div className="flex gap-2 mt-2">
                          <button
                            type="button"
                            className="w-full border border-primary text-primary font-semibold rounded-lg py-2 transition hover:bg-primary/10 disabled:opacity-60"
                            onClick={() => setStep(4)}
                          >
                            Atla
                          </button>
                        </div>
                      </>
                    )}
                    {/* 4. Adım: Kod */}
                    {step === 4 && (
                      <>
                        <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                          Doğrulama Kodu
                        </h1>
                        <p className="text-text text-base mb-4 text-center md:text-left">
                          E-Posta adresine gelen doğrulama kodunu buraya girer misin?
                        </p>
                        <div className="flex gap-2 justify-center mb-2">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <input
                              key={i}
                              ref={codeRefs[i]}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              className="w-12 h-12 text-center text-2xl border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                              value={codeInputs[i]}
                              onChange={e => handleCodeInput(i, e.target.value.replace(/[^0-9]/g, ""))}
                              onFocus={e => e.target.select()}
                            />
                          ))}
                        </div>
                        <ErrorMessage name="code">
                          {(msg) => (
                            <div className="text-xs text-red-500 text-center mb-2">{msg}</div>
                          )}
                        </ErrorMessage>
                        <div className="flex gap-2 justify-center">
                          <button
                            type="button"
                            className="border border-primary text-primary rounded-lg px-4 py-2 text-sm disabled:opacity-60"
                            onClick={() => handleSendCode(values.email)}
                            disabled={codeTimer > 0}
                          >
                            {codeTimer > 0 ? `Tekrar Gönder (${codeTimer})` : "Tekrar Gönder"}
                          </button>
                          <button
                            type="submit"
                            className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold"
                            disabled={isSubmitting}
                          >
                            Sonraki Adım
                          </button>
                        </div>
                      </>
                    )}
                    {/* 5. Adım: Geliştirici veya Yatırımcı için ekstra */}
                    {category === "developer" && step === 5 && (
                      <>
                        <DevExtraStep
                          values={devExtra}
                          onFileChange={(field, file) => setDevExtra((prev) => ({ ...prev, [field]: file }))}
                        />
                        <button
                          type="button"
                          className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-4 transition hover:bg-primary/90 disabled:opacity-60"
                          onClick={() => {
                            const devExtraOut = {
                              cv: devExtra.cv ? devExtra.cv.name : undefined,
                              idFront: devExtra.idFront ? devExtra.idFront.name : undefined
                            };
                            alert(
                              JSON.stringify({
                                ...values,
                                category,
                                devExtra: devExtraOut,
                              }, null, 2)
                            );
                          }}
                        >
                          Kaydı Tamamla
                        </button>
                      </>
                    )}
                    {category === "investor" && step === 5 && (
                      <>
                        <InvestorExtraStep
                          values={investorExtra}
                          onChange={(field, value) => setInvestorExtra((prev) => ({ ...prev, [field]: value }))}
                        />
                        <button
                          type="button"
                          className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-4 transition hover:bg-primary/90 disabled:opacity-60"
                          onClick={() => {
                            alert(
                              JSON.stringify({
                                ...values,
                                category,
                                investorExtra,
                              }, null, 2)
                            );
                          }}
                        >
                          Kaydı Tamamla
                        </button>
                      </>
                    )}
                    {/* Son adımda tamamla butonu */}
                    {((category === "user" && step === 4) || (category !== "user" && step === 6)) ? (
                      <button
                        type="submit"
                        className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-2 transition hover:bg-primary/90 disabled:opacity-60"
                        disabled={isSubmitting}
                        onClick={e => {
                          e.preventDefault();
                          // Dosya adlarını ekle
                          const devExtraOut = devExtra ? {
                            cv: devExtra.cv ? devExtra.cv.name : undefined,
                            idFront: devExtra.idFront ? devExtra.idFront.name : undefined
                          } : undefined;
                          const investorExtraOut = investorExtra ? { ...investorExtra } : undefined;
                          alert(JSON.stringify({
                            ...values,
                            category,
                            ...(category === "developer" ? { devExtra: devExtraOut } : {}),
                            ...(category === "investor" ? { investorExtra: investorExtraOut } : {}),
                          }, null, 2));
                        }}
                      >
                        Kaydı Tamamla
                      </button>
                    ) : step > 0 && step < getTotalSteps() - 1 ? (
                      <button
                        type="submit"
                        className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-2 transition hover:bg-primary/90 disabled:opacity-60"
                        disabled={isSubmitting}
                      >
                        Sonraki Adım
                      </button>
                    ) : null}
                    {status && (
                      <div className="text-xs text-red-500 text-center">{status}</div>
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
                );
              }}
            </Formik>
          )}
          {/* Kategori seçilmeden diğer adımlara geçilemez */}
          {step === 0 && (
            <button
              type="button"
              className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-6 transition hover:bg-primary/90 disabled:opacity-60"
              disabled={!category}
              onClick={() => category && setStep(1)}
            >
              Devam Et
            </button>
          )}
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

Register.isNotLayout = true;
export default Register;
