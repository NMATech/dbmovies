import image from "../../assets/img/photos (1).png";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const SectionInfo = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 px-[8vw] mt-[3em]">
      <section className="w-full md:w-2/5">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          src={image}
          alt=""
        />
      </section>
      <section className="flex flex-col justify-center gap-3 w-full md:w-3/5">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-xl text-netflix-lightgray"
        >
          About Us
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          We Always Make The Best
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
          className="w-full md:w-[80%]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          consectetur delectus vel, fuga similique iure.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          viewport={{ once: true }}
          className="w-max flex justify-center items-center gap-2 bg-netflix-white text-netflix-black px-6 py-2 rounded-full"
        >
          <FaPhoneAlt />
          <p>Contact Us</p>
        </motion.button>
      </section>
    </section>
  );
};

export default SectionInfo;
