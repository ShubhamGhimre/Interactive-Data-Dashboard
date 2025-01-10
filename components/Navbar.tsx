import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "./Toogle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 ">
      <SidebarTrigger />
      <div>
        {/* search bar */}
        <input type="text" placeholder="Search" />
      </div>
      <div className="flex items-center gap-3">
        {/* profile */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
