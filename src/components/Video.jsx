import { motion } from "framer-motion";

function Video() {
  return (
    <div className="bg-netflix-black flex flex-col gap-5 border-t-[5px] border-netflix-darkgray p-5">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 w-full md:w-[70%] mx-auto text-netflix-white text-center"
      >
        <h1 className="font-bold text-xl md:text-2xl">
          Unveil the Magic of Cinema
        </h1>
        <p>
          Explore the world of cinema through captivating trailers, exclusive
          clips, and behind-the-scenes moments. Whether you’re a fan of
          thrilling action, heartwarming dramas, or thought-provoking stories,
          immerse yourself in the cinematic experience that brings the big
          screen to life.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <iframe
          width="560"
          height="315"
          src="https://youtube.com/embed/uvX4k_3Cmvs?si=lqgAjIlfcdwOY3kq"
          className="shadow-xl"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default Video;
