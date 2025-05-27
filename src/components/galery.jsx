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
  "gallery-9.webp",
  "gallery-10.webp",
  "gallery-11.webp",
  "gallery-12.webp",
  "gallery-13.webp",
  "gallery-14.webp",
  "gallery-15.webp",
];

const Gallery = () => {
  const [indexes, setIndexes] = useState([0, 1, 2, 3, 4]);
  const [fadeStates, setFadeStates] = useState([true, true, true, true, true]);

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          setFadeStates((prev) => {
            const updated = [...prev];
            updated[i] = false;
            return updated;
          });

          await delay(700);

          setIndexes((prev) => {
            const updated = [...prev];
            updated[i] = getRandomIndex(prev[i]);
            return updated;
          });

          setFadeStates((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });

          await delay(600);
        }
        await delay(1000);
      }
    };

    runCycle();
    return () => {
      isMounted = false;
    };
  }, []);

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

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-4 space-y-6 max-w-screen-md mx-auto">
      <h1
        data-aos="zoom-in"
        className="text-primary grid place-items-center font-sacramento text-4xl font-semibold pt-8"
      >
        Our gallery
      </h1>

      <div className="grid grid-cols-1 gap-4 pb-8">
        {/* Gambar Besar (klik untuk buka modal) */}
        <div
          onClick={() => {
            setShowModal(true);
            setCurrentIndex(indexes[0]);
          }}
          className="cursor-pointer"
        >
          {renderImage(
            indexes[0],
            "Gallery Image 1",
            "w-full h-96 object-cover rounded-xl shadow-md",
            fadeStates[0]
          )}
        </div>

        {/* Gambar Kanan Baris 1 */}
        <div
          onClick={() => {
            setShowModal(true);
            setCurrentIndex(indexes[0]);
          }}
          className="grid grid-cols-2 gap-4 cursor-pointer"
        >
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

        {/* Gambar Kanan Baris 2 */}
        <div
          onClick={() => {
            setShowModal(true);
            setCurrentIndex(indexes[0]);
          }}
          className="grid grid-cols-2 gap-4 cursor-pointer"
        >
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

      {/* Modal Viewer */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setShowModal(false)} // klik di luar menutup
        >
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // klik gambar tidak menutup
          >
            {/* Tombol Tutup */}
            <button
              className="absolute top-0 right-8 text-white/80 text-4xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {/* Tombol Kiri */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white/80 text-5xl font-bold bg-black/10 bg-opacity-50 rounded-full p-2"
            >
              ‹
            </button>

            {/* Gambar Aktif */}
            <img
              src={`assets/image/${images[currentIndex]}`}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-w-[90%] max-h-[80%] object-contain rounded-xl shadow-xl"
            />

            {/* Tombol Kanan */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white/80 text-5xl font-bold bg-black/10 bg-opacity-50 rounded-full p-2"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
