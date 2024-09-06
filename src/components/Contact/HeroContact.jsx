import image from "../../assets/img/photos (1).png";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const HeroContact = () => {
  return (
    <>
      <section className="w-full h-[15em] hidden md:flex flex-col justify-center gap-3 border-b border-netflix-darkgray px-[8vw]">
        <Fade cascade triggerOnce>
          <h1 className="text-[2em] md:text-[3em] font-semibold">Contact Us</h1>
          <p className="w-3/5 md:w-2/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            omnis. Esse laudantium ipsum voluptas similique repellat.
          </p>
        </Fade>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="hidden md:block absolute inset-0 w-[8rem] md:w-[15rem] h-[20rem] md:h-[25rem] rounded-tl-full rounded-tr-full border border-netflix-red left-[70vw] xl:left-[60rem] top-[5rem] p-2"
      >
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          src={image}
          alt=""
          className="w-full h-full rounded-tl-full rounded-tr-full object-cover"
        />
      </motion.section>

      <section className="w-full h-[13em] flex md:hidden flex-col justify-center gap-3 relative">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={image}
          alt=""
          className="w-full h-full"
        />
        <section className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-netflix-black bg-opacity-50">
          <Fade cascade triggerOnce>
            <h1 className="text-[2em] font-semibold">Contact Us</h1>
            <p className="w-4/5 text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              omnis. Esse laudantium ipsum voluptas similique repellat.
            </p>
          </Fade>
        </section>
      </section>
    </>
  );
};

export default HeroContact;
