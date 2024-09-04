import image from "../../assets/img/photos (1).png";
import { FaPhoneAlt } from "react-icons/fa";

const SectionInfo = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 px-[8vw] mt-[3em]">
      <section className="w-full md:w-2/5">
        <img src={image} alt="" />
      </section>
      <section className="flex flex-col justify-center gap-3 w-full md:w-3/5">
        <h1 className="text-xl text-netflix-lightgray">About Us</h1>
        <h1 className="text-3xl font-semibold">We Always Make The Best</h1>
        <p className="w-full md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          consectetur delectus vel, fuga similique iure.
        </p>
        <button className="w-max flex justify-center items-center gap-2 bg-netflix-white text-netflix-black px-6 py-2 rounded-full">
          <FaPhoneAlt />
          <p>Contact Us</p>
        </button>
      </section>
    </section>
  );
};

export default SectionInfo;
