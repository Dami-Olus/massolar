import "@/styles/globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ 
  weight: ['400', '700',],
  subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  );
}
