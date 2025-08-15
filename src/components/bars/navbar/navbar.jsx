import React from "react";
import SideBar from "../sidebar/sidebar";
import HokoLogo from "./hoko-logo";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi";

function NavBar() {
  const bag = [];

  return (
    <div className="flex flex-row place-content-between items-center p-2">
      <div className="flex flex-row gap-2">
        <SideBar />
        <div>
          <CiSearch size={"1.5rem"} className="md:hidden text-black" />
        </div>
      </div>

      <HokoLogo />

      <div className="flex flex-row place-content-end items-center gap-2">
        <HiOutlineHeart
          size={"1.5rem"}
          strokeWidth={1.25}
          className="text-darkBlue"
        />
        <div>
          <div className="flex flex-col relative items-center justify-center">
            <TbShoppingBag
              strokeWidth={1.25}
              size="1.5rem"
              className="text-darkBlue"
            />
            {bag?.length > 0 && (
              <p className="text-white bg-black rounded-full text-xs h-4 w-4 flex flex-row justify-center items-center font-medium absolute -bottom-2 -right-2">
                {bag?.length}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
