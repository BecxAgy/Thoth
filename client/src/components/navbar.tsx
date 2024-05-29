"use client";

import Link from "next/link";
import React from "react";
import { LuFileText, LuSearch, LuX } from "react-icons/lu";
import SearchBar from "./search_bar";
import Image from "next/image";
import ProfileMenu from "./profile_menu";
import { GiNotebook } from "react-icons/gi";
import ActionMenu from "./action_menu";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const user = true;
  const pathname = usePathname();
  const [searchBoxVisibility, setSearchBoxVisibility] = React.useState(false);
  console.log(pathname);
  return (
    <nav className="navbar">
      <Link href="/" className="flex-none ">
        <Image
          src="/skunk.svg"
          alt="Logo do usuario"
          className="rounded-full"
          width={68}
          height={68}
        />
      </Link>

      {/* SearchBar */}
      {user && <SearchBar visible={searchBoxVisibility} />}
      {user ? (
        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <button
            className="md:hidden text-black flex items-center justify-center"
            onClick={() => setSearchBoxVisibility(!searchBoxVisibility)}
          >
            {searchBoxVisibility ? (
              <LuX className="text-2xl" />
            ) : (
              <LuSearch className="text-2xl" />
            )}
          </button>
          <ActionMenu />

          <ProfileMenu />
        </div>
      ) : (
        <div className="flex items-center gap-3 md:gap-6 ml-auto"></div>
      )}
    </nav>
  );
};

export default Navbar;
