import { useEffect, useState, lazy, Suspense } from "react";
import Bride from "./bride";
import Arrum from "./arrum";
import Wedding from "./wedding";
import Footer from "./footer";
import BottomNavbar from "./bottomNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";
import SpecialDay from "./specialDay";
import LoveStory from "./loveStory";
import bg1 from "../assets/image/bg-first.webp";
import bg2 from "../assets/image/bg-first-1.webp";
import bg3 from "../assets/image/bg-first-2.webp";
import bg4 from "../assets/image/bg-first-3.webp";
import bg5 from "../assets/image/bg-intro1.webp";
import bg6 from "../assets/image/bg-footer.webp";
import MusicPlayer from "./musicPlayer";

// Lazy-load komponen berat
const Galery = lazy(() => import("./galery"));
const Gift = lazy(() => import("./gift"));
const WishPage = lazy(() => import("./wish/wishPage"));

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6];

function FirstPage() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000); // ganti gambar tiap 5 detik

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen w-full overflow-hidden bg-[url(assets/image/bg.png)] bg-contain text-accent">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md min-h-screen mx-auto bg-accent bg-opacity-90 flex flex-col items-center"
        >
          {/* Gambar Header dengan Carousel */}
          <div className="relative w-full h-[480px] overflow-hidden flex items-end justify-center">
            <img
              src={bgImages[currentBg]}
              alt="Background"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary z-10" />
            <div className="relative z-20 text-center mb-10 px-4">
              <h1
                data-aos="fade-up"
                className="text-xl font-cal-sans text-accent"
              >
                The Wedding Of
              </h1>
              <h3
                data-aos="fade-up"
                className="font-breathing text-2xl font-semibold text-primary"
              >
                Ahmad & Navisa
              </h3>
              <h5 data-aos="fade-up" className="text-sm font-raleway">
                05.07.2025
              </h5>
            </div>
          </div>

          {/* Sections */}
          <div className="w-full">
            <SpecialDay targetDate="2025-06-15T00:00:00" />
          </div>

          <div id="bride" className="w-full">
            <Bride />
          </div>

          <div className="w-full">
            <Arrum />
          </div>

          <div id="story" className="w-full">
            <LoveStory />
          </div>

          <div id="wedding" className="w-full">
            <Wedding />
          </div>

          {/* Lazy Components */}
          <div id="gallery" className="w-full">
            <Suspense
              fallback={
                <div className="text-center py-4">Memuat galeri...</div>
              }
            >
              <Galery />
            </Suspense>
          </div>

          <div className="w-full">
            <Suspense
              fallback={<div className="text-center py-4">Memuat gift...</div>}
            >
              <Gift />
            </Suspense>
          </div>

          <div id="wish" className="w-full">
            <Suspense
              fallback={
                <div className="text-center py-4">Memuat ucapan...</div>
              }
            >
              <WishPage />
            </Suspense>
          </div>

          <div className="w-full">
            <Footer />
          </div>

          <MusicPlayer />
        </motion.div>

        <BottomNavbar onNavigate={scrollToSection} />
      </div>
    </AnimatedPage>
  );
}

export default FirstPage;
