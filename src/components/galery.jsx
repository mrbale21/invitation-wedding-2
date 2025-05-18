import React, { useEffect, useState } from "react";

const images = [
  "gallery-1.jpeg",
  "gallery-2.jpeg",
  "gallery-3.jpeg",
  "gallery-4.jpeg",
  "gallery-5.jpeg",
  "gallery-6.jpeg",
  "gallery-7.jpeg",
  "gallery-8.jpeg",
];

const preloadImages = () => {
  images.forEach((img) => {
    const image = new Image();
    image.src = `/src/assets/image/${img}`;
  });
};

const Gallery = () => {
  const [indexes, setIndexes] = useState([0, 1, 2, 3, 4]); // Index aktif
  const [fadeStates, setFadeStates] = useState([true, true, true, true, true]); // Opacity

  useEffect(() => {
    preloadImages(); // Preload di awal

    let isMounted = true;

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const runCycle = async () => {
      while (isMounted) {
        for (let i = 0; i < 5; i++) {
          // Mulai fade-out
          setFadeStates((prev) => {
            const updated = [...prev];
            updated[i] = false;
            return updated;
          });

          await delay(800); // tunggu fade-out selesai (sesuai CSS)

          // Ganti gambar
          setIndexes((prev) => {
            const updated = [...prev];
            updated[i] = (prev[i] + 1) % images.length;
            return updated;
          });

          // Fade-in
          setFadeStates((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });

          // Tunggu sebelum pindah ke gambar berikutnya
          await delay(600);
        }

        // Tunggu sebentar sebelum siklus ulang
        await delay(1000);
      }
    };

    runCycle();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-primary grid place-items-center font-sacramento text-4xl font-semibold pt-8">
        Our gallery
      </h1>
      <div className="grid grid-cols-1 gap-4 pb-8">
        {/* Kolom Kiri */}
        <div>
          <img
            src={`/src/assets/image/${images[indexes[0]]}`}
            alt="Gallery 1"
            className={`w-full h-96 object-cover rounded-xl shadow-md transition-opacity duration-800 ${
              fadeStates[0] ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Kolom Kanan Baris 1 */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={`/src/assets/image/${images[indexes[1]]}`}
            alt="Gallery 2"
            className={`w-full h-64 object-cover rounded-xl shadow-md transition-opacity duration-800 ${
              fadeStates[1] ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={`/src/assets/image/${images[indexes[2]]}`}
            alt="Gallery 3"
            className={`w-full h-64 object-cover rounded-xl shadow-md transition-opacity duration-800 ${
              fadeStates[2] ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Kolom Kanan Baris 2 */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={`/src/assets/image/${images[indexes[3]]}`}
            alt="Gallery 4"
            className={`w-full h-64 object-cover rounded-xl shadow-md transition-opacity duration-800 ${
              fadeStates[3] ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={`/src/assets/image/${images[indexes[4]]}`}
            alt="Gallery 5"
            className={`w-full h-64 object-cover rounded-xl shadow-md transition-opacity duration-800 ${
              fadeStates[4] ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
