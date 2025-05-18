import { TiArrowSortedDown } from "react-icons/ti";

const WishForm = ({
  name,
  setName,
  wish,
  setWish,
  attendance,
  setShowModal,
  handleSubmit,
  loading,
}) => (
  <form
    onSubmit={handleSubmit}
    className="flex flex-col justify-center items-center gap-5 pt-2"
  >
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="bg-primary border text-accent text-xs rounded-sm w-7/8 p-1.5 font-akaya-kanadaka"
      placeholder="Nama"
      required
    />
    <textarea
      value={wish}
      onChange={(e) => setWish(e.target.value)}
      className="bg-primary border text-sccent text-xs rounded-sm w-7/8 p-1.5 min-h-[80px] resize-none font-akaya-kanadaka"
      placeholder="Ucapan"
      required
    />
    <div className="relative z-10">
      <div
        onClick={() => setShowModal(true)}
        className="bg-secondary hover:bg-primary text-start rounded w-73 shadow border border-accent"
      >
        <div className="flex items-center justify-between py-1 px-2 text-xs font-akaya-kanadaka text-gray-300">
          {attendance ? attendance : "Konfirmasi Kehadiran"}
          <TiArrowSortedDown />
        </div>
      </div>
    </div>
    <button
      type="submit"
      disabled={loading}
      className={`mx-auto bg-secondary hover:bg-primary border border-accent p-1 w-32 rounded-sm text-accent font-cal-sans font-semibold text-xs ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Mengirim..." : "Kirim"}
    </button>
  </form>
);

export default WishForm;
