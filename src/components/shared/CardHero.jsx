import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function CardHero({ data }) {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${data.Bg})`,
          backgroundPosition: "center",
        }}
        data-swiper-parallax="-23%"
      ></div>
      <div className="absolute inset-0 bg-netflix-black opacity-50"></div>
      <div className="flex items-center justify-start gap-4 h-full relative p-4 ml-1 md:ml-5">
        <motion.img
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          src={data.Poster}
          alt={data.Title}
          className="w-[15em] hidden md:block"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 text-2xl font-bold"
          data-swiper-parallax="-300"
        >
          <h1 className="text-[16px] text-netflix-white/70">{data.Year}</h1>
          <h1 className="text-3xl">{data.Title}</h1>
          <ul className="flex gap-2 md:gap-5 text-netflix-white mt-2">
            {data.Genre.map((genre, index) => {
              return (
                <li
                  key={index}
                  className="bg-netflix-darkgray px-4 rounded-full"
                >
                  <h1 className="text-[14px]">{genre}</h1>
                </li>
              );
            })}
          </ul>
          <h1 className="text-[14px] w-full md:w-[80%]">{data.Plot}</h1>
          <div className="flex justify-between w-[50%] md:w-[30%]">
            <section className="flex justify-center items-center gap-3">
              <IoMdTime size={20} />
              <h1 className="text-[14px]">{data.Runtime}</h1>
            </section>
            <section className="flex justify-center items-center gap-3">
              <FaStar size={20} color="gold" />
              <h1 className="text-[14px]">{data.imdbRating}</h1>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CardHero;
