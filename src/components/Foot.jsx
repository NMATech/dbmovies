import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

function Foot() {
  const iconSosmed = [
    {
      logo: <FaInstagram className="text-[30px]" />,
      link: "https://instagram.com/@itsnadin_ra",
    },
    {
      logo: <FaLinkedin className="text-[30px]" />,
      link: "https://www.linkedin.com/in/nadindra-maulana-aziz",
    },
    {
      logo: <FaWhatsapp className="text-[30px]" />,
      link: "wa.me/+6285880046909",
    },
    {
      logo: <MdOutlineEmail className="text-[30px]" />,
      link: "mailto:maulananadindra@gmail.com",
    },
  ];

  return (
    <footer className="bg-netflix-black flex flex-col justify-center items-center gap-5 text-netflix-white p-3 pt-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-[50%] mx-auto flex justify-center items-center gap-5 bg-netflix-gray"
      >
        {iconSosmed.map((sosmed, index) => {
          return (
            <a href={sosmed.link} target="_blank" key={index}>
              <div className="border border-netflix-red rounded-full p-2 hover:bg-netflix-red">
                {sosmed.logo}
              </div>
            </a>
          );
        })}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center w-[90%] md:w-[70%]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut odio
        corrupti suscipit sapiente asperiores reprehenderit nesciunt blanditiis
        nobis tenetur saepe at quae ut ea, fuga perferendis? Ullam nisi quae
        architecto ex consectetur inventore !
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl"
      >
        DB<span className="text-netflix-red">MOVIES</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Copyright &copy; 2024 by Nadindra Maulana Aziz
      </motion.p>
    </footer>
  );
}

export default Foot;
