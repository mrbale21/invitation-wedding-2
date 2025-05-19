import { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { RiFileCopyLine } from "react-icons/ri";
import { FaGift } from "react-icons/fa";

function Gift() {
  const [showGiftCard, setShowGiftCard] = useState(false);

  const toggleGiftCard = () => {
    setShowGiftCard(!showGiftCard);
  };

  return (
    <>
      <div className="p-4 py-10 bg-secondary hide-scrollbar w-full m-0 border-none">
        <div className="py-10 bg-accent flex flex-col justify-center items-center w-full text-center rounded-md shadow shadow-primary">
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
            className="font-cal-sans text-[12px] pb-6 pt-3 text-secondary px-6"
          >
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado secara cashless
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
          {/* Card untuk Kirim Hadiah */}
          {showGiftCard && (
            <>
              {/* Gift Card Box */}

              <div className="bg-accent w-full pt-8 px-10 max-w-sm flex flex-col items-center gap-6">
                <div className="bg-accent border border-primary rounded-2xl shadow shadow-primary w-full">
                  <div className="flex justify-between text-secondary p-4 gap-10">
                    <div className="grid justify-items-start py-6 pt-12">
                      {/* <h1 className="font-akaya-kanadaka font-semibold text-lg">
                    BCA
                  </h1> */}
                      <p className="font-raleway text-sm font-semibold text-primary">
                        1205 0234 65721
                      </p>
                      <p className="font-cal-sans text-sm">a/n Mr Bale</p>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <h1 className="font-akaya-kanadaka font-semibold text-lg text-primary">
                        BCA
                      </h1>
                      <div className="flex items-center gap-1 bg-primary text-accent p-1 px-2 rounded-sm">
                        <RiFileCopyLine />
                        <h2 className="font-raleway font-bold text-xs">copy</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent border border-primary rounded-2xl shadow shadow-primary w-full">
                  <div className="flex justify-between text-secondary p-4 gap-10">
                    <div className="grid justify-items-start py-6 pt-12">
                      {/* <h1 className="font-akaya-kanadaka font-semibold text-lg">
                    BCA
                  </h1> */}
                      <p className="font-raleway text-sm font-semibold text-primary">
                        085719894601
                      </p>
                      <p className="font-cal-sans text-sm">a/n Mr Bale</p>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <h1 className="font-akaya-kanadaka font-semibold text-lg text-primary">
                        Dana
                      </h1>
                      <div className="flex items-center gap-1 bg-primary text-accent p-1 px-2 rounded-sm">
                        <RiFileCopyLine />
                        <h2 className="font-raleway font-bold text-xs">copy</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent border border-primary rounded-2xl shadow shadow-primary w-full">
                  <div className="flex flex-col justify-center items-center text-primary p-4">
                    <FaGift />
                    <h2 className="font-raleway font-semibold pt-1 pb-3">
                      Kirim Hadiah
                    </h2>
                    <p className="font-raleway text-xs font-semibold">
                      Nama Penerima : M Ikbal
                    </p>
                    <p className="font-raleway text-xs font-semibold">
                      No. Hp : 085719894601
                    </p>
                    <p className="font-raleway text-[10px] font-semibold text-secondary">
                      Ds Hambalang, Kec. Citeureup, Kab. Bogor
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Gift;
