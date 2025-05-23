import { FaInstagram } from "react-icons/fa6";

import { useEffect, useState } from "react";

function SpecialDay({ targetDate }) {
  // Fungsi untuk menghitung waktu yang tersisa
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  // State untuk menyimpan waktu yang tersisa
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Mengupdate waktu yang tersisa setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className=" h-72 w-full bg-secondary text-primary">
        <div className="flex flex-col justify-start items-center">
          <div className="flex pt-10 font-cal-sans text-6xl relative">
            <div className="flex gap-4">
              <h1 data-aos="fade-right" data-aos-delay="0" className="">
                A
              </h1>
              <h1 data-aos="fade-left" data-aos-delay="0">
                N
              </h1>
            </div>
            <div className="absolute left-3/6 top-0 mt-8 h-20 w-px bg-primary"></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex flex-col justify-center items-center text-center mt-6 font-cal-sans"
          >
            <h4 className="font-adelio-darmanto text-3xl text-accent pb-4 pt-6">
              Our Special Day
            </h4>
            <div className="flex gap-10 items-center text-accent ">
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center items-center font-raleway z-10"
              >
                <h1 className="text-xl font-semibold">{timeLeft.days}</h1>
                <p className="text-lg font-cal-sans">Hari</p>
              </div>
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center items-center font-raleway z-10"
              >
                <h1 className="text-xl font-semibold">{timeLeft.hours}</h1>
                <p className="text-lg font-cal-sans">Jam</p>
              </div>
              <div
                data-aos="fade-left"
                className="flex flex-col justify-center items-center font-raleway z-10"
              >
                <h1 className="text-xl font-semibold">{timeLeft.minutes}</h1>
                <p className="text-lg font-cal-sans">Menit</p>
              </div>
              <div
                data-aos="fade-left"
                className="flex flex-col justify-center items-center font-raleway z-10"
              >
                <h1 className="text-xl font-semibold">{timeLeft.seconds}</h1>
                <p className="text-lg font-cal-sans">Detik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialDay;
