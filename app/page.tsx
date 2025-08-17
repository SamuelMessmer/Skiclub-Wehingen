import CustomCarousel from "@/components/CustomCarousel";
import Image from "next/image";
import Link from "next/link";
import NewsletterCards from "../components/NewsletterCards";
import BlockCards from "@/components/BlockCards";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      {/* HeroSection */}
      <section>
        <div className="sm:flex flex-col sm:items-center gap-2 mt-12 mb-12 mx-3 sm:mt-48 sm:mb-16 md:mb-56">
          <p className="text-orange-500 text-lg sm:text-2xl self-start md:self-auto z-10">
            Willkommen auf unserer Homepage!
          </p>

          <div className="static z-0">
            <Image
              src="/skifahrer2.jpg"
              alt="Skifahrer bild"
              width={270}
              height={180}
              className="absolute hidden sm:block sm:top-4 md:top-16 scale-x-[-1] -rotate-12 -z-10"
            />

            <h1 className="font-extrabold text-7xl sm:text-8xl sm1 xl:text-9xl tracking-tighter mb-20 sm:mb-10 z-10">
              SKICLUB WEHINGEN
            </h1>

            <p className=" md:text-center text-xl mb-8">
              Traditionsverein mit über 44 Jahren Erfahrung und{" "}
              <br className="hidden sm:block" />
              einem großen Angebot an Aktivitäten für mehr als 150 Mitglieder.
            </p>
          </div>
          <div className="flex gap-8 z-0">
            <Link href="/newsletter">
              <Button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition duration-200 shadow-md font-bold">
                Neuigkeiten
              </Button>
            </Link>
            <Link href="/fossiliuslauf">
              <Button className="bg-transparent hover:bg-transparent hover:scale-105 transition duration-200 shadow-md font-bold text-black border-2 border-orange-500">
                Fossiliuslauf
              </Button>
            </Link>

            <div className="absolute md:right-40 z-10 hidden md:block animation: slideInFromLeft 1s ease-in-out, fadeIn 2s ease-in-out">
              <Image
                src="/Fossi.gif"
                alt="Fossilius gif"
                width={270}
                height={180}
              />
            </div>
          </div>
        </div>
      </section>
      {/* NEWS BANNER */}
      <section>
        <div className="bg-slate-700 px-16 pt-12 sm:p-6 pb-12 flex flex-col justify-center items-center">
          <div className="hidden sm:block py-6 ml-4 sm:ml-5 lg:ml-10 xl:ml-60 self-start">
            <h1 className="text-orange-500 font-bold text-6xl">
              Unser Newsletter:
            </h1>
          </div>

          <NewsletterCards />
        </div>
      </section>

      {/* BLOCK BUILD */}
      <section>
        <div className="bg-white mt-6">
          <BlockCards />
        </div>
      </section>

      {/* PICTURE CAROUSEL  */}
      <section>
        <div className="overflow-hidden flex flex-col justify-center items-center">
          <div className="mt-14 mb-20 mx-20">
            <CustomCarousel></CustomCarousel>
          </div>

          <Link href="/mieten">
            <div className="flex justify-between sm:gap-10 md:gap-10 bg-[#EFF7FF] mx-3 mb-12 py-4 px-6 sm:px-16 rounded-full shadow-lg w-96 sm:w-fit hover:scale-105 duration-150">
              <div>
                <h1 className="text-xl font-bold">Die Skihütte hier Mieten</h1>
                <p>Kontaktdaten vermitteln</p>
              </div>

              <Image
                src="/arrow3.png"
                alt="pfeil png"
                width={75}
                height={25}
                className=""
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Skiclub Wehingen Homepage",
  description: "Alle wichtigen Informationen über den Skiclub: Mieten, Fossiliuslauf, Skilift, Preise, Skiliftpreise, Neuigkeiten, Rundmails, Blog, Infos",
};
