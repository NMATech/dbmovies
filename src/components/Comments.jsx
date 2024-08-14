// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import dataComment from "../service/dataComment";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CardComment from "./shared/CardComment";
import { data } from "autoprefixer";
import { motion } from "framer-motion";

function Comments() {
  return (
    <div className="flex flex-col bg-netflix-black text-netflix-white">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 w-[70%] mx-auto text-center"
      >
        <h1 className="font-bold text-xl md:text-2xl">
          What Others Are Saying
        </h1>
        <p>Check out what others have shared about their experience.</p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-[80%] mx-auto flex justify-center items-center py-10"
        >
          {dataComment.map((comment, index) => {
            return (
              <SwiperSlide>
                <CardComment data={comment} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Comments;
