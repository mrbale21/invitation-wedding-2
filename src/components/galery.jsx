import React, { useEffect, useState } from "react";

const images = [
  "gallery-1.webp",
  "gallery-2.webp",
  "gallery-3.webp",
  "gallery-4.webp",
  "gallery-5.webp",
  "gallery-6.webp",
  "gallery-7.webp",
  "gallery-8.webp",
];

const Gallery = () => {
  // 5 gambar aktif (index gambar di array images)
  const [indexes, setIndexes] = useState([0, 1, 2, 3, 4]);
  // status fade true = visible, false = transparan
  const [fadeStates, setFadeStates] = useState([true, true, true, true, true]);

  // Cari index random yang beda dari excludeIndex
  const getRandomIndex = (excludeIndex) => {
    let rand;
    do {
      rand = Math.floor(Math.random() * images.length);
    } while (rand === excludeIndex);
    return rand;
  };

  useEffect(() => {
    let isMounted = true;

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const runCycle = async () => {
      while (isMounted) {
        for (let i = 0; i < 5; i++) {
          // fade out gambar ke-i
          setFadeStates((prev) => {
            const updated = [...prev];
            updated[i] = false;
            return updated;
          });

          await delay(700); // sesuai durasi transition-opacity di CSS

          // update index gambar ke-i
          setIndexes((prev) => {
            const updated = [...prev];
            updated[i] = getRandomIndex(prev[i]);
            return updated;
          });

          // fade in gambar ke-i
          setFadeStates((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });

          await delay(600); // jeda antar perubahan gambar
        }

        await delay(1000); // jeda siklus ulang
      }
    };

    runCycle();

    return () => {
      isMounted = false;
    };
  }, []);

  // Fungsi render image biar tidak duplikat kode
  const renderImage = (index, alt, className, fade) => (
    <img
      src={`assets/image/${images[index]}`}
      alt={alt}
      loading="lazy"
      className={`${className} transition-opacity duration-700 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      draggable={false}
    />
  );

  return (
    <div className="p-4 space-y-6 max-w-screen-md mx-auto">
      <h1
        data-aos="zoom-in"
        className="text-primary grid place-items-center font-sacramento text-4xl font-semibold pt-8"
      >
        Our gallery
      </h1>

      <div className="grid grid-cols-1 gap-4 pb-8">
        {/* Kolom Kiri */}
        <div>
          {renderImage(
            indexes[0],
            "Gallery Image 1",
            "w-full h-96 object-cover rounded-xl shadow-md",
            fadeStates[0]
          )}
        </div>

        {/* Kolom Kanan Baris 1 */}
        <div className="grid grid-cols-2 gap-4">
          {renderImage(
            indexes[1],
            "Gallery Image 2",
            "w-full h-64 object-cover rounded-xl shadow-md",
            fadeStates[1]
          )}
          {renderImage(
            indexes[2],
            "Gallery Image 3",
            "w-full h-64 object-cover rounded-xl shadow-md",
            fadeStates[2]
          )}
        </div>

        {/* Kolom Kanan Baris 2 */}
        <div className="grid grid-cols-2 gap-4">
          {renderImage(
            indexes[3],
            "Gallery Image 4",
            "w-full h-64 object-cover rounded-xl shadow-md",
            fadeStates[3]
          )}
          {renderImage(
            indexes[4],
            "Gallery Image 5",
            "w-full h-64 object-cover rounded-xl shadow-md",
            fadeStates[4]
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
