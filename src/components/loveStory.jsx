import zigzag1 from "../assets/image/zigzag1.png";

const LoveStory = () => {
  return (
    <div className="p-4">
      <h1
        data-aos="zoom-in"
        className="text-primary grid place-items-center font-adelio-darmanto text-4xl font-semibold pt-8 pb-4"
      >
        Love Story
      </h1>

      <div className="bg-secondary relative h-[710px] overflow-hidden border-none rounded-xl">
        {/* Background */}
        <div className="relative bg-[url(assets/image/bg-story.webp)] h-[300px] bg-cover bg-top">
          <div className="absolute -inset-1 bg-gradient-to-b from-transparent to-secondary"></div>
        </div>

        {/* Zigzag and content container */}
        <div
          data-aos="fade-down"
          data-aos-delay="800"
          className="relative flex flex-col items-center pt-6  z-30"
        >
          {/* Zigzag Image */}
          <img
            src={zigzag1}
            alt="zigzag"
            className="h-[350px] object-contain z-10 animate-revealDown"
          />
        </div>
        {/* <img
            src={zigzag2}
            alt="Zigzag"
            className="h-[350px] object-contain z-10"
          /> */}
        <div className="text-center text-secondary">
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="absolute bottom-[250px] -left-2 w-1/2 font-akaya-kanadaka text-center"
          >
            <div className="bg-[url(assets/image/box-story.png)] bg-cover bg-no-repeat bg-center w-full h-35 p-7 sm:p-9 text-[8px] flex flex-col items-center justify-center">
              <h2 className="font-bold my-0.5 text-center text-xs text-primary">
                Awal Bertemu
              </h2>
              <p className="mb-1">
                Kami pertama kali bertemu di sebuah kafe kecil. Tanpa disangka,
                percakapan kecil saat itu menjadi awal dari cerita panjang yang
                indah.
              </p>
            </div>
          </div>

          {/* Konten kanan */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="absolute bottom-[130px] -right-1 w-1/2 text-center"
          >
            <div className="bg-[url(assets/image/box-story.png)] bg-cover bg-no-repeat bg-center h-35 w-full p-7 sm:p-9 ml-auto text-[8px] flex flex-col items-center justify-center">
              <h2 className="font-bold text-center text-[11px] my-0.5 text-primary">
                Perjalanan Bersama
              </h2>
              <p className="mb-2 text-[8px]">
                Dari jalan-jalan sore hingga merancang masa depan, semua momen
                terasa lebih berarti saat dilalui bersama.
              </p>
            </div>
          </div>

          {/* Konten kiri lagi */}
          <div
            data-aos="fade-left"
            data-aos-delay="800"
            className="absolute bottom-[20px] -left-2 w-1/2 text-center"
          >
            <div className="bg-[url(assets/image/box-story.png)] bg-cover bg-no-repeat bg-center w-full h-35 p-7 sm:p-9 ml-auto text-[8px] flex flex-col items-center justify-center">
              <h2 className="font-bold my-0.5 text-primary text-xs">
                Komitmen
              </h2>
              <p className="mb-2">
                Cinta kami tumbuh perlahan, tapi pasti. Kini, kami yakin untuk
                melangkah ke tahap selanjutnya bersama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
