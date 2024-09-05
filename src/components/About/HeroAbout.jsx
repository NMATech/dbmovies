import imgHero from "../../assets/img/photos (3).png";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <div className="w-full max-h-[350px] h-[50vh] relative">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={imgHero}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[3em] font-bold"
        >
          About Us
        </motion.h1>
        <p className="flex gap-5">
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            href="/"
          >
            Home
          </motion.a>{" "}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            |
          </motion.span>{" "}
          <motion.a
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            href="/contact"
          >
            Contact
          </motion.a>
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
