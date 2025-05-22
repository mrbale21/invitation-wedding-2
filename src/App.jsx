import "./App.css";
import FirstPage from "./components/firsPage";
import Introduction from "./components/introduction";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const isUnsupported = () => {
      const userAgent = navigator.userAgent || navigator.vendor;

      // Deteksi WebView atau browser yang tidak mendukung
      const isWebView =
        /\bwv\b/.test(userAgent) || /FBAN|FBAV|Instagram/.test(userAgent);
      const isOldBrowser = !window.fetch || !window.Promise || !window.URL;

      return isWebView || isOldBrowser;
    };

    if (isUnsupported()) {
      // Redirect ke Google atau halaman warning
      window.location.href = "/unsupported.html"; // atau ganti ke https://google.com
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Introduction />} />
        <Route path="/open" element={<FirstPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
