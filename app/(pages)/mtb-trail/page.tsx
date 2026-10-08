import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SponsorList from "@/components/SponsorList";
import { Metadata } from "next";

const abschnitte = [
  { name: "Abschnitt 3 – Oben", laenge: "ca. 426 Meter", tiefe: "ca. 30 Tiefenmeter" },
  { name: "Abschnitt 2 – Mitte", laenge: "ca. 411 Meter", tiefe: "ca. 40 Tiefenmeter" },
  { name: "Abschnitt 1 – Unten", laenge: "ca. 580 Meter", tiefe: "ca. 40 Tiefenmeter" },
];

const eckdaten = [
  { wert: "3", label: "Abschnitte" },
  { wert: "1,4 km", label: "Streckenlänge" },
  { wert: "110", label: "Tiefenmeter" },
];

const MtbTrail = () => {
  return (
    <div>
      {/* HERO */}
      <section>
        <div className="mx-3 mb-16 mt-12 flex flex-col sm:mx-20 sm:mt-24">
          <p className="z-10 text-lg text-orange-500 sm:text-2xl">
            Der erste Mountainbike Trail auf dem Heuberg
          </p>

          <h1 className="z-10 mb-6 text-[48px] font-extrabold tracking-tighter sm:text-8xl xl:text-9xl">
            MTB-TRAIL
          </h1>

          <p className="max-w-3xl text-xl">
            Neue Wege, neuer Trail: Der Skiclub Wehingen baut gemeinsam mit der
            Gemeinde, dem Forst und dem Naturpark Obere Donau den ersten
            Mountainbike-Trail auf dem Heuberg.
          </p>
        </div>
      </section>

      {/* FOLIE 2 – NEUE WEGE, NEUER TRAIL */}
      <section>
        <div className="flex flex-col sticky top-24">
          <Card className="animate-zoom zoom mx-4 mb-24 flex flex-col items-center bg-orange-500 sm:px-5 lg:mx-20 xl:mx-20 xl:flex-row xl:items-center">
            <div className="sm:text-center xl:text-left">
              <CardHeader className="ml-2 text-3xl font-bold text-white md:ml-0 lg:text-5xl">
                Skiclub Wehingen: Neue Wege – neuer Trail
              </CardHeader>
              <CardContent className="text-lg text-white">
                Der Skiclub Wehingen steht seit 1979 für Sport, Gemeinschaft und
                die Begeisterung für unsere Heimat und die Berge. Mit fast 250
                Mitgliedern sind wir fest in der Gemeinde verwurzelt und gehen
                mit dem neuen Mountainbike-Trail einen weiteren Schritt in die
                Zukunft.
              </CardContent>
              <CardContent className="text-lg text-white">
                Neue Impulse in der Vorstandschaft haben dem Verein in den
                vergangenen Jahren zusätzlichen Schwung verliehen und den Blick
                verstärkt in die Zukunft gerichtet. Denn während die Winter
                zunehmend schneeärmer werden, gehört Mountainbiking zu den großen
                Trends im Breitensport. Mit dem Trail verbinden wir unsere
                Tradition mit einem modernen, ganzjährigen Sportangebot für Jung
                und Alt.
              </CardContent>
              <CardContent className="mb-20 text-lg text-white sm:mb-4">
                Wir sind mächtig stolz auf dieses Projekt und besonders dankbar
                für die große Unterstützung durch die Gemeinde Wehingen, den
                Forst, den Naturpark Obere Donau und den großen Zuspruch aus der
                Bevölkerung. Gemeinsam schaffen wir etwas, das uns und unsere
                Region bewegt.
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* FOLIE 5 – DER TRAIL */}
      <section>
        <h2 className="z-10 mx-8 mb-5 text-5xl font-extrabold tracking-tighter sm:mb-4 sm:text-8xl md:mt-14">
          Der Trail
        </h2>
        <p className="mx-8 mb-10 text-xl text-orange-500">
          1,4 km Streckenlänge – 110 Tiefenmeter – 3 Abschnitte
        </p>

        <div className="mx-4 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mx-20">
          {eckdaten.map((daten) => (
            <div
              key={daten.label}
              className="flex flex-col items-center rounded-md bg-[#EFF7FF] px-6 py-8 shadow-md hover:scale-105 duration-150"
            >
              <p className="text-5xl font-extrabold text-orange-500">
                {daten.wert}
              </p>
              <p className="mt-2 text-lg">{daten.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-4 mb-12 lg:mx-20">
          <Image
            src="/mtb/trail-karte.png"
            alt="Karte des MTB-Trails mit den drei Abschnitten"
            width={1600}
            height={700}
            className="h-auto w-full rounded-xl shadow-xl"
          />
          <p className="mt-3 text-sm opacity-60">
            Der Trail startet am Forstweg zur Skihütte und endet am Parkplatz des
            Skilifts. Zwischen Abschnitt 2 und Abschnitt 1 liegt ein Transfer auf
            dem Kiesweg von ca. 100 Metern.
          </p>
        </div>

        <div className="mx-4 mb-24 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mx-20">
          {abschnitte.map((abschnitt) => (
            <div
              key={abschnitt.name}
              className="rounded-md bg-orange-500 px-6 py-6 text-white shadow-md hover:scale-105 duration-150"
            >
              <h3 className="mb-2 text-xl font-bold">{abschnitt.name}</h3>
              <hr className="mb-2 w-full opacity-50" />
              <p className="text-lg">{abschnitt.laenge}</p>
              <p className="text-lg">{abschnitt.tiefe}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOLIE 4 – TRAILFABRIK */}
      <section>
        <div className="flex flex-col sticky top-24 bg-white">
          <Card className="animate-zoom zoom mx-4 mb-24 flex flex-col items-center bg-[#EFF7FF] sm:px-5 lg:mx-20 xl:mx-20 xl:flex-row xl:items-center">
            <div className="mt-12 flex flex-col items-center md:mx-5 md:my-5 xl:my-5">
              <Image
                src="/mtb/trailfabrik-logo.png"
                alt="Logo der Trailfabrik"
                width={240}
                height={240}
                className="h-[160px] w-auto"
              />
              <Image
                src="/mtb/trailfabrik-team.png"
                alt="Das Team der Trailfabrik"
                width={640}
                height={420}
                className="mt-6 hidden h-auto w-[320px] sm:block xl:w-[420px]"
              />
            </div>

            <div className="sm:text-center xl:text-left">
              <CardHeader className="ml-2 text-3xl font-bold text-orange-500 md:ml-0 lg:text-5xl">
                Trailfabrik
                <p className="ml-0 block text-xl font-normal text-black">
                  Deine Trails, unser Handwerk.
                </p>
              </CardHeader>
              <CardContent className="text-lg">
                Wir freuen uns sehr, als regionale Firma aus Hausen o. V. das
                Projekt in Wehingen umsetzen zu dürfen. Die gemeinsamen
                Vorbereitungen mit dem Skiverein haben uns bereits viel Freude
                bereitet und gezeigt, wie viel Herzblut in diesem Projekt steckt.
              </CardContent>
              <CardContent className="text-lg">
                Was uns aber noch mehr begeistert, ist das Gelände, in das wir den
                Trail zaubern dürfen. Die abwechslungsreichen natürlichen
                Gegebenheiten bieten uns die perfekte Grundlage für einen
                vielseitigen und spannenden Trailverlauf.
              </CardContent>
              <CardContent className="text-lg">
                Wir werden einen Trail bauen, der sowohl Anfängern als auch
                Fortgeschrittenen jede Menge Spaß bietet. Von den ersten
                Erfahrungen auf dem Bike bis hin zu anspruchsvolleren Passagen
                soll jeder auf seine Kosten kommen und die Möglichkeit haben,
                seine eigenen Fähigkeiten weiterzuentwickeln.
              </CardContent>
              <CardContent className="mb-20 text-lg sm:mb-4">
                Dabei entsteht ein Angebot für die ganze Region – eine Chance, den
                Mountainbike-Sport in unserer Heimat weiterzuentwickeln, Menschen
                zu bewegen und einen attraktiven Treffpunkt für Groß und Klein zu
                schaffen.
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* SPONSOREN */}
      <section>
        <h2 className="z-10 mx-8 mb-5 text-5xl font-extrabold tracking-tighter sm:mb-4 sm:text-8xl">
          Unsere Sponsoren
        </h2>
        <p className="mx-8 mb-10 max-w-3xl text-lg">
          Bau, Pflege und langfristiger Unterhalt des MTB-Trails sind mit
          erheblichen Kosten verbunden. Diesen Partnern danken wir dafür, dass
          sie den Trail möglich machen.
        </p>

        <div className="mb-24">
          <SponsorList />
        </div>
      </section>

      {/* FÖRDERER */}
      <section>
        <div className="mx-4 mb-16 flex flex-col items-center gap-6 lg:mx-20">
          <p className="text-lg font-bold text-orange-500">Gefördert durch</p>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
            <Image
              src="/mtb/naturpark-obere-donau.png"
              alt="Logo Naturpark Obere Donau"
              width={340}
              height={260}
              className="h-[90px] w-auto"
            />
            <Image
              src="/mtb/foerderung-eu-bw.png"
              alt="Kofinanziert von der Europäischen Union, gefördert durch das Ministerium für Ländlichen Raum, Landwirtschaft und Heimat Baden-Württemberg"
              width={1600}
              height={130}
              className="h-auto w-full max-w-[560px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MtbTrail;

export const metadata: Metadata = {
  title: "MTB-Trail des Skiclub Wehingen",
  description:
    "Der erste Mountainbike Trail auf dem Heuberg: 1,4 km Streckenlänge, 110 Tiefenmeter und 3 Abschnitte. Alle Infos zum Trail, zum Trailbauer Trailfabrik und zu unseren Sponsoren.",
};
