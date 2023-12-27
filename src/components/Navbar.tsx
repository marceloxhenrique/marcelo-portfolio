"use client";
import React from "react";
const pagesAvailable = ["Home", "Skills", "Projects", "About", "Contact"];
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const handleClick = () => {
    setOpenCloseModal(!openCloseModal);
  };
  return (
    <header className="fixed z-10 flex h-20 w-full max-w-7xl items-center justify-between p-4 text-lg font-semibold text-black backdrop-blur-md">
      <section>
        <Link
          scroll={true}
          href={"/"}
          className="text-sm md:text-lg"
        >{`<Marcelo/>`}</Link>
      </section>
      <nav>
        <ul className="hidden  md:inline-flex">
          {pagesAvailable.map((page) => (
            <li key={page} className="md:ml-5">
              <Link scroll={true} href={`#${page}`}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div></div> */}
        <nav
          className={`${
            openCloseModal
              ? "fixed left-0 top-20 z-20  h-screen w-screen  bg-white backdrop-blur-md md:hidden"
              : "hidden"
          } `}
        >
          <div>
            <div className="flex justify-center">
              <ul className="items-left flex flex-col">
                {pagesAvailable.map((page) => (
                  <li
                    key={page}
                    className="my-8 text-4xl"
                    onClick={handleClick}
                  >
                    <Link scroll={true} href={`#${page}`}>
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="hover:cursor-pointer md:hidden" onClick={handleClick}>
          {openCloseModal ? (
            <RxCross2 className="h-8 w-8" />
          ) : (
            <RiMenu3Line className="h-8 w-8 " />
          )}
        </div>
      </nav>
    </header>
  );
}
