import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const ContactInfo = () => {
  const iconSosmed = [
    {
      title: "@itsnadin_ra",
      logo: <FaInstagram className="text-[30px]" />,
      link: "https://instagram.com/@itsnadin_ra",
    },
    {
      title: "+6285880046909",
      logo: <FaWhatsapp className="text-[30px]" />,
      link: "wa.me/+6285880046909",
    },
    {
      title: "maulananadindra@gmail.com",
      logo: <MdOutlineEmail className="text-[30px]" />,
      link: "mailto:maulananadindra@gmail.com",
    },
  ];

  const delayAnimate = (index) => {
    const duration = 0.5 * index;

    return duration;
  };

  return (
    <section className="w-full flex flex-col gap-3 h-[20rem] md:h-[13rem] px-[8vw] mt-[2em] md:mt-[3em]">
      <Fade cascade triggerOnce>
        <h1 className="w-full md:w-3/5 lg:w-full text-3xl font-semibold">
          Contact Information
        </h1>
        <p className="w-full md:w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          perspiciatis perferendis? Voluptatum sunt doloribus optio quibusdam
          est.
        </p>
      </Fade>
      <section className="flex flex-wrap justify-center md:justify-normal items-center gap-5 md:gap-10 mt-3">
        {iconSosmed.map((sosmed, index) => {
          return (
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: delayAnimate(index) }}
              viewport={{ once: true }}
              href={sosmed.link}
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <section
                key={index}
                className="bg-netflix-red w-max flex flex-col justify-center items-center px-4 py-1 rounded-full"
              >
                {sosmed.logo}
              </section>
              <h1 className="text-xl">{sosmed.title}</h1>
            </motion.a>
          );
        })}
      </section>
    </section>
  );
};

export default ContactInfo;
