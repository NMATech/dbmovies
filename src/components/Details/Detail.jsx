import CardInfo from "../shared/Detail/CardInfo";
import CardInfo2 from "../shared/Detail/CardInfo2";
import { motion } from "framer-motion";

const Detail = ({ data }) => {
  const lowerFade = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 100 },
  };

  return (
    <div className="flex flex-col justify-center items-center bg-netflix-black text-netflix-white w-full min-h-[300px] mt-[8vh]">
      <motion.h1
        variants={lowerFade}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-[90%] text-2xl md:text-3xl text-center font-semibold"
      >
        {data?.Title}
      </motion.h1>
      <div className="flex gap-2 mt-2">
        <h6>{data?.Year}</h6> | <h6>{data?.Rated}</h6> |{" "}
        <h6>{data?.Runtime}</h6>
      </div>
      <div className="bg-netflix-white mt-5 mb-3">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src={data?.Poster}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row w-full ml-[5vh] md:ml-[10vh]">
        <CardInfo data={data} />
        <CardInfo2 data={data} />
      </div>
    </div>
  );
};

export default Detail;
