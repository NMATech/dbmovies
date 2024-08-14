import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import dataHero from "../service/data";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import CardHero from "./shared/CardHero";

function Hero() {
  const datas = dataHero;

  return (
    <motion.div className="bg-netflix-black text-netflix-white min-h-max py-2 px-2">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          transition: { duration: 0.5 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-max w-full text-netflix-white"
      >
        <Swiper
          autoplay={{ delay: 5000 }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="h-[500px]"
        >
          {datas.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <CardHero data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
