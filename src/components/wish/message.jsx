const Message = ({ message }) => {
  if (!message.text) return null;

  const style =
    message.type === "success"
      ? "bg-green-600 text-white border border-green-400"
      : "bg-red-600 text-white border border-red-400";

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-6 py-3 rounded-md text-sm text-center shadow-lg ${style}`}
    >
      {message.text}
    </div>
  );
};

export default Message;
