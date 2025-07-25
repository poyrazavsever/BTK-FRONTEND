import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: any }) {
  // Eğer sayfa componenti isAuthPage prop'una sahipse, Layout'u sarmadan döndür
  const isAuthPage = Component.isAuthPage;
  if (isAuthPage) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
