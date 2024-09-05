import image from "../../assets/img/photos (1).png";

const HeroContact = () => {
  return (
    <>
      <section className="w-full h-[15em] hidden md:flex flex-col justify-center gap-3 border-b border-netflix-darkgray px-[8vw]">
        <h1 className="text-[2em] md:text-[3em] font-semibold">Contact Us</h1>
        <p className="w-3/5 md:w-2/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, omnis.
          Esse laudantium ipsum voluptas similique repellat.
        </p>
      </section>
      <section className="hidden md:block absolute inset-0 w-[8rem] md:w-[15rem] h-[20rem] md:h-[25rem] rounded-tl-full rounded-tr-full border border-netflix-red left-[70vw] xl:left-[60rem] top-[5rem] p-2">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-tl-full rounded-tr-full object-cover"
        />
      </section>

      <section className="w-full h-[13em] flex md:hidden flex-col justify-center gap-3 relative">
        <img src={image} alt="" className="w-full h-full" />
        <section className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-netflix-black bg-opacity-50">
          <h1 className="text-[2em] font-semibold">Contact Us</h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            omnis. Esse laudantium ipsum voluptas similique repellat.
          </p>
        </section>
      </section>
    </>
  );
};

export default HeroContact;
