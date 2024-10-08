import imgHero from "../../assets/img/photos (2).png";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const HeroFoot = () => {
  return (
    <div className="w-full max-h-[300px] h-[50vh] relative px-[8vw] mt-[3em]">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={imgHero}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-70 mx-[8vw]">
        <Fade cascade triggerOnce delay={4}>
          <h1 className="text-xl font-bold text-netflix-lightgray/50">
            Work with Us
          </h1>
          <h1 className="w-4/5 mx-auto text-[2em] md:text-[3em] text-center leading-[1em] font-bold">
            We Make a Better Quality and Visualization
          </h1>
          <button className="w-max flex justify-center items-center gap-2 bg-netflix-white text-netflix-black px-6 py-2 rounded-full">
            <p>Get Started</p>
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default HeroFoot;
