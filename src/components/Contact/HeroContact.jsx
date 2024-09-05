import image from "../../assets/img/photos (1).png";

const HeroContact = () => {
  return (
    <>
      <section className="w-full h-[15em] flex flex-col justify-center gap-3 border-b border-netflix-darkgray px-[8vw]">
        <h1 className="text-[3em] font-semibold">Contact Us</h1>
        <p className="w-2/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, omnis.
          Esse laudantium ipsum voluptas similique repellat.
        </p>
      </section>
      <section className="absolute inset-0 w-[15rem] h-[25rem] rounded-tl-full rounded-tr-full border border-netflix-red left-[60rem] top-[5rem] p-2">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-tl-full rounded-tr-full object-cover"
        />
      </section>
    </>
  );
};

export default HeroContact;
