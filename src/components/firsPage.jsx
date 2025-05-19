import { useEffect, lazy, Suspense } from "react";
import Marquee from "react-fast-marquee";
import Bride from "./bride";
import Arrum from "./arrum";
import Wedding from "./wedding";
import Footer from "./footer";
import BottomNavbar from "./bottomNavbar";
import MusicPlayer from "./musicPlayer";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";
import SpecialDay from "./specialDay";
import LoveStory from "./loveStory";
import bgfirst from "../assets/image/bg-first.webp";

// Lazy-load komponen berat
const Galery = lazy(() => import("./galery"));
const Gift = lazy(() => import("./gift"));
const WishPage = lazy(() => import("./wish/wishPage"));

function FirstPage() {
  const galerys = [
    { galery: "/assets/image/gallery-1.webp" },
    { galery: "/assets/image/gallery-2.webp" },
    { galery: "/assets/image/gallery-3.webp" },
    { galery: "/assets/image/gallery-4.webp" },
    { galery: "/assets/image/gallery-5.webp" },
    { galery: "/assets/image/gallery-6.webp" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <AnimatedPage>
      <div className="min-h-screen w-full overflow-hidden bg-primary text-accent border-none">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md min-h-screen mx-auto bg-accent bg-opacity-90 flex flex-col items-center"
        >
          {/* Gambar Header */}
          <div className="relative w-full h-[480px] overflow-hidden flex items-end justify-center">
            <img
              src={bgfirst}
              alt="Background"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              className="absolute inset-0 w-full h-full object-cover object-center"
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
                className="font-breathing text-2xl font-medium text-accent"
              >
                Ahmad & Navisa
              </h3>
              <h5 data-aos="fade-up" className="text-sm font-raleway">
                14.06.2025
              </h5>
            </div>
          </div>

          {/* Galeri Marquee */}
          <div className="hide-scrollbar w-full bg-secondary border-none py-1">
            <Marquee speed={25} pauseOnHover gradient={false}>
              <div className="flex gap-2 px-2">
                {galerys.map((data, index) => (
                  <div
                    key={index}
                    className="h-28 w-28 flex-shrink-0 rounded overflow-hidden"
                  >
                    <img
                      src={data.galery}
                      alt={`gallery-${index}`}
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
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

          <div id="lovestory" className="w-full">
            <LoveStory />
          </div>

          <div id="wedding" className="w-full">
            <Wedding />
          </div>

          {/* Lazy Components */}
          <div id="galery" className="w-full">
            <Suspense
              fallback={
                <div className="text-center py-4">Memuat galeri...</div>
              }
            >
              <Galery />
            </Suspense>
          </div>

          <div id="gift" className="w-full">
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
        </motion.div>

        <BottomNavbar onNavigate={scrollToSection} />
        {/* <MusicPlayer /> */}
      </div>
    </AnimatedPage>
  );
}

export default FirstPage;
