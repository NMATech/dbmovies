const CardInfo = ({ data }) => {
  const director = data?.Director;
  const writer = data?.Writer;
  const actors = data?.Actors;
  const genres = data?.Genre
    ? data.Genre.split(",").map((genre) => genre.trim())
    : [];

  return (
    <div className="w-full md:w-3/5 flex flex-col gap-3">
      <ul className="flex flex-wrap gap-2 md:gap-5 text-netflix-white mt-3">
        {genres.map((genre, index) => {
          return (
            <li
              key={index}
              className="border border-netflix-white min-w-[100px] text-center px-4 py-2 rounded-full"
            >
              <h1 className="text-[14px]">{genre}</h1>
            </li>
          );
        })}
      </ul>
      <p>{data?.Plot}</p>
      <div className="flex gap-3 border-t border-netflix-darkgray pt-3">
        <h5 className="text-netflix-red text-lg md:text-xl">Director</h5>
        <h5 className="text-lg md:text-xl">{director}</h5>
      </div>
      <div className="flex gap-3 border-t border-netflix-darkgray pt-3">
        <h5 className="text-netflix-red text-lg md:text-xl">Writer</h5>
        <h5 className="text-lg md:text-xl">{writer}</h5>
      </div>
      <div className="flex gap-3 border-t border-netflix-darkgray pt-3">
        <h5 className="text-netflix-red text-lg md:text-xl">Actors</h5>
        <h5 className="text-lg md:text-xl">{actors}</h5>
      </div>
    </div>
  );
};

export default CardInfo;
