import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Search({ handleSearchMobile, isSearchMobile, handleSearch }) {
  return (
    <div className="-order-1 md:order-last">
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          className="hidden md:block w-[60%] opacity-70 p-[2px] focus:outline-none focus:outline-netflix-red"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <button className="hidden md:block">
          <IoSearchOutline color="white" size={20} />
        </button>
        <button className="block md:hidden" onClick={handleSearchMobile}>
          {isSearchMobile ? (
            <IoIosArrowDown color="white" size={20} />
          ) : (
            <IoSearchOutline color="white" size={20} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Search;
