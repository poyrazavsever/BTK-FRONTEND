import React from "react";
import Logo from "@/components/ui/logo";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunlu"),
  password: Yup.string()
    .min(8, "En az 8 karakter olmalı")
    .required("Şifre zorunlu"),
});

interface AuthPageComponent extends React.FC {
  isNotLayout: boolean;
}

const Login: AuthPageComponent = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sol: Form alanı */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left flex items-center gap-2">
            Tekrar Hoş Geldin <span className="text-2xl">👋</span>
          </h1>
          <p className="text-text text-base mb-6 text-center md:text-left">
            Bugün yeni bir gün, fikirleri görmek için heyecanlı mısın?
          </p>
          <Formik<LoginFormValues, { status?: string }>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (
              values,
              {
                setSubmitting,
                setStatus,
              }: FormikHelpers<LoginFormValues> & {
                setStatus: (status?: string) => void;
              }
            ) => {
              setStatus(undefined);
              try {
                // API isteği burada yapılacak
                // örn: await api.login(values)
                // Başarılı girişte yönlendirme veya state güncellemesi
                // window.location.href = "/";
              } catch (err: any) {
                setStatus(err?.message || "Bir hata oluştu");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, status }) => (
              <Form className="space-y-4">
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
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Şifre
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="En az 8 karakter"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <div className="text-xs text-red-500 mt-1">{msg}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="flex justify-end">
                  <a
                    href="/auth/forgot-password"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Şifremi Unuttum
                  </a>
                </div>
                {status && (
                  <div className="text-xs text-red-500 text-center">
                    {status}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-2 transition hover:bg-primary/90 disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-6 text-center text-sm text-text">
            Daha hesap oluşturmadın mı?{" "}
            <a
              href="/auth/register"
              className="text-primary font-medium hover:underline"
            >
              Hesap Oluştur.
            </a>
          </div>
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

Login.isNotLayout = true;
export default Login;
