"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/fix";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const MobileNavBar = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <h2 className="text-lg font-bold text-white bg-[#4599de] py-1 rounded-lg w-full flex justify-center px-3">PHOGENIX-AI</h2>
      </Link>
      <nav>
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image
                src="./assets/icons/menu.svg"
                alt="logo"
                width={32}
                height={32}
                className="cursor"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <h2 className="text-lg font-extrabold text-[#2386d6]">PHOTOGENIX-AI</h2>
              </>
              <ul className="header-nav_elements">
                {navLinks.map((links) => {
                  const isActive = links.route === pathname;
                  return (
                    <li
                      key={links.route}
                      className={`${
                        isActive && "gradient-text"
                      } p-15  flex whitespace-nowrap text-dark-700`}
                    >
                      <Link
                        className="sidebar-link-mobile cursor-pointer"
                        href={links.route}
                      >
                        <Image
                          src={links.icon}
                          alt="link-logo"
                          width={24}
                          height={24}
                        />
                        {links.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="px-6 rounded-lg font-bold text-lg bg-[#00a8ff] bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNavBar;
