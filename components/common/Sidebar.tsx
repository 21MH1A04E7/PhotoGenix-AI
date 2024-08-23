"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/fix";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"


function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <h2 className="text-lg font-bold text-white bg-[#1982d7] py-1 rounded-lg w-full flex justify-center">PHOGENIX-AI</h2>
        </Link>
        <nav className="sidebar-nav">
         <SignedIn>
         <ul className="sidebar-nav_elements">
            {navLinks.slice(0,6).map((links) => {
              const isActive = links.route ===pathname;
              return (
                <li
                  key={links.route}
                  className={`sidebar-nav_element group ${
                    isActive ? 'bg-[#00a8ff] text-white' : 'text-gray-700'
                  }`}
                >
                  <Link className="sidebar-link" href={links.route}>
                    <Image
                      src={links.icon}
                      alt="link-logo"
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                    />
                    {links.label}
                  </Link>
                </li>
              );
            })}
            </ul>
            <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((links) => {
              const isActive = links.route ===pathname;
              return (
                <li
                  key={links.route}
                  className={`sidebar-nav_element group  ${
                    isActive ? 'bg-[#00a8ff] text-white' : 'text-gray-700'
                  }`}
                >
                  <Link className="sidebar-link" href={links.route}>
                    <Image
                      src={links.icon}
                      alt="link-logo"
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                    />
                    {links.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex-center cursor-pointer gap-2 p-4">
              <UserButton showName/>
            </li>
          </ul>
         </SignedIn>
         <SignedOut>
            <Button asChild className="button bg-[#00a8ff] bg-cover">
                <Link href='/sign-in'>Login</Link>
            </Button>
        </SignedOut>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
