import { useRouter } from "next/navigation";
import React from "react";
import { CiUser } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";

function SideBarFooter({ closeDrawer }) {

  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 p-2 text-sm font-normal text-grayColor">
      <div
        className="flex flex-row gap-2 items-center"
        onClick={() => {
          closeDrawer();
          router.push("/user/favourites");
        }}
      >
        <IoIosHeartEmpty
          size={30}
          className="text-grayColor p-1 bg-lightBackground rounded-full"
        />
        <p>Favourites</p>
      </div>
      <div
        className="flex flex-row gap-2 items-center"
        onClick={() => {
          closeDrawer();
          router.push("/user/orders");
        }}
      >
        <GoPackage
          size={30}
          className="text-grayColor p-1 bg-lightBackground rounded-full"
        />
        <p>Track Order</p>
      </div>
      <div
        className="flex flex-row gap-2 items-center"
        onClick={() => {
          closeDrawer();
          router.push("/user/profile");
        }}
      >
        <CiUser
          size={30}
          strokeWidth={0.75}
          className="text-grayColor p-1 bg-lightBackground rounded-full"
        />
        <p>My account</p>
      </div>
    </div>
  );
}

export default SideBarFooter;
