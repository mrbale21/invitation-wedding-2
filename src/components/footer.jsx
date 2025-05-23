import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import bgIntro from "../assets/image/bg-footer.webp";

function Footer() {
  return (
    <div className="w-full text-accent flex flex-col items-center justify-start">
      {/* Bagian Atas - Gambar Mempelai */}
      <div
        className="relative w-full h-[520px] bg-top bg-no-repeat bg-cover flex items-end justify-center"
        style={{
          backgroundImage: `url(${bgIntro})`,
          backgroundPosition: "center 50%",
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary z-0" />

        {/* Konten teks */}
        <div className="relative z-10 text-center mb-10 px-4">
          <h3
            data-aos="fade-up"
            className="font-breathing text-2xl font-medium text-accent"
          >
            Ahmad & Navisa
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
      <div className="w-full max-w-md h-[250px] bg-secondary flex flex-col items-center justify-start pt-8">
        <div className="text-center flex flex-col items-center gap-2 pt-10">
          <h5 data-aos="fade-up" className="font-akaya-kanadaka text-[10px]">
            Design by Iqbaal_bel
          </h5>
          <div data-aos="fade-up" className="flex gap-3 text-lg">
            {/* <a
              href="https://wa.me/6285719894601"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a> */}
            <a
              href="https://instagram.com/iqbaal_bel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all"
              aria-label="Instagram"
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
