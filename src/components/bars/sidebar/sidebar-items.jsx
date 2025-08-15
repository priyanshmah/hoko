import { useRouter } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";


function SideBarItems({closeDrawer}) {
  const isLoggedIn = false;
  const router = useRouter();

  const handleLogin = () => {
    
  }

  return (
    <div className="h-full flex flex-col place-content-between gap-4">
      <div>
        <div onClick={closeDrawer} className="flex bg-black mb-2">
          <IoClose size={30} strokeWidth={0.5} className="text-white p-1" />
        </div>
        <div className="text-darkGrayColor text-base flex flex-col gap-4">
          {isLoggedIn ? (
            <div className={`mb-4`}>
              <p className="text-xl text-black">Welcome ❤️✨</p>
              <p className="text-sm text-black">
                Explore and enjoy your shopping
              </p>
            </div>
          ) : (
            <div className="bg-lightPink mx-2">
              <button
                onClick={handleLogin}
                className="rounded-none font-medium text-lg w-full p-2 border border-black text-black"
              >
                Login / Signup
              </button>
            </div>
          )}
          <div className="pl-4 flex flex-col gap-2">
            <div
              onClick={() => {
                closeDrawer();
                router.push("/");
              }}
            >
              <p className="py-2 font-semibold border-b border-silver ">Home</p>
            </div>
            <div
              onClick={() => {
                closeDrawer();
                router.push("/collections/ethnic-wear");
              }}
            >
              <p className="py-2 font-semibold border-b border-silver ">
                Ethnic Wear
              </p>
            </div>
            <div
              onClick={() => {
                closeDrawer();
                router.push("/collections/party-wear");
              }}
            >
              <p className="py-2 font-semibold border-b border-silver ">
                Party Wear
              </p>
            </div>
            <div
              onClick={() => {
                closeDrawer();
                router.push("/collections/daily-wear");
              }}
            >
              <p className="py-2 font-semibold border-b border-silver ">
                Daily Wear
              </p>
            </div>
            <div
              onClick={() => {
                closeDrawer();
                router.push("/collections/wedding-wear");
              }}
            >
              <p className="py-2 font-semibold border-b border-silver ">
                Wedding Wear
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarItems;
