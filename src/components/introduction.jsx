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
        <div className="h-screen w-screen flex justify-center items-center bg-primary bg-contain text-accent/90">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col pb-30 gap-10 justify-end items-center h-full w-96 bg-[url(assets/image/bg-intro1.webp)] bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-0" />
            <div className="z-10 py-2 flex flex-col justify-between items-center">
              <h1 className="font-cal-sans font-semibold">The Wedding Of</h1>
              <div>
                <h2 className="font-sacramento font-semibold text-accent/80 text-4xl mt-1">
                  Ahmad & Navisa
                </h2>
              </div>
            </div>
            <div className="z-10 grid place-items-center font-cal-sans gap-2">
              <h4 className="text-sm">Dear,</h4>
              <h3 className=" font-raleway mb-4 text-neutral text-md font-semibold">
                {name ? name : "Muhamad Ikbal"}
              </h3>
              <p className="font-akaya-kanadaka text-center text-xs pt-10">
                Mohon maaf apabila ada kesalahan penulisan nama/gelar
              </p>
              <button
                onClick={handleOpenInvitation}
                className="mt-10 bg-transparent text-accent text-xs hover:bg-accent/20 p-1 px-2 rounded-md shadow shadow-accent border border-black flex gap-1 items-center"
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
