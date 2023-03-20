import Header from "components/Header.js/Header";
import "/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
