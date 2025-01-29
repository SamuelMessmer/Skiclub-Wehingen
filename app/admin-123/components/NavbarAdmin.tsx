"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed left-0 flex flex-col justify-center gap-2 h-screen shadow-md p-2 text-center -mt-24">
      <Link
        href="/admin-123/addblog"
        className=" p-3 hover:scale-105 duration-150"
      >
        <div className="font-bold text-xl">
          Neuenblog <br /> erstellen
        </div>
      </Link>

      <hr />

      <Link href="/admin-123" className=" p-3 hover:scale-105 duration-150">
        <div className="font-bold text-xl">
          Rundmail <br /> Übersicht
        </div>
      </Link>

      <hr />

      <Link href="/admin-123/change-form" className=" p-3 hover:scale-105 duration-150">
        <div className="font-bold text-xl">
         Verwaltung <br /> Links 
        </div>
      </Link>

      <hr />

      <Link href="/" className=" p-3 hover:scale-105 duration-150">
        <div className="font-bold text-xl">
          Modus <br /> beenden
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
