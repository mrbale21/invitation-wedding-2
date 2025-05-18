import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

const WishList = ({ currentWishes }) => {
  if (currentWishes.length === 0) {
    return <p className="text-center text-accent text-sm">Belum ada ucapan.</p>;
  }

  return currentWishes.map((wishItem, index) => {
    const isLast = index === currentWishes.length - 1;
    const initials = (() => {
      if (!wishItem.name) return "NA";
      const words = wishItem.name.trim().split(/\s+/);
      return words.length >= 2
        ? (words[0][0] + words[1][0]).toUpperCase()
        : words[0][0].toUpperCase();
    })();

    return (
      <div
        key={wishItem.id}
        className={`flex w-80 items-start space-x-4 min-h-sm overflow-hidden border-t border-accent py-4 ${
          isLast ? "border-accent border-b pb-4" : ""
        }`}
      >
        <div className="px-4 flex gap-4">
          <div className="flex items-center justify-center bg-secondary rounded-full w-6 h-6 text-accent font-semibold text-xs uppercase mt-1">
            {initials}
          </div>
          <div className="flex flex-col text-left gap-1 max-w-[230px]">
            <div className="text-xs break-words flex">
              <h1 className="capitalize font-bold text-accent">
                {wishItem.name.length > 20
                  ? wishItem.name.slice(0, 20) + "..."
                  : wishItem.name}
              </h1>
              <h4 className="capitalize text-[9px] text-accent bg-secondary ml-2 px-1 rounded-xs flex items-center gap-1">
                <FaCircleCheck /> {wishItem.attendance}
              </h4>
            </div>
            <p className="text-[9px] text-gray-400 flex items-center gap-1">
              <IoMdTime size={11} className="mt-0.5" />
              {formatDistanceToNow(wishItem.date.toDate(), {
                addSuffix: true,
                locale: id,
              })}
            </p>
            <p className="font-akaya-kanadaka text-[10px] break-words line-clamp-5">
              {wishItem.wish}
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default WishList;
