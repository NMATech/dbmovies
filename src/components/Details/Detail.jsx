import CardInfo from "../shared/Detail/CardInfo";
import CardInfo2 from "../shared/Detail/CardInfo2";

const Detail = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-netflix-black text-netflix-white w-full min-h-[300px] mt-[8vh]">
      <h1 className="text-3xl text-center font-semibold">Despicable Me 4</h1>
      <div className="flex gap-2 mt-2">
        <h6>Tahun</h6> | <h6>Rated</h6> | <h6>Runtime</h6>
      </div>
      <div className="bg-netflix-white w-[300px] h-[300px] mt-5 mb-3">
        <img src="" alt="" />
      </div>
      <div className="flex w-full">
        <CardInfo />
        <CardInfo2 />
      </div>
    </div>
  );
};

export default Detail;
