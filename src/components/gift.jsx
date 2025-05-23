import { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { RiFileCopyLine } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import mandiri from "../assets/image/mandiri.png";
import dana from "../assets/image/dana.png";

function Gift() {
  const [showGiftCard, setShowGiftCard] = useState(false);
  const [show1, setShow1] = useState(false);

  const toggleGiftCard = () => {
    setShowGiftCard(!showGiftCard);
    setTimeout(() => setShow1(true));
  };

  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const rekening = "133-00-1707665-4";
  const nodana = "081282424547";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekening).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset indikator setelah 2 detik
    });
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(nodana).then(() => {
      setCopied2(true);
      setTimeout(() => setCopied2(false), 2000); // Reset indikator setelah 2 detik
    });
  };

  return (
    <>
      <div className="p-4 py-10 bg-secondary hide-scrollbar w-full m-0 border-none">
        <div className="h-60 bg-accent flex flex-col justify-center items-center w-full text-center rounded-md shadow shadow-primary">
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
          <button
            data-aos="zoom-in"
            data-aos-delay="200"
            onClick={toggleGiftCard}
            className="py-2 px-5 bg-primary rounded-md font-cal-sans hover:border hover:border-primary text-white z-10"
          >
            <div className="flex items-center gap-1 text-sm ">
              <FaGift size={15} /> Klik Disini
            </div>
          </button>
        </div>
        {/* Card untuk Kirim Hadiah */}
        {showGiftCard && (
          <>
            {/* Gift Card Box */}

            <div
              className={`-mt-4 bg-accent w-full pb-8 pt-4 px-4 flex flex-col items-center gap-6 rounded-b-md shadow shadow-primary ${
                show1 ? "animate-revealDown" : "opacity-0"
              }`}
            >
              <div
                data-aos="fade-down"
                className="bg-accent border border-primary rounded-2xl shadow shadow-primary w-full"
              >
                <div className="flex justify-between text-secondary p-4 ">
                  <div className="grid justify-items-start py-6 pt-12">
                    {/* <h1 className="font-akaya-kanadaka font-semibold text-lg">
                    BCA
                  </h1> */}
                    <p className="font-raleway text-sm font-semibold text-primary">
                      {rekening}
                    </p>
                    <p className="font-cal-sans text-sm">
                      a/n Ahmad Laelatulloh
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <h1 className="font-akaya-kanadaka font-semibold text-lg text-primary">
                      <img src={mandiri} alt="mandiri" className="h-6" />
                    </h1>
                    {copied && (
                      <span className="text-blue-500 text-sm -mb-6">
                        Tersalin!
                      </span>
                    )}
                    <div
                      onClick={handleCopy}
                      className="flex items-center gap-1 bg-primary text-accent p-1 px-2 rounded-sm hover:bg-primary/90 cursor-pointer"
                    >
                      <RiFileCopyLine />

                      <h2 className="font-raleway font-bold text-xs">copy</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                className="bg-accent border border-primary rounded-2xl shadow shadow-primary w-full"
              >
                <div className="flex justify-between text-secondary p-4 ">
                  <div className="grid justify-items-start py-6 pt-12">
                    {/* <h1 className="font-akaya-kanadaka font-semibold text-lg">
                    BCA
                  </h1> */}
                    <p className="font-raleway text-sm font-semibold text-primary">
                      {nodana}
                    </p>
                    <p className="font-cal-sans text-sm">a/n Ahmad</p>
                  </div>
                  <div className="flex flex-col justify-between items-end ">
                    <h1 className="font-akaya-kanadaka font-semibold text-lg text-primary ">
                      <img src={dana} alt="dana" className="h-6" />
                    </h1>
                    {copied2 && (
                      <span className="text-blue-500 text-sm -mb-6">
                        Tersalin!
                      </span>
                    )}
                    <div
                      onClick={handleCopy2}
                      className="flex items-center gap-1 bg-primary text-accent p-1 px-2 rounded-sm hover:bg-primary/90 cursor-pointer"
                    >
                      <RiFileCopyLine />
                      <h2 className="font-raleway font-bold text-xs">copy</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                className="bg-accent border border-primary rounded-2xl shadow shadow-primary w-full"
              >
                <div className="flex flex-col justify-center items-center text-primary p-4">
                  <FaGift />
                  <h2 className="font-raleway font-semibold pt-1 pb-3">
                    Kirim Hadiah
                  </h2>
                  <p className="font-raleway text-xs font-semibold">
                    Nama Penerima : Ahmad Laelatulloh
                  </p>
                  <p className="font-raleway text-xs font-semibold">
                    No. Hp : 0812-8242-4547
                  </p>
                  <p className="font-raleway text-[10px] font-semibold text-secondary text-center">
                    Kp. Tonggoh RT 01/01, Desa Gunung Sari, <br /> Kec.
                    Citeureup, Kab. Bogor
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Gift;
