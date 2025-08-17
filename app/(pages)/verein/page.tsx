import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

const Verein = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col justify-center items-center mx-20 max-w-fit mt-24 mb-16 ">
          <p className="text-orange-500 text-lg sm:text-2xl  -ml-14 md:-mb-3 sm:self-auto ">
            Der Ausschuss des Skiclubs<b className="hidden sm:inline-block font-normal">Wehingen</b>
          </p>
          <h1 className="font-extrabold text-[48px] sm:text-7xl xl:text-9xl tracking-tighter sm:mb-4 z-10">
            Abteilungsleitung
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-center items-baseline gap-x-12 gap-y-4 mt-20">
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Gerd Linse</h3>
              <hr className="w-full" />
              <p>1. Vorstand</p>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Katha Heyer</h3>
              <hr className="w-full" />
              <p>2. Vorstand</p>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Reimar Oelte</h3>
              <hr className="w-full" />
              <p>Kassierer</p>
              <a
                className="text-black font-bold"
                href="mailto:reimar@sc-wehingen.de"
              >
                reimar@sc-wehingen.de
              </a>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Daniel Rieger</h3>
              <hr className="w-full" />
              <p>Schriftführer</p>
              <a
                className="text-black font-bold"
                href="mailto:siegfried@sc-wehingen.de"
              >
                siegfried@sc-wehingen.de
              </a>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Rüdiger Tack</h3>
              <hr className="w-full" />
              <p>Skihütte</p>
              <a
                className="text-black font-bold"
                href="mailto:skihuette@sc-wehingen.de"
              >
                skihuette@sc-wehingen.de
              </a>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Johannes Klaiber</h3>
              <hr className="w-full" />
              <p>Beisitzer</p>
              <a
                className="text-black font-bold"
                href="mailto:johannes@sc-wehingen.de"
              >
                johannes@sc-wehingen.de
              </a>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Fabian Rees</h3>
              <hr className="w-full" />
              <p>Beisitzer</p>
              <a
                className="text-black font-bold"
                href="mailto:fabian@sc-wehingen.de"
              >
                fabian@sc-wehingen.de
              </a>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Melanie Messmer</h3>
              <hr className="w-full" />
              <p>Beisitzer</p>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Klemend Burkhard</h3>
              <hr className="w-full" />
              <p>Beisitzer</p>
            </div>
            <div className="flex flex-col items-center justify-baseline">
              <Image className="w-[60%] mb-4 rounded-xl" src="/unknown_person.jpg" alt="Passbild" width={450} height={450} />

              <h3 className="text-md mb-2">Anne Merkt</h3>
              <hr className="w-full" />
              <p>Kassenprüfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* VEREINSGESCHICHTE */}
      <section>
        <h1 className=" font-extrabold text-5xl sm:text-8xl sm1 xl:text-8xl tracking-tighter mb-5 sm:mb-4 z-10 md:mt-14  mx-8">
          Die Entstehung des Fossiliuslaufs
        </h1>
        <div className="flex justify-end items-center lg:mx-14">
          <Image
            src="/laufen_gif.webp"
            alt="Logo Picture"
            width={300}
            height={270}
            className="hidden lg:block w-[550px] h-fit z-0"
          />
          <div className="flex flex-col gap-5 sm:w-[600px] lg:w-[850px] bg-orange-500 p-8 mx-2 sm:m-12 rounded-md shadow-xl mb-12 hover:scale-105 duration-150 w-full">
            <h2 className="font-semibold text-xl lg:text-5xl -ml-2 mb-1 text-white">
              Wie alles begann:
            </h2>
            <p className="mb-2 text-lg sm:mb-4">
              Die ersten Jahre des Skifahrens in Wehingen, etwa 1920-1921, sind
              kaum dokumentiert. Den entscheidenden Anstoß gab der Gosheimer
              Lehrer Mangold, der zusammen mit Skifahrern wie Simon Weiß und
              Konrad Mayer zahlreiche Skiwanderungen organisierte. In den späten
              1920er Jahren förderte Lehrer Josef Freudemann besonders das
              Interesse der Jugend am Skifahren. Der erste Skiwettbewerb fand am
              3. Februar 1929 im Rahmen des Skifahrertreffens des oberen
              Schwarzwaldturngaues statt und bot Langlauf- und Sprunglauf in
              zwei Klassen an. 1933 wurde schließlich die Skiabteilung im
              Turnverein Wehingen gegründet, und Moritz Hafen übernahm die
              Leitung. Im Januar 1935 wurde das Kreisschneelauftreffen
              ausgetragen, und bis zum Kriegseintritt im Jahr 1939 blühte der
              Skisport in Wehingen auf. Trotz der Kriegsjahre wurden 1941 noch
              Skiläufe für Jugendliche durchgeführt. Nach dem Krieg, mit der
              Gründung eines neuen Sportvereins am 13. Juli 1947, wurden die
              Sparten Fußball, Leichtathletik und Wintersport etabliert. Unter
              der Leitung von Raimund Walz erlebte der Wintersport eine neue
              Ära. Bereits am 31. Januar 1949 fand der erste Skilauf nach der
              Wiedergründung des Turnvereins statt. In den folgenden Jahren kam
              es jedoch zu internen Schwierigkeiten, die das Interesse am
              Skifahren verringerten. Die verbesserte Erreichbarkeit der
              Skigebiete durch den motorisierten Verkehr führte jedoch 1979 zur
              Gründung eines neuen Skivereins in Wehingen.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-end sm:mb-12">
          <h1 className=" font-extrabold text-5xl sm:text-8xl sm1 xl:text-9xl tracking-tighter mb-4 z-10 md:mt-14 mx-8">
            Unser Maskottchen!
          </h1>
        </div>

        <div className="flex justify-center md:justify-normal mx-2">
          {/* <Image
            src="/Fossi.gif"
            alt="Logo Picture"
            width={300}
            height={270}
            className="border-none w-[450px] sm:w-[700px] lg:w-[1300px] rounded-md shadow-xl hover:scale-105 duration-150 sm:mx-10 lg:ml-40 mb-12"
          /> */}

          <div className="flex flex-col sticky top-24">
            <Card className="bg-[#EFF7FF] mb-24 mx-4 md:mx-14 flex flex-col items-center md:flex-row md:items-center animate-zoom zoom ">
              <Image
                src="/Fossi.gif"
                alt="Logo Picture"
                width={300}
                height={270}
                className="hidden sm:block mt-12 md:mt-0 md:mx-5 lg:my-5 lg:h-[500px] lg:w-fit object-cover mb-4"
              />
              <div className="sm:text-center md:text-left">
                <CardContent className="mb-24 sm:mb-0">
                  Mein Name ist Fossilius und ich repräsentiere die Region um
                  die höchsten Berge der Schwäbischen Alb, die „Region der 10
                  Tausender“. Hier im Schwäbischen Jura findet ihr überall
                  Geschwister von mir. Kennt ihr die höchsten Berge der
                  Schwäbischen Alb? Dazu gehören der Lemberg, der
                  Dreifaltigkeitsberg, das Klippeneck, der Hochberg, der
                  Oberhohenberg und die Hochfläche zwischen Bära und dem
                  Donautal – den Heuberg. Diese idyllische Landschaft eignet
                  sich hervorragend für aktive Freizeitgestaltung und ist ein
                  idealer Ort für Wochenendausflüge. Besucht auch
                  „www.region-der-zehn-tausender.de“ für mehr Informationen.
                  Geologisch zeigen die höchsten Berge der Schwäbischen Alb
                  Schichten des braunen und weißen Juras mit faszinierenden
                  Fossilienfunden, wie dem Ammoniten, dem Maskottchen der
                  „Region der 10 Tausender“ und Namensgeber unseres Laufs. Hier
                  lässt es sich gut leben, mit attraktiven Arbeitsplätzen und
                  gemütlichen Hotels und Gaststätten zum Einkehren und
                  Verweilen. Ich freue mich, dass immer mehr Sportlerinnen und
                  Sportler an meinem Lauf teilnehmen – viele davon sind in der
                  Lauf-Community bekannt. Man trifft sich, kennt sich und feiert
                  gemeinsam die Erfolge.
                </CardContent>
              </div>
            </Card>
            <Image
              src="/Fossi.gif"
              alt="Logo Picture"
              width={300}
              height={270}
              className="z-20 self-start h-fit w-[240px] sm:hidden mb-5 -mt-44 sm:-mt-80 mx-1 hover:scale-105 duration-150"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verein;

export const metadata: Metadata = {
  title: "Skiclub Wehingen Vereinsinformationen",
  description: "Alle wichtigen Informationen über den Skiclub Wehingen und wie dieser entstanden ist"
}
