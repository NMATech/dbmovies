import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Contract",
      link: "#",
    },
  ];

  const handleHamButton = () => {
    setIsOpen((prev) => !prev);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="flex justify-between items-center bg-netflix-black text-netflix-red p-3 relative">
      <div>
        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl"
        >
          DBMOVIES
        </motion.h1>
      </div>
      <div>
        <button
          onClick={handleHamButton}
          className="block sm:hidden z-50 relative"
        >
          {isOpen ? (
            <IoCloseSharp color="white" size={25} />
          ) : (
            <GiHamburgerMenu color="white" size={25} />
          )}
        </button>
        <ul className="hidden text-netflix-white sm:flex gap-7">
          {menus.map((menu, index) => {
            return (
              <motion.li
                whileHover={{
                  scale: 1.2,
                  color: "#e50914",
                  animation: { duration: 0.5 },
                }}
              >
                <a href={menu.link}>{menu.title}</a>
              </motion.li>
            );
          })}
        </ul>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="absolute top-0 right-0 mt-12 mr-4 bg-netflix-black rounded-lg shadow-lg p-4 space-y-2"
          >
            {menus.map((menu, index) => {
              return (
                <motion.li variants={itemVariants} key={index}>
                  <a
                    href={menu.link}
                    className="text-netflix-white hover:text-netflix-red"
                  >
                    {menu.title}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
