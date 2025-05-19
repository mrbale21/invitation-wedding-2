import { FaInstagram } from "react-icons/fa6";

function Bride() {
  return (
    <>
      <div className="h-[950px] w-full max-w-md bg-accent">
        {/* Mempelai Pria */}
        <div className="grid place-items-center pt-6">
          <h2 className="font-sacramento font-semibold text-2xl text-primary">
            Assalamualaikum Wr. Wb
          </h2>
          <p className="text-xs max-w-prose text-primary z-10 text-center mt-2">
            Dengan memohon Rahmat dan Ridho Allah SWT yang telah <br />
            menciptakan makhluk-Nya secara berpasang-pasangan <br />
            Kami bermaksud menyelenggarakan pernikahan kami
          </p>
        </div>
        <div className="relative z-10 flex justify-center pt-6">
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <div
                data-aos="flip-left"
                className="bg-[url(assets/image/pria.jpg)] h-[220px] w-[160px] bg-cover bg-center flex justify-start items-end rounded-lg border-2 border-primary"
              >
                <h1 className="flex font-breathing text-accent text-xl p-1">
                  {["A", "H", "M", "A", "D"].map((char, index) => (
                    <span
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={index * 150}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
            <div className="pt-2 flex flex-col justify-center items-center">
              <h1
                data-aos="fade-left"
                className="font-poppins text-xl text-black font-semibold"
              >
                Ahmad Laelatulloh
              </h1>
              <p
                data-aos="fade-left"
                className="text-center text-black text-[12px]"
              >
                Putra kedua dari Bapak .... & <br />
                Ibu ...
              </p>
              <button
                data-aos="zoom-in"
                className="text-xs font-semibold p-1 px-2 text-center bg-primary hover:border hover:border-black text-accent rounded-sm flex items-center gap-1 mt-4"
              >
                <FaInstagram />
                <p>Instagram</p>
              </button>
            </div>
          </div>
        </div>

        {/* And */}
        <div
          data-aos="zoom-out"
          className="relative z-10 flex items-center justify-center text-center py-8"
        >
          <h1 className="font-cal-sans text-4xl text-primary font-semibold">
            &
          </h1>
        </div>

        {/* Mempelai wanita */}
        <div className="relative z-10 flex justify-center pl-6">
          <div className="flex flex-col items-center">
            <div className="flex gap-2">
              <div
                data-aos="flip-right"
                className="bg-[url(assets/image/wanita.jpg)] h-[220px] w-[160px] bg-cover bg-center flex justify-start items-end rounded-lg border-2 border-primary"
              >
                <h1 className="flex font-breathing text-accent text-xl p-1">
                  {["N", "A", "V", "I", "S", "A"].map((char, index) => (
                    <span
                      key={index}
                      data-aos="fade-right"
                      data-aos-delay={index * 150}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
            <div className="pt-2 flex flex-col justify-center items-center">
              <h1
                data-aos="fade-right"
                className="font-poppins text-xl text-black font-semibold"
              >
                Navisa
              </h1>
              <p
                data-aos="fade-right"
                className="text-center text-[12px] text-black"
              >
                Putri kedua dari Bapak Mustofa & <br />
                Ibu Suaebah
              </p>
              <button
                data-aos="zoom-in"
                className="text-xs font-semibold p-1 px-2 text-center bg-primary hover:border hover:border-black text-accent rounded-sm flex items-center gap-1 mt-4"
              >
                <FaInstagram />
                <p>Instagram</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bride;
