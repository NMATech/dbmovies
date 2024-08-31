const CardInfo = () => {
  return (
    <div className="w-3/5 flex flex-col gap-3">
      <ul className="flex gap-2 md:gap-5 text-netflix-white mt-3">
        <li className="border border-netflix-white min-w-[100px] text-center px-4 py-2 rounded-full">
          <h1 className="text-[14px]">Action</h1>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi incidunt,
        obcaecati, itaque facere, ratione necessitatibus tenetur accusantium
        mollitia sapiente quod sit velit ab inventore? Illo ab iusto facilis et
        nesciunt?
      </p>
      <div className="flex gap-3 border-t border-netflix-darkgray pt-3">
        <h5 className="text-netflix-red text-xl">Director</h5>
        <h5 className="text-xl">Saepul</h5>
      </div>
      <div className="flex gap-3 border-t border-netflix-darkgray pt-3">
        <h5 className="text-netflix-red text-xl">Writer</h5>
        <h5 className="text-xl">Saepul</h5>
      </div>
      <div className="flex gap-3 border-t border-netflix-darkgray pt-3">
        <h5 className="text-netflix-red text-xl">Actors</h5>
        <h5 className="text-xl">Saepul</h5>
      </div>
    </div>
  );
};

export default CardInfo;