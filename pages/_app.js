import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "@/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <ToastContainer autoClose={750} />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
