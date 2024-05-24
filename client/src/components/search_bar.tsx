import React from "react";
import { LuSearch } from "react-icons/lu";
interface SearchBarProps {
  visible: boolean;
}

const SearchBar = ({ visible }: SearchBarProps) => {
  return (
    <div
      className={`absolute w-full bg-white left-0 top-full  mt-0.5  py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:show md:w-auto ${
        visible ? "show" : "hide"
      }`}
    >
      <input
        type="search"
        placeholder="Pesquisar"
        className="w-full md:w-auto bg-gray p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-gray md:pl-12"
      />
      <LuSearch className="absolute md:pointer-events-none top-1/2 right-[10%]  md:left-5 transform -translate-y-1/2 text-gray text-xl text-gray-800" />
    </div>
  );
};

export default SearchBar;
