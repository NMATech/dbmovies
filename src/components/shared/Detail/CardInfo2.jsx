import { FaLanguage, FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";

const CardInfo2 = ({ data }) => {
  return (
    <div className="w-2/5 flex flex-col gap-3 pl-[10vh]">
      <div className="w-max flex justify-center items-center gap-3 mt-5">
        <FaLanguage className="text-[40px] text-blue-400" />
        <h6 className="text-xl">{data?.Language}</h6>
      </div>
      <div className="w-max flex justify-center items-center gap-3">
        <MdOutlineLanguage className="text-[40px] text-blue-400" />
        <h6 className="text-xl">{data?.Country}</h6>
      </div>
      <h4 className="text-xl">IMDB Rating</h4>
      <div className="w-max flex justify-center items-center gap-3">
        <FaRegStarHalfStroke className="text-[40px] text-yellow-300" />
        <h6 className="text-xl">{data?.imdbRating}</h6>
      </div>
    </div>
  );
};

export default CardInfo2;
