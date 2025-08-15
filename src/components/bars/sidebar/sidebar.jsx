"use client";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBarFooter from "./sidebar-footer";
import SideBarItems from "./sidebar-items";

function SideBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger>
        <div className="flex flex-row justify-center items-center ">
          <LuMenu
            onClick={openDrawer}
            size="1.5rem"
            className="md:hidden text-black"
            strokeWidth={1}
          />
        </div>
      </SheetTrigger>
      <SheetContent className="" side="left">
        <SideBarItems closeDrawer={closeDrawer}/>
        <SideBarFooter closeDrawer={closeDrawer}/>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
