import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import AttendanceModal from "./modal";
import WishForm from "./wishForm";
import WishList from "./wishList";
import MessagePopup from "./message";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const WishPage = () => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [wishesList, setWishesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchWishes();
  }, []);

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const fetchWishes = async () => {
    try {
      const wishesCollection = collection(db, "wishes2");
      const snapshot = await getDocs(wishesCollection);
      const wishes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishesList(wishes);
    } catch (error) {
      console.error("Error fetching wishes: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!name || !wish) {
      setMessage({ text: "Semua kolom wajib diisi!", type: "error" });
      return;
    }

    const newWish = {
      name,
      wish,
      attendance,
      date: Timestamp.now(),
    };

    setLoading(true);
    try {
      await addDoc(collection(db, "wishes2"), newWish);
      setMessage({ text: "Ucapan berhasil dikirim!", type: "success" });
      setName("");
      setWish("");
      setAttendance("");
      fetchWishes();
    } catch (error) {
      console.error("Error adding wish: ", error);
      setMessage({ text: "Gagal mengirim ucapan!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (value) => {
    setAttendance(value);
    setShowModal(false);
  };

  const sortedWishes = [...wishesList].sort(
    (a, b) => b.date.toDate() - a.date.toDate()
  );

  const totalPages = Math.ceil(sortedWishes.length / itemsPerPage);
  const currentWishes = sortedWishes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className=" w-full min-h-full flex flex-col justify-center items-center pt-6 text-accent pb-8 bg-secondary border-none hide-scrollbar">
      <MessagePopup message={message} />
      <div className="max-w-full w-[370px] bg-accent mt-2 rounded-lg shadow-lg shadow-primary">
        <div className="flex flex-col items-center text-primary">
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="font-sacramento text-4xl pt-6 font-semibold"
          >
            Doa & Ucapan
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="font-cal-sans capitalize text-sm"
          >
            Kirimkan ucapan dan doa restu kami
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="p-4">
          <div className="max-w-sm w-full min-h-[800px] bg-primary text-accent border border-accent rounded-md flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center py-3 font-semibold">
              <h3>{wishesList.length} Comments</h3>
              <hr className="border w-84 mt-4" />
            </div>

            <WishForm
              name={name}
              setName={setName}
              wish={wish}
              setWish={setWish}
              attendance={attendance}
              setShowModal={setShowModal}
              handleSubmit={handleSubmit}
              loading={loading}
            />

            {showModal && (
              <AttendanceModal
                setShowModal={setShowModal}
                handleSelect={handleSelect}
              />
            )}

            <div className="w-full flex flex-col flex-grow relative mt-4 ml-2">
              <WishList currentWishes={currentWishes} />

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-4 py-3 mr-8 mt-auto">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className={`${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="flex items-center text-accent text-[10px] hover:border-b">
                    <IoMdArrowDropleft size={15} className="text-white" />
                    <span>Previous</span>
                  </div>
                </button>

                <span className="text-white text-sm">
                  {currentPage} / {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div className="flex items-center text-accent text-[10px] hover:border-b">
                    <span>Next</span>
                    <IoMdArrowDropright size={15} className="text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishPage;
