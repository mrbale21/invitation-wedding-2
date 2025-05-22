import { useNavigate, useSearchParams } from "react-router-dom";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";
import { IoMdMailOpen } from "react-icons/io";

function Introduction() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("to");

  const handleOpenInvitation = () => {
    // Tunggu animasi selesai, lalu navigate
    setTimeout(() => {
      navigate("/open");
    }, 600); // harus sama/lebih dari durasi exit animation
  };

  return (
    <>
      <AnimatedPage>
        <div className="h-screen w-screen flex justify-center items-center bg-primary bg-contain text-accent">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col py-37 justify-between items-center h-full w-96 bg-[url(assets/image/bg-intro.webp)] bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-0" />
            <div className="z-10 py-2 flex flex-col justify-between items-center">
              <h1 className="font-cal-sans font-semibold">The Wedding Of</h1>
              <div>
                <h2 className="font-gavolinedemo text-4xl mt-1">
                  Ahmad & Navisa
                </h2>
              </div>
            </div>
            <div className="z-10 grid place-items-center font-cal-sans gap-2">
              <h4 className="text-sm">Dear,</h4>
              <h3 className="font-semibold mb-4 text-gray-400">
                {name ? name : "Tamu Undangan"}
              </h3>
              <button
                onClick={handleOpenInvitation}
                className="bg-accent text-black text-xs hover:bg-accent/80 p-1 px-2 rounded-md shadow shadow-accent border border-black flex gap-1 items-center"
              >
                <IoMdMailOpen />
                Buka Undangan
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Introduction;
