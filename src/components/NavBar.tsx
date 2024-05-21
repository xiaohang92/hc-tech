// src/components/NavBar.tsx
"use client";
import Image from "next/image";
import logo from "/public/teslalogo.svg";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-transparent py-5 px-5">
        <Link href="/">
          <div className="cursor-pointer">
            <Image src={logo} width={120} alt="logo" />
          </div>
        </Link>

        {/* <div className="hidden ml-20 md:flex">
          <div className="mx-2 cursor-pointer p-1 rounded-lg transition duration-150 ease-in-out">
            Home
          </div>
        </div> */}

        <div className="flex items-center">
          <div className="mx-2 cursor-pointer p-1 rounded-lg ">Account</div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
