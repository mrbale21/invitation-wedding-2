const Modal = ({ setShowModal, handleSelect }) => (
  <div className="fixed inset-0 z-50 flex items-start pt-30 justify-center">
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setShowModal(false)}
    />
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="relative z-10 bg-disco text-primary p-6 rounded-lg shadow-lg w-72 text-center"
    >
      <h2 className="text-lg font-semibold mb-4">Konfirmasi Kehadiran</h2>
      <div className="flex flex-col space-y-3 text-sm">
        <button
          type="button"
          onClick={() => handleSelect("Hadir")}
          className="bg-secondary text-accent py-2 rounded hover:bg-primary font-semibold"
        >
          Hadir
        </button>
        <button
          type="button"
          onClick={() => handleSelect("Tidak Hadir")}
          className="bg-secondary text-accent py-2 rounded hover:bg-primary font-semibold"
        >
          Tidak Hadir
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
