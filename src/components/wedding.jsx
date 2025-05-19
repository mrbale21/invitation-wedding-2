import { FaMapLocation } from "react-icons/fa6";

function Wedding() {
  return (
    <>
      <div className=" min-h-screen w-full pt-18 pb-8 bg-[url(assets/image/bg-wedding.webp)] bg-fixed bg-cover bg-no-repeat bg-center text-secondary">
        <div className="pt-2 px-6">
          <div className="min-w-full h-[820px] bg-accent shadow shadow-black border border-secondary rounded-t-full grid place-items-center pb-2">
            {/* respsei */}
            <div
              data-aos="zoom-out"
              data-aos-delay="300"
              className="flex flex-col justify-center items-center text-center pt-7"
            >
              <div className="flex flex-col justify-center items-center text-primary">
                <h1
                  data-aos="fade-right"
                  className="font-cal-sans text-2xl pr-18"
                >
                  SAVE
                </h1>
                <h2
                  data-aos="fade-left"
                  className="font-breathing text-2xl pl-4"
                >
                  The Date
                </h2>
              </div>
              <h1 className="font-sacramento text-3xl font-semibold text-primary pt-6">
                Resepsi Pernikahan
              </h1>

              <div className="flex justify-center items-center h-28 my-4">
                <h1 className="font-charm text-2xl font-semibold">JULI</h1>
                <div className="h-full w-0.5 bg-gray-400 mx-4" />
                <div className="flex flex-col px-4 gap-2">
                  <h2 className="font-charm text-xl font-semibold">Minggu</h2>
                  <h1 className="font-cal-sans font-bold text-5xl text-primary">
                    28
                  </h1>
                  <h5 className="font-cal-sans text-xs">09.000 WIB</h5>
                </div>
                <div className="h-full w-0.5 bg-gray-400 mx-4" />
                <h2 className="font-cal-sans text-2xl font-semibold">2025</h2>
              </div>
              <div className="font-cal-sans text-sm flex flex-col justify-center items-center">
                <h2>Alamat :</h2>
                <p>Kediaman Mempelai Pria</p>
                <p className="text-[10px]">
                  Kp. Hambalang RT 08/03, Desa Hambalang, Kec. Citeureup, Kab.
                  Bogor
                </p>
                <button className="flex justify-center items-center text-sm font-cal-sans p-1 px-2 bg-primary text-accent hover:border rounded-lg gap-2 w-32 mt-4">
                  <FaMapLocation /> <p>Open Map</p>
                </button>
              </div>
            </div>

            <div className="text-center w-1/2 h-0.5 bg-gray-400 " />

            <div
              data-aos="zoom-out"
              data-aos-delay="300"
              className="flex flex-col justify-center items-center text-center"
            >
              <h1 className="font-sacramento text-3xl font-semibold text-primary">
                Akad Nikah
              </h1>

              <div className="flex justify-center items-center h-28 my-4">
                <h1 className="font-charm text-2xl font-semibold">JULI</h1>
                <div className="h-full w-0.5 bg-gray-400 mx-4" />
                <div className="flex flex-col px-4 gap-2">
                  <h2 className="font-charm text-xl font-semibold">Minggu</h2>
                  <h1 className="font-cal-sans font-bold text-5xl text-primary">
                    28
                  </h1>
                  <h5 className="font-cal-sans text-xs">09.000 WIB</h5>
                </div>
                <div className="h-full w-0.5 bg-gray-400 mx-4" />
                <h2 className="font-cal-sans text-2xl font-semibold">2025</h2>
              </div>
              <div className="font-cal-sans text-sm flex flex-col justify-center items-center">
                <h2>Alamat :</h2>

                <p>Kediaman Mempelai Wanita</p>
                <p className="text-[10px]">
                  CR8V+W9J Cadas Ngampar, Kabupaten Bogor
                </p>
                <button className="flex justify-center items-center text-sm font-cal-sans p-1 px-2 bg-primary text-accent hover:border rounded-sm gap-2 w-32 mt-4">
                  <FaMapLocation /> <p>Open Map</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wedding;
