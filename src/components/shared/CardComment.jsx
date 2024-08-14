import { Rating } from "flowbite-react";

function CardComment({ data }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Rating.Star key={i} filled={i < data.rating} />);
    }
    return stars;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1 text-center bg-netflix-darkgray w-[250px] py-4 px-2 rounded-xl">
      <div className="">
        <img src={data.avatar} alt={data.name} className="rounded-full" />
      </div>
      <h1>{data.name}</h1>
      <Rating>{renderStars()}</Rating>
      <h1>{data.comment}</h1>
    </div>
  );
}

export default CardComment;
