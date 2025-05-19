import { BsCalendar2 } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Arrum() {
  return (
    <div className="grid place-items-center place-content-start h-72 w-full max-w-md bg-secondary">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="bg-[url(assets/image/bunga.png)] bg-cover bg-center w-23 h-23 my-6"
      ></div>
      <p
        data-aos="fade-up"
        className="text-[11px] font-charm px-4 text-center text-white z-10"
      >
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir"
        <br />
        <br />
        <br />
        <span className="font-bold text-sm">(QS. Ar-Rum: 21)</span>
      </p>
    </div>
  );
}

export default Arrum;
