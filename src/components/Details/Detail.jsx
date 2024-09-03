import CardInfo from "../shared/Detail/CardInfo";
import CardInfo2 from "../shared/Detail/CardInfo2";

const Detail = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-netflix-black text-netflix-white w-full min-h-[300px] mt-[8vh]">
      <h1 className="text-3xl text-center font-semibold">{data?.Title}</h1>
      <div className="flex gap-2 mt-2">
        <h6>{data?.Year}</h6> | <h6>{data?.Rated}</h6> |{" "}
        <h6>{data?.Runtime}</h6>
      </div>
      <div className="bg-netflix-white mt-5 mb-3">
        <img src={data?.Poster} alt="" />
      </div>
      <div className="flex w-full ml-[10vh]">
        <CardInfo data={data} />
        <CardInfo2 data={data} />
      </div>
    </div>
  );
};

export default Detail;
