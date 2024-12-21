import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

const Fossiliuslauf = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center mt-24 mb-4 sm:mb-32">
          <p className="text-orange-500 text-lg sm:text-2xl self-start ml-4 -mb-4 md:mb-1 md:self-auto">
            Hier finden Sie alle Infos zum
          </p>
          <h1 className="font-extrabold text-[52px] sm:text-8xl sm1 xl:text-9xl tracking-tighter mb-5 sm:mb-4 z-10">
            FOSSILIUSLAUF
          </h1>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section>
        <div className="bg-white mt-10">
          <div className="flex flex-col sticky top-24">
            <Card className="bg-sky-100 mb-24 mx-4 md:mx-14 flex flex-col items-center md:flex-row md:items-center animate-zoom zoom ">
              <Image
                src="/lauf-erwachsen.png"
                alt="Logo Picture"
                width={1920}
                height={1080}
                className="hidden sm:block rounded-xl shadow-xl mt-12 md:mt-0 md:mx-5 lg:my-5 lg:h-[500px] lg:w-[720px]"
              />
              <div className="sm:text-center md:text-left md:">
                <CardHeader className="font-bold text-3xl lg:text-5xl -ml-2 text-orange-500">
                  Lauf für Erwachsene
                </CardHeader>
                <CardContent className="mb-4 sm:mb-0">
                  Für Erwachsene(ab 15) gibt es die folgenden Läufe:
                  <br />
                  <b>
                    <br />- Hauptlauf (11,2km)
                    <br />- Jedermannlauf (6,0km)
                    <br />- Nordic-Walking (7,8km)
                  </b>
                </CardContent>
                <CardContent className="font-bold text-lg text-orange-500">
                  Weiter Infos:
                </CardContent>
                <CardContent className="lg:-mt-4 mb-20 text-lg sm:mb-4">
                  Alle drei Läufe beginnen um 11:00 Uhr. Für den Jedermannlauf
                  und das Nordic Walking beträgt das Startgeld 6,00 €, während
                  für den Hauptlauf ein Startgeld von 8,00 € anfällt.
                </CardContent>
              </div>
            </Card>
            <Image
              src="/lauf-erwachsen.png"
              alt="Logo Picture"
              width={1920}
              height={1080}
              className="z-20 self-start rounded-xl shadow-xl h-[130px] w-[240px] sm:hidden mb-5 -mt-44 sm:-mt-80 mx-1 hover:scale-105 duration-150"
            />
          </div>

          <div className="flex flex-col sticky top-24 bg-white">
            <Card className="bg-orange-500 mb-24 mx-4 md:mx-14 flex flex-col items-center md:flex-row md:justify-between md:items-center animate-zoom zoom">
              <Image
                src="/lauf-jung.png"
                alt="Logo Picture"
                width={1920}
                height={1080}
                className="hidden sm:block md:hidden rounded-xl shadow-xl mt-12 md:mt-0 md:mx-5 lg:my-5 lg:h-[500px] lg:w-[720px]"
              />
              <div className="sm:text-center md:text-left md:">
                <CardHeader className="font-bold text-3xl lg:text-5xl -ml-2 text-white">
                  Lauf für Jugendliche
                </CardHeader>
                <CardContent className="mb-2 sm:mb-0">
                  <b>- Schülerlauf</b>
                </CardContent>
                <CardContent className="mb-14 sm:mb-0">
                  Der Schülerlauf startet um 09:30 Uhr und führt über eine
                  Strecke von 1,5 km. Um teilnehmen zu können, müssen die
                  Schüler zwischen 10 und 17 Jahren alt sein. Es fällt ein
                  Startgeld von 4,00 € an.
                </CardContent>
              </div>
              <Image
                src="/lauf-jung.png"
                alt="Logo Picture"
                width={1920}
                height={1080}
                className="hidden md:block rounded-xl shadow-xl mt-12 md:mt-0 md:mx-5 lg:my-5 lg:h-[500px] lg:w-[720px]"
              />
            </Card>
            <Image
              src="/lauf-jung.png"
              alt="Logo Picture"
              width={1920}
              height={1080}
              className="z-20 self-end rounded-xl shadow-xl h-[130px] w-[240px] sm:hidden mb-14 -mt-40 sm:-mt-80 mx-1 hover:scale-105 duration-150"
            />
          </div>

          <div className="flex flex-col sticky top-24 bg-white">
            <Card className="bg-slate-700 mb-24 mx-4 md:mx-14 flex flex-col items-center md:flex-row md:items-center animate-zoom zoom ">
              <Image
                src="/lauf-kinder.png"
                alt="Logo Picture"
                width={1920}
                height={1080}
                className="hidden sm:block rounded-xl shadow-xl mt-12 md:mt-0 md:mx-5 lg:my-5 lg:h-[500px] lg:w-[720px]"
              />
              <div className="sm:text-center md:text-left md:">
                <CardHeader className="font-bold text-3xl lg:text-5xl -ml-2 text-orange-500">
                  Lauf für Kinder
                </CardHeader>
                <CardContent className="mb-2 sm:mb-0 text-white">
                  <b>
                    <br />- Bambinilauf
                  </b>
                  <b>
                    <br />- Kidslauf
                  </b>
                </CardContent>
                <CardContent className="font-bold text-lg text-orange-500">
                  Weiter Infos:
                </CardContent>
                <CardContent className="mb-14 sm:mb-0 text-white">
                  Der Bambinilauf beginnt um 09:50 Uhr und führt über eine
                  Strecke von 300 Metern. Die Teilnahme ist kostenlos und steht
                  allen Kindern der Jahrgänge 2020 bis 2022 offen. Im Anschluss
                  startet um 10:00 Uhr der Kidslauf, der eine Distanz von 500
                  Metern umfasst. Auch hier ist die Teilnahme kostenlos, und es
                  dürfen Kinder aus den Jahrgängen 2017 bis 2019 mitmachen.
                </CardContent>
              </div>
            </Card>
            <Image
              src="/lauf-kinder.png"
              alt="Logo Picture"
              width={1920}
              height={1080}
              className="z-20 self-start rounded-xl shadow-xl h-[130px] w-[240px] sm:hidden mb-5 -mt-36 sm:-mt-80 mx-1 hover:scale-105 duration-150"
            />
          </div>
        </div>
      </section>

      {/* ERGEBNISS SECTION */}
      <section>
        <h1 className=" font-extrabold text-5xl sm:text-8xl sm1 xl:text-9xl tracking-tighter mb-5 sm:mb-4 z-10 md:mt-14  mx-8">
          Die letzten Ergebnisse:
        </h1>
        <div className="flex justify-end items-center lg:mx-14">
          <Image
            src="/laufen_gif.webp"
            alt="Logo Picture"
            width={1920}
            height={1080}
            className="hidden md:block w-[550px] h-fit z-0"
          />
          <div className="flex flex-col gap-5 sm:w-[600px] lg:w-[850px] bg-orange-500 p-8 mx-2 sm:m-12 rounded-md shadow-xl mb-12 hover:scale-105 duration-150 w-full">
            <div className="flex justify-between ">
              <h3 className=" sm:font-semibold  text-2xl lg:text-2xl -ml-2 ">
                Hauptlauf
              </h3>
              <a
                href="/"
                className="bg-white py-1 px-2 rounded-sm w-fit shadow-md font-semibold hover:scale-105 duration-150 "
              >
                <p className="block sm:hidden">Link</p>
                <p className="hidden sm:block">Link zum Download</p>
              </a>
            </div>
            <div className="border-solid border-small border-y-1 border-gray-300 rounded-xl">
              {" "}
            </div>
            <div className="flex justify-between ">
              <h3 className=" sm:font-semibold  text-2xl lg:text-2xl -ml-2 ">
                Jedermannlauf
              </h3>
              <a
                href="/"
                className="bg-white py-1 px-2 rounded-sm w-fit shadow-md font-semibold hover:scale-105 duration-150 "
              >
                <p className="block sm:hidden">Link</p>
                <p className="hidden sm:block">Link zum Download</p>
              </a>
            </div>
            <div className="border-solid border-small border-y-1 border-gray-300 rounded-xl">
              {" "}
            </div>
            <div className="flex justify-between ">
              <h3 className=" sm:font-semibold  text-2xl lg:text-2xl -ml-2 ">
                Nordic-Walker
              </h3>
              <a
                href="/"
                className="bg-white py-1 px-2 rounded-sm w-fit shadow-md font-semibold hover:scale-105 duration-150 "
              >
                <p className="block sm:hidden">Link</p>
                <p className="hidden sm:block">Link zum Download</p>
              </a>
            </div>
            <div className="border-solid border-small border-y-1 border-gray-300 rounded-xl">
              {" "}
            </div>
            <div className="flex justify-between ">
              <h3 className=" sm:font-semibold  text-2xl lg:text-2xl -ml-2 ">
                Schülerlauf
              </h3>
              <a
                href="/"
                className="bg-white py-1 px-2 rounded-sm w-fit shadow-md font-semibold hover:scale-105 duration-150 "
              >
                <p className="block sm:hidden">Link</p>
                <p className="hidden sm:block">Link zum Download</p>
              </a>
            </div>
            <div className="border-solid border-small border-y-1 border-gray-300 rounded-xl">
              {" "}
            </div>
            <div className="flex justify-between ">
              <h3 className=" sm:font-semibold  text-2xl lg:text-2xl -ml-2 ">
                Kidslauf
              </h3>
              <a
                href="/"
                className="bg-white py-1 px-2 rounded-sm w-fit shadow-md font-semibold hover:scale-105 duration-150 "
              >
                <p className="block sm:hidden">Link</p>
                <p className="hidden sm:block">Link zum Download</p>
              </a>
            </div>
            <div className="border-solid border-small border-y-1 border-gray-300 rounded-xl">
              {" "}
            </div>
            <div className="flex justify-between ">
              <h3 className=" sm:font-semibold  text-2xl lg:text-2xl -ml-2 ">
                Bambinilauf
              </h3>
              <a
                href="/"
                className="bg-white py-1 px-2 rounded-sm w-fit shadow-md font-semibold hover:scale-105 duration-150 "
              >
                <p className="block sm:hidden">Link</p>
                <p className="hidden sm:block">Link zum Download</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS LINK */}
      <section>
        <div className="flex justify-end sm:mb-12">
          <h1 className=" font-extrabold text-5xl sm:text-8xl sm1 xl:text-9xl tracking-tighter mb-4 z-10 md:mt-14 mx-8">
            Wo Sie uns finden!
          </h1>
        </div>

        <div className="flex justify-center md:justify-normal mx-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4017924368036!2d8.799015413264739!3d48.137411173294836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a0a1929c634f5%3A0xd2d041efc37a1a32!2sSkiclub%20Wehingen%20e.V.!5e0!3m2!1sde!2sde!4v1728588872095!5m2!1sde!2sde"
            width="80"
            height="600"
            className="border-none w-[450px] sm:w-[700px] lg:w-[1300px] rounded-md shadow-xl hover:scale-105 duration-150 sm:mx-10 lg:ml-40 mb-12"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Fossiliuslauf;


export const metadata: Metadata = {
  title: "Fossiliuslauf",
  description: "Alle wichtigen Informationen über den Fossiliuslauf"
}