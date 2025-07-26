import React from "react";
import Logo from "@/components/ui/logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ForgotPasswordFormValues {
  email: string;
}

const initialValues: ForgotPasswordFormValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunlu"),
});

interface AuthPageComponent extends React.FC {
  isAuthPage?: boolean;
}

const ForgotPassword: AuthPageComponent = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sol: Form alanı */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
            Şifremi Unuttum
          </h1>
          <p className="text-text text-base mb-6 text-center md:text-left">
            Kayıtlı e-posta adresini gir, sana şifre sıfırlama bağlantısı
            gönderelim.
          </p>
          <Formik<ForgotPasswordFormValues, { status?: string }>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              setStatus(undefined);
              try {
                // await api.forgotPassword(values.email)
                setStatus(
                  "E-posta gönderildi! Lütfen gelen kutunu kontrol et."
                );
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
                {status && (
                  <div
                    className={`text-xs text-center ${
                      status.includes("gönderildi")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {status}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-2 transition hover:bg-primary/90 disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-6 text-left text-sm text-text">
            <a
              href="/auth/login"
              className="text-primary font-medium hover:underline"
            >
              Şifremi hatırladım, giriş yapmak istiyorum
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

ForgotPassword.isAuthPage = true;
export default ForgotPassword;
