import zigzag1 from "../assets/image/zigzag1.png";
import zigzag2 from "../assets/image/zigzag2.png";

const LoveStory = () => {
  return (
    <div className="p-4">
      <h1 className="text-primary grid place-items-center font-adelio-darmanto text-4xl font-semibold pt-8 pb-4">
        Love Story
      </h1>

      <div className="bg-secondary relative h-[775px] overflow-hidden border-none rounded-xl">
        {/* Background */}
        <div className="relative bg-[url(assets/image/bg-story.webp)] h-[300px] bg-cover bg-top">
          <div className="absolute -inset-1 bg-gradient-to-b from-transparent to-secondary"></div>
        </div>

        {/* Zigzag and content container */}
        <div className="relative flex flex-col items-center pt-6">
          {/* Zigzag Image */}
          <img
            src={zigzag1}
            alt="zigzag"
            className="h-[400px] object-contain z-10"
          />
          <img
            src={zigzag2}
            alt="Zigzag"
            className="h-[400px] object-contain z-10"
          />
          <div className="text-center text-secondary">
            <div className="absolute top-[40px] -left-3 w-1/2 px-1 font-akaya-kanadaka text-center">
              <div className="bg-[url(assets/image/box-story.png)] bg-cover bg-no-repeat bg-center w-full p-7 sm:p-9 text-[8px] ">
                <h2 className="font-bold my-1 text-center text-sm">
                  Awal Bertemu
                </h2>
                <p className="mb-1">
                  Kami pertama kali bertemu di sebuah acara kampus. Tanpa
                  disangka, percakapan kecil saat itu menjadi awal dari cerita
                  panjang yang indah.
                </p>
              </div>
            </div>

            {/* Konten kanan */}
            <div className="absolute top-[160px] -right-3 w-1/2 px-1 text-center">
              <div className="bg-[url(assets/image/box-story.png)] bg-cover bg-no-repeat bg-center w-full p-7 sm:p-9 max-w-sm ml-auto text-[9px] ">
                <h2 className="font-bold text-center text-xs my-1">
                  Perjalanan Bersama
                </h2>
                <p className="mb-2">
                  Dari jalan-jalan sore hingga merancang masa depan, semua momen
                  terasa lebih berarti saat dilalui bersama.
                </p>
              </div>
            </div>

            {/* Konten kiri lagi */}
            <div className="absolute top-[300px] -left-3 w-1/2 px-1 text-center">
              <div className="bg-[url(assets/image/box-story.png)] bg-cover bg-no-repeat bg-center w-full p-7 sm:p-9 max-w-sm ml-auto text-[9px]">
                <h2 className="text-sm font-bold my-1">Komitmen</h2>
                <p className="mb-2">
                  Cinta kami tumbuh perlahan, tapi pasti. Kini, kami yakin untuk
                  melangkah ke tahap selanjutnya bersama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
