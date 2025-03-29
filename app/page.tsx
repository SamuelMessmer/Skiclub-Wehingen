import CustomCarousel from "@/components/CustomCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import CustomTable from "@/components/CustomTable";
import NewsletterCards from "../components/NewsletterCards";
import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      {/* HeroSection */}
      <section>
        <div className="sm:flex flex-col sm:items-center gap-2 mt-12 mb-12 mx-3 sm:mt-48 sm:mb-16 md:mb-56">
          <p className="text-orange-500 text-lg sm:text-2xl self-start md:self-auto z-10">
            Willkommen auf der Homepage des
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
          <div className="hidden sm:block py-6 ml-4 sm:ml-10 lg:ml-20 xl:ml-60 self-start">
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
          <div className="flex flex-col sticky top-24">
            <Card className="bg-[#EFF7FF] mb-24 mx-4 sm:px-5 lg:mx-20 xl:mx-20 flex flex-col items-center xl:flex-row xl:items-center animate-zoom zoom ">
              <Image
                src="/lift.jpg"
                alt="lift groß"
                width={1920}
                height={1080}
                className="hidden sm:block rounded-xl shadow-xl mt-12 md:my-5 md:mx-5 xl:my-5 xl:h-[500px] xl:w-fit"
              />
              <div className="sm:text-center xl:text-left">
                <CardHeader className="font-bold text-3xl lg:text-5xl ml-2 md:ml-0 text-orange-500">
                  Skilift des SC-Wehingen
                </CardHeader>
                <CardContent className="mb-14 sm:mb-0">
                  Der Parkplatz des Skilifts befindet sich in der zweiten Kurve
                  der Wehingersteige
                </CardContent>
                <CardContent className="font-bold text-lg text-orange-500">
                  Öffnungszeiten:
                </CardContent>
                <CardContent className="mb-20 text-lg sm:mb-4">
                  Montag bis Samstag: 13:30 -19:00 Uhr
                  <br />
                  <span className="text-md opacity-50">
                    Für alle Wintermonate in denen Schnee liegt{" "}
                  </span>
                </CardContent>
              </div>
            </Card>
            <Image
              src="/lift.jpg"
              alt="lift bild klein"
              width={1920}
              height={1080}
              className="z-20 self-start rounded-xl shadow-xl h-[130px] w-[240px] sm:hidden mb-5 -mt-44 sm:-mt-80 mx-1 hover:scale-105 duration-150"
            />
          </div>

          <div className="flex flex-col sticky top-10 bg-white">
            <Card className="bg-orange-500 mb-0 mx-4 sm:px-5 lg:mx-20 xl:mx-20 2xl:pl-20 flex flex-col items-center xl:flex-row xl:justify-between xl:items-center animate-zoom zoom">
              <Image
                src="/lauf-erwachsen.png"
                alt="lauf-erwachsene klein"
                width={1920}
                height={1080}
                className="hidden sm:block md:hidden rounded-xl shadow-xl mt-12 md:mx-5 md:my-5 lg:h-[500px] lg:w-fit"
              />
              <div className="sm:text-center md:text-left md:">
                <CardHeader className="font-bold text-3xl lg:text-5xl ml-2 md:ml-0 text-white xl:pr-28">
                  Fossiliuslauf
                  <p className="font-normal text-xl ml-0 text-white block xl:hidden">
                    &quot;Laufen, wo die Alb am höchsten ist&quot;{" "}
                  </p>
                </CardHeader>
                <CardContent className="mb-14 -ml-8 sm:mb-0 w-[10px] hidden xl:block">
                  <CustomTable></CustomTable>
                </CardContent>
                <CardContent className="font-bold text-lg text-white"></CardContent>
                <CardContent className="mb-20 text-lg sm:mb-4 block xl:hidden ">
                  Im Jahr 1985 veranstaltete der Skiclub am 6. Oktober den
                  ersten Fossiliuslauf, da der Schnee in diesem Winter ausblieb.
                  Über 150 Sportler nahmen an diesem großen Familiensportfest
                  teil. Der Sieger, Werner Fischinger aus Wehingen, setzte sich
                  vor Gernot Rupp und Arthur Hermle durch. Seitdem findet der
                  Fossiliuslauf jedes Jahr am letzten Septembersonntag statt und
                  ist ein fester Bestandteil des Jahresprogramms des Skiclubs
                  sowie Teil der von den Sparkassen gesponserten Laufserie um
                  den &quot;Silberdistel-Alb-Cup&quot;.
                </CardContent>
              </div>
              <Image
                src="/lauf-erwachsen.png"
                alt="lauf-erwachsene groß"
                width={1920}
                height={1080}
                className="hidden md:block rounded-xl shadow-xl mt-12 md:my-5 md:mx-5 xl:my-5 xl:h-[500px] xl:w-fit"
              />
            </Card>
            <Image
              src="/laufen.png"
              alt="laufen bild"
              width={1920}
              height={1080}
              className="z-20 self-end rounded-xl shadow-xl h-[130px] w-[240px] sm:hidden mb-14 -mt-20 sm:-mt-80 mx-1 hover:scale-105 duration-150"
            />
          </div>
        </div>
      </section>

      {/* PICTURE CAROUSEL  */}
      <section>
        <div className="overflow-hidden flex flex-col justify-center items-center">
          <div className="my-14 mb-20 mx-20">
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
