"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";

const NavBar = () => {
  const [Display, setDisplay] = useState(false);

  const showHamburgerMenu = () => {
    setDisplay(!Display);
  };

  //to close the Hamburger Menu when clicking on the other contant of the Page
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      // Überprüfe, ob der Klick außerhalb des Menü-Elements passiert ist
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDisplay(false);
      }
    };

    // Füge den Event-Listener hinzu
    document.addEventListener("mousedown", handler);

    // Cleanup-Effekt: Entferne den Event-Listener beim Unmount
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []); // Leer lassen, damit es nur einmal ausgeführt wird

  return (
    <div className="sticky top-0 flex justify-between items-center pl-2  sm:py-2 sm:px-8 w-full h-20 border-b-2 shadow-md bg-white z-50">
      <Link href="/" className="hover:scale-110 transition duration-300">
        <Image src="/Logo.gif" alt="Logo Picture" width={100} height={50} />
      </Link>

      {/* MOBILE DESIGN */}
      <div className="sm:hidden" ref={menuRef}>
        <button onClick={showHamburgerMenu}>
          <Image
            src="/hamburgerMenu.jpg"
            alt="Hamburger Menu"
            width={120}
            height={120}
          />
        </button>

        <div className={Display ? "block" : "hidden duration-150"}>
          <div className="absolute right-1 w-44 rounded-lg bg-orange-500 px-5 py-4 z-auto animate-slideInFromTop slideInFromTop duration-500">
            <div className="flex flex-col justify-start text-white font-bold">
              <Link href="/" className={"py-3 px-3"}>
                Startseite
              </Link>
              <Link href="/fossiliuslauf" className="py-3 px-3">
                Fossiliuslauf
              </Link>
              <Link href="/newsletter" className="py-3  px-3">
                Newsletter
              </Link>
              <Link href="/verein" className="py-3  px-3">
                Verein
              </Link>

              <Button className="bg-white  hover:bg-gray-100 shadow-md">
                <span className="font-bold text-black shadow-sm">
                  Mitglied werden
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP DESIGN */}
      <div className="hidden sm:flex gap-8 h-fit ">
        <button className="hover:border-b-4 border-orange-500 duration-150hover:scale-150 duration-150">
          <Link href="/" className={"py-8"}>
            Startseite
          </Link>
        </button>

        <button className="hover:border-b-4 border-orange-500 duration-150hover:scale-150 duration-150">
          <Link href="/fossiliuslauf" className="py-8">
            Fossiliuslauf
          </Link>
        </button>

        <button
          onClick={() => {}}
          className="hover:border-b-4 border-orange-500 duration-150hover:scale-150 duration-150"
        >
          <Link href="/newsletter" className="py-8">
            Newsletter
          </Link>
        </button>

        <button
          onClick={() => {}}
          className="hover:border-b-4 border-orange-500 duration-150hover:scale-150 duration-150"
        >
          <Link href="/verein" className="py-8">
            Verein
          </Link>
        </button>

        <Button className="bg-orange-500 items-cent hover:bg-orange-600 hover:scale-105 transition duration-200 shadow-md">
          <span className="font-bold text-white shadow-sm">
            Mitglied werden
          </span>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;