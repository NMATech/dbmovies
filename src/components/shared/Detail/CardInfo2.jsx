import { FaLanguage, FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";

const CardInfo2 = ({ data }) => {
  const jumlahKata = data?.Country.split(" ").length;

  return (
    <div className="w-full md:w-2/5 flex flex-col gap-3 pl-[1vh] md:pl-[10vh]">
      <div className="w-max flex justify-center items-center gap-3 mt-5">
        <FaLanguage className="text-[40px] text-blue-400" />
        <h6 className="text-lg md:text-xl">{data?.Language}</h6>
      </div>
      <div className="w-max flex items-center gap-3">
        <MdOutlineLanguage className="text-[40px] text-blue-400" />
        <h6
          className={`text-lg md:text-xl ${
            jumlahKata > 4 ? "w-3/5" : "w-full"
          }`}
        >
          {data?.Country}
        </h6>
      </div>
      <h4 className="text-lg md:text-xl">IMDB Rating</h4>
      <div className="w-max flex justify-center items-center gap-3">
        <FaRegStarHalfStroke className="text-[40px] text-yellow-300" />
        <h6 className="text-lg md:text-xl">{data?.imdbRating}</h6>
      </div>
    </div>
  );
};

export default CardInfo2;
