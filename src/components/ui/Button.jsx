import { IoIosArrowForward } from "react-icons/io";

function Button({ children }) {
  return (
    <button className="flex justify-center items-center bg-netflix-red px-4 py-2 rounded-xl">
      <h1 className="text-sm lg:text-lg">{children}</h1>
      <IoIosArrowForward color="white" size={20} />
    </button>
  );
}

export default Button;
