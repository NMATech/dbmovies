import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";

// Child Component
import Search from "./shared/Nav/Search";
import Navlink from "./shared/Nav/Navlink";
import { useEffect, useState } from "react";
import axios from "axios";

// Service
import { getSearchMovies } from "../service/service";
import ModalSearch from "./ModalSearch";

function Nav() {
  const [isSearchMobile, setIsSearchMobile] = useState(false);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchMobile = () => {
    setIsSearchMobile((isSearchMobile) => !isSearchMobile);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (search) {
        getSearchMovies(search, setMovies);
      } else if (search === "") {
        setMovies([]);
      }
    }, 500); // Menunggu 500ms setelah pengguna berhenti mengetik

    return () => clearTimeout(timeoutId); // Membersihkan timeout jika pengguna mengetik lagi sebelum 500ms
  }, [search]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex justify-between items-center p-3">
          <div className="w-[50%] md:w-[40%] ml-5">
            <a href="/">
              <motion.h1
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl text-netflix-white"
              >
                DB<span className="font-bold text-netflix-red">MOVIES</span>
              </motion.h1>
            </a>
          </div>
          <div className="w-[50%] md:w-[60%] flex justify-end md:justify-between items-center gap-3 md:gap-0">
            <Navlink />
            <Search
              handleSearchMobile={handleSearchMobile}
              isSearchMobile={isSearchMobile}
              handleSearch={handleSearch}
            />
          </div>
        </div>
        {isSearchMobile && (
          <div className="flex justify-center items-center gap-2 pl-5">
            <input
              type="text"
              className="w-[60%] opacity-70 p-[2px]"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <button>
              <IoSearchOutline color="white" size={20} />
            </button>
          </div>
        )}
        {movies && <ModalSearch datas={movies} />}
      </nav>
    </>
  );
}

export default Nav;
