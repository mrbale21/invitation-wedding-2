import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import mandiri from "../assets/image/mandiri.png";

function Gift() {
  const [copied, setCopied] = useState(false);
  const rekening = "133-00-1707665-4";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekening).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset indikator setelah 2 detik
    });
  };

  return (
    <>
      <div className="p-4 py-10 bg-secondary hide-scrollbar w-full m-0 border-none">
        <div className="h-max-w-md py-10 bg-accent flex flex-col justify-center items-center w-full text-center rounded-md shadow shadow-primary">
          {/* --- Section Gift --- */}
          <div
            data-aos="zoom-in"
            className="text-3xl font-bold font-sacramento text-primary"
          >
            Wedding Gift
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="font-cal-sans text-[11px] pb-6 pt-3 text-secondary px-6"
          >
            Doa restu keluarga, sahabat, serta rekan-rekan semua di pernikahan
            kami sudah sangat cukup sebagai hadiah, namun jika memberi merupakan
            tanda kasih, kami dengan senang hati menerimanya dan tentunya
            semakin melengkapi kebahagiaan kami.
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-accent border border-primary rounded-2xl shadow shadow-primary w-4/5"
          >
            <div className="flex flex-col justify-center items-center gap-2 text-secondary p-4 ">
              <h1 className="font-akaya-kanadaka font-semibold text-lg text-primary">
                <img src={mandiri} alt="mandiri" className="h-6" />
              </h1>

              <div
                data-aos="zoom-out"
                className="text-center w-1/2 h-0.5 bg-gray-400 "
              />
              <div>
                <p className="font-cal-sans text-xs">a/n Ahmad Laelatulloh</p>

                <p className="font-raleway text-sm font-semibold text-primary">
                  {rekening}
                </p>
              </div>
              <div className="flex flex-col justify-between items-end"></div>
              {copied && (
                <span className="text-blue-500 text-[10px]">Tersalin!</span>
              )}
              <div
                onClick={handleCopy}
                className="flex items-center gap-1 bg-primary text-accent p-1 px-2 rounded-sm hover:bg-primary/90 cursor-pointer"
              >
                <h2 className="font-raleway font-bold text-[8px]">
                  Copy No. Rekening
                </h2>
                <RiFileCopyLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gift;
