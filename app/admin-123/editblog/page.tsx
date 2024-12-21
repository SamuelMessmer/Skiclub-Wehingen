import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { SyncLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SyncLoader loading speedMultiplier={1} className="mb-12" />

      <p>Fehler beim Laden der Rundmail...</p>
      <Link href="/admin-123">
        <Button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition duration-200 shadow-md font-bold text-black border-2 border-orange-500 mt-12">
          Erneut versuchen
        </Button>
      </Link>
    </div>
  );
};

export default LoadingScreen;
