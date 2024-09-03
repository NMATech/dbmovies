function ModalSearch({ datas }) {
  const winWidth = window.innerWidth;

  return (
    <div
      className={`absolute flex flex-col gap-2 w-max ${
        winWidth > 768 ? "right-[1em] top-[2.5em]" : "right-[0.5em] top-[5.5em]"
      } bg-netflix-darkgray rounded-lg p-2 overflow-auto max-h-[300px]`}
    >
      {datas.map((data, index) => {
        return (
          <a href={`/details/${data.imdbID}`} key={index}>
            <div className="flex gap-1">
              <div className="w-max">
                <img
                  src={data.Poster}
                  alt={data.Title}
                  className="w-[50px] rounded-lg"
                />
              </div>
              <div className="text-netflix-white">
                <h1 className="font-bold text-md truncate overflow-hidden text-ellipsis max-w-[250px]">
                  {data.Title}
                </h1>
                <h1 className="text-sm text-netflix-white/50">{data.Year}</h1>
                <ul className="flex gap-2 text-netflix-white/50">
                  {Array.isArray(data.Genre) &&
                    data.Genre.map((x, index) => (
                      <li key={index}>
                        <h3 className="text-sm">{x}</h3>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default ModalSearch;
