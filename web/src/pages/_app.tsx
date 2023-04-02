import "@/styles/globals.css";
import "antd/dist/reset.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { isLogined } from "@/utils/auth";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@/layout";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient();

  useEffect(() => {
    if (!isLogined()) {
      router.replace("/login");
    }
  }, [router]);

  if (router.route === "/login" || router.route === "/register") {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
