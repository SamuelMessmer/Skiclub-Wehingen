import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-700 flex justify-between items-center py-8 px-6 text-white z-10">
      <p>&copy;Design Required for Terms</p>

      <div className="flex flex-col gap-2 sm:flex-row sm:gap-10">
        <Link href="/">
          <p>Impressum</p>
        </Link>
        <Link href="/">
          <p>Datenschutz</p>
        </Link>
        <Link href="/">
          <p>Organisation</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
