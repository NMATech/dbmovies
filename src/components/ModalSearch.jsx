function ModalSearch({ datas }) {
  return (
    <div className="absolute gap-2 w-max right-0 top-[2.5em] bg-netflix-darkgray rounded-lg p-2">
      {datas.map((data, index) => {
        return (
          <div className="flex gap-1" key={index}>
            <div className="w-max">
              <img
                src={data.Poster}
                alt={data.Title}
                className="w-[50px] rounded-lg"
              />
            </div>
            <div className="text-netflix-white">
              <h1 className="font-bold text-md">{data.Title}</h1>
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
        );
      })}
    </div>
  );
}

export default ModalSearch;
