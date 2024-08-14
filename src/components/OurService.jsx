import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import dataHero from "../service/data";

import Button from "./ui/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

function OurService() {
  const ref = useRef(null);
  const datas = dataHero;

  return (
    <motion.div className="flex flex-col md:flex-row bg-netflix-black text-netflix-white min-h-max py-10 px-2">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center items-center text-center flex-col gap-5 w-full md:w-[50%]"
      >
        <h1 className="font-bold text-lg lg:text-2xl">
          Unlimited All of Movies and TV Shows
        </h1>
        <p className="text-sm lg:text-md w-[80%]">
          Experience the ultimate entertainment with endless movies and TV shows
          at your fingertips. Dive into a world of cinematic masterpieces and
          binge-worthy series, available anytime, anywhere. Join us by click the
          button!
        </p>
        <Button>Join Membership</Button>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-max w-full md:w-[50%] text-netflix-black mt-5 md:mt-0"
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {datas.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={data.Poster} alt={data.Title} className="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}

export default OurService;
