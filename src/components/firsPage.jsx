import { useEffect } from "react";
import galery1 from "../assets/image/gallery-1.jpeg";
import galery2 from "../assets/image/gallery-2.jpeg";
import galery3 from "../assets/image/gallery-3.jpeg";
import galery4 from "../assets/image/gallery-4.jpeg";
import galery5 from "../assets/image/gallery-5.jpeg";
import galery6 from "../assets/image/gallery-6.jpeg";
import Marquee from "react-fast-marquee";
import Bride from "./bride";
import Arrum from "./arrum";
import Wedding from "./wedding";
import Gift from "./gift";
import Footer from "./footer";
import BottomNavbar from "./bottomNavbar";
import MusicPlayer from "./musicPlayer";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";
import SpecialDay from "./specialDay";
import Galery from "./galery";
import LoveStory from "./loveStory";
import WishPage from "./wish/wishPage";

function FirstPage() {
  const galerys = [
    { galery: galery1 },
    { galery: galery2 },
    { galery: galery3 },
    { galery: galery4 },
    { galery: galery5 },
    { galery: galery6 },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <AnimatedPage>
      <div className="min-h-screen w-full overflow-hidden bg-primary bg-fit text-accent border-none">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md min-h-screen mx-auto bg-accent bg-opacity-80 flex flex-col items-center"
        >
          {/* Header Image with Overlay */}
          <div className="relative w-full h-[520px] bg-[url(assets/image/bg-intro2.jpeg)] bg-center bg-no-repeat bg-cover flex items-end justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary z-0" />
            <div className="relative z-10 text-center mb-10 px-4">
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
          <div className="hide-scrollbar w-full bg-secondary m-0 p-0 border-none">
            <Marquee speed={20} pauseOnHover gradient={false}>
              <div className="flex gap-2">
                {galerys.map((data, index) => (
                  <div key={index} className="h-35 w-30 flex-shrink-0">
                    <img
                      src={data.galery}
                      alt={`gallery-${index}`}
                      className="h-full w-full object-cover rounded"
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

          <div id="galery" className="w-full">
            <Galery />
          </div>

          <div id="gift" className="w-full">
            <Gift />
          </div>

          <div id="wish" className="w-full">
            <WishPage />
          </div>

          <div className="w-full">
            <Footer />
          </div>
        </motion.div>

        <BottomNavbar onNavigate={scrollToSection} />
        <MusicPlayer />
      </div>
    </AnimatedPage>
  );
}

export default FirstPage;
