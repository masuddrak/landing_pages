import React from "react";
import Link from "next/link";
interface NavContainerProps {
  scrolled: boolean;
}
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { GiAchievement } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

const NavContainer: React.FC<NavContainerProps> = ({ scrolled }) => {
  return (
    <nav
      className={`max-w-[1146px] mx-auto flex justify-center md:justify-between md:items-center font-bold  ${
        scrolled ? "text-black" : "text-baseBg md:text-white border-[1px] "
      }`}
    >
      <div className="flex items-center justify-between md:justify-start ">
        <div className="absolute left-4 md:relative md:left-0">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="scale-[1.5] flex md:hidden"></GiHamburgerMenu>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center">
                    <GiAchievement className="scale-150"></GiAchievement>
                    <h3 className="">Alteryouth</h3>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2">
          <h3 className="">AARONN</h3>
        </div>
      </div>

      <div
        className={`md:flex md:space-x-4 hidden font-semibold text-sm uppercase`}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/works">my works</Link>
        <Link href="/contact">contact</Link>
      </div>
    </nav>
  );
};

export default NavContainer;
