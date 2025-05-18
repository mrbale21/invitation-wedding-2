import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full text-accent flex flex-col items-center justify-start">
      {/* Bagian Atas - Gambar Mempelai */}
      <div className="relative w-full h-[520px] bg-[url(assets/image/bg-intro2.jpeg)] bg-center bg-no-repeat bg-cover flex items-end justify-center">
        <div className="absolute -inset-2 bg-gradient-to-b from-transparent to-secondary z-0" />
        <div className="relative z-10 text-center mb-10 px-4">
          <h3
            data-aos="fade-up"
            className="font-breathing text-2xl font-medium text-accent"
          >
            Ilham & Syarifah
          </h3>
          <h5
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xs font-raleway mt-2"
          >
            Merupakan suatu kebahagiaan dan kehormatan kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kami.
          </h5>
          <h4
            data-aos="fade-up"
            data-aos-delay="400"
            className="font-sacramento text-lg text-accent mt-3"
          >
            Wassalamualaikum Wr. Wb.
          </h4>
        </div>
      </div>

      {/* Bagian Bawah - Kontak & Credit */}
      <div className="border-none p-0 m-0 w-full max-w-md h-45 bg-secondary bg-cover bg-bottom flex flex-col items-center justify-start pt-8">
        <div className="bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-0" />
        <div className="z-10 text-center flex flex-col items-center gap-2">
          <h5 data-aos="fade-up" className="font-akaya-kanadaka text-[10px]">
            Design by Iqbaal_bel
          </h5>
          <div data-aos="fade-up" className="flex gap-3 text-lg z-10">
            <a
              href="https://wa.me/6285719894601"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/iqbaal_bel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
