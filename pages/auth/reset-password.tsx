import React from "react";
import Logo from "@/components/ui/logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { authService } from "@/services/auth";

interface ResetPasswordFormValues {
  newPassword: string;
  newPasswordConfirm: string;
}

const initialValues: ResetPasswordFormValues = {
  newPassword: "",
  newPasswordConfirm: "",
};

const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(8, "En az 8 karakter olmalı")
    .required("Yeni şifre zorunlu"),
  newPasswordConfirm: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Şifreler eşleşmiyor")
    .required("Yeni şifre tekrarı zorunlu"),
});

interface AuthPageComponent extends React.FC {
  isNotLayout?: boolean;
}

const ResetPassword: AuthPageComponent = () => {
  const router = useRouter();
  const { token } = router.query;

  React.useEffect(() => {
    if (!token && router.isReady) {
      router.replace('/auth/login');
    }
  }, [token, router.isReady]);

  if (!token || !router.isReady) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sol: Form alanı */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-header font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
            Şifreyi Sıfırla
          </h1>
          <p className="text-text text-base mb-6 text-center md:text-left">
            Yeni şifreni belirlemek için aşağıdaki formu doldur.
          </p>
          <Formik<ResetPasswordFormValues, { status?: string }>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              setStatus(undefined);
              try {
                await authService.resetPassword(token as string, values.newPassword);
                setStatus("Şifre başarıyla güncellendi!");
                // Başarılı durumda 2 saniye sonra login sayfasına yönlendir
                setTimeout(() => {
                  router.push('/auth/login');
                }, 2000);
              } catch (err: any) {
                setStatus(err?.response?.data?.message || err?.message || "Şifre güncellenirken bir hata oluştu");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, status }) => (
              <Form className="space-y-4">
                {/* Mevcut şifre alanı kaldırıldı */}
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Yeni Şifre
                  </label>
                  <Field
                    name="newPassword"
                    type="password"
                    placeholder="************"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                  />
                  <ErrorMessage name="newPassword">
                    {(msg) => (
                      <div className="text-xs text-red-500 mt-1">{msg}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Yeni Şifre (Tekrar)
                  </label>
                  <Field
                    name="newPasswordConfirm"
                    type="password"
                    placeholder="************"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                  />
                  <ErrorMessage name="newPasswordConfirm">
                    {(msg) => (
                      <div className="text-xs text-red-500 mt-1">{msg}</div>
                    )}
                  </ErrorMessage>
                </div>
                {status && (
                  <div
                    className={`text-xs text-center ${
                      status.includes("başarı")
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
                  {isSubmitting ? "Kaydediliyor..." : "Şifreyi Güncelle"}
                </button>
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

ResetPassword.isNotLayout = true;
export default ResetPassword;
