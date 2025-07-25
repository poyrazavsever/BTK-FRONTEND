import React from "react";

import Logo from "@/components/ui/logo";

const Login = () => {
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
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                E-Posta
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Şifre
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                placeholder="En az 8 karakter"
              />
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-primary text-sm font-medium hover:underline"
              >
                Şifremi Unuttum
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold rounded-lg py-2 mt-2 transition hover:bg-primary/90"
            >
              Giriş Yap
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-text">
            Daha hesap oluşturmadın mı?{" "}
            <a
              href="/register"
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

Login.isAuthPage = true;
export default Login;
