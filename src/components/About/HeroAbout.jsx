import imgHero from "../../assets/img/photos (3).png";

const HeroAbout = () => {
  return (
    <div className="w-full max-h-[350px] h-[50vh] relative">
      <img src={imgHero} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-[3em] font-bold">About Us</h1>
        <p className="flex gap-5">
          <a href="/">Home</a> | <a href="">Contact</a>
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
