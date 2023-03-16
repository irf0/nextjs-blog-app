// import "tailwindcss/tailwindcss";
import { Slide, ToastContainer } from "react-toastify";
import useDarkMode from "../components/DarkMode";
import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
