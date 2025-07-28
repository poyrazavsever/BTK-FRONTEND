
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import PanelLayout from "@/components/layout/panelLayout";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: any }) {
  const router = useRouter();
  const isNotLayout = Component.isNotLayout;

  // Eğer sayfa componenti isAuthPage prop'una sahipse, Layout'u sarmadan döndür
  if (isNotLayout) {
    return <Component {...pageProps} />;
  }

  // /panel ve /panel/... rotaları için özel layout
  if (router.pathname.startsWith("/panel")) {
    return (
      <PanelLayout>
        <Component {...pageProps} />
      </PanelLayout>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
