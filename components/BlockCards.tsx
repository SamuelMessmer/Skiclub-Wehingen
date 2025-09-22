"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Card, CardContent, CardHeader } from './ui/card'

const BlockCards = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    fetchPDFLink();
  }, []);

  async function fetchPDFLink() {
    const response = await fetch("/api/link/8");

    if (!response.ok) {
      console.error("Fehler beim Abrufen des Links", response.status);
      return;
    }

    const data = await response.json();
    console.log(data.document);
    setLink(data.document);
  };

  return (
    <div>
      <div className="flex flex-col sticky top-24">
        <Card className="bg-[#EFF7FF] mb-24 mx-4 sm:px-5 lg:mx-20 xl:mx-20 flex flex-col items-center xl:flex-row xl:items-center animate-zoom zoom ">
          <Image
            src="/lift.jpg"
            alt="lift groß"
            width={1920}
            height={1080}
            className="hidden sm:block rounded-xl shadow-xl mt-12 md:my-5 md:mx-5 xl:my-5 sm:h-[300px] sm:w-auto xl:h-[500px] xl:w-auto"
          />
          <div className="sm:text-center xl:text-left">
            <CardHeader className="font-bold text-3xl lg:text-5xl ml-2 md:ml-0 text-orange-500">
              Skilift des SC-Wehingen
            </CardHeader>
            <CardContent className="mb-14 text-lg sm:mb-0">
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
          className="z-20 self-start rounded-xl shadow-lg h-[150px] w-auto sm:hidden mb-5 -mt-44 sm:-mt-80 mx-2 hover:scale-105 duration-150"
        />
      </div>

      <div className="flex flex-col sticky top-10 bg-white">
        <Card className="bg-orange-500 mb-24 mx-4 sm:px-5 lg:mx-20 xl:mx-20 2xl:pl-20 flex flex-col items-center xl:flex-row xl:justify-between xl:items-center animate-zoom zoom">
          <Image
            src="/lauf-erwachsen.png"
            alt="lauf-erwachsene klein"
            width={1920}
            height={1080}
            className="hidden sm:block md:hidden rounded-xl shadow-xl mt-12 md:mx-5 md:my-5 sm:h-[300px] sm:w-auto"
          />
          <div className="sm:text-center md:text-left">
            <CardHeader className="font-bold text-3xl lg:text-5xl ml-2 md:ml-0 text-white xl:pr-28">
              Fossiliuslauf
              <p className="font-normal text-xl ml-0 text-white block">
                &quot;Laufen, wo die Alb am höchsten ist&quot;{" "}
              </p>
            </CardHeader>
            <CardContent className="mb-14 -ml-8 sm:mb-0 w-[10px] hidden xl:block">
            </CardContent>
            <CardContent className="font-bold text-lg text-white"></CardContent>
            <CardContent className="mb-20 text-lg sm:mb-4 block">
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
            className="hidden md:block rounded-xl shadow-xl mt-12 md:my-5 md:mx-5 xl:my-5 w-auto sm:h-[300px] xl:h-[500px]"
          />
        </Card>
        <Image
          src="/laufen.png"
          alt="laufen bild"
          width={1920}
          height={1080}
          className="z-20 self-end rounded-xl shadow-lg h-[150px] w-auto sm:hidden mb-5 -mt-44 sm:-mt-80 mx-2 hover:scale-105 duration-150"
        />
      </div>

      <div className="flex flex-col sticky top-24 bg-white">
        <Card className="bg-[#EFF7FF] mb-0 mx-4 sm:px-5 lg:mx-20 xl:mx-20 flex flex-col items-center xl:flex-row xl:items-center animate-zoom zoom ">
          <Image
            src="/SkihuetteSommerAußen.jpg"
            alt="lift groß"
            width={1920}
            height={1080}
            className="hidden sm:block rounded-xl shadow-xl mt-12 md:my-5 md:mx-5 xl:my-5 sm:h-[300px] sm:w-auto xl:h-[500px] xl:w-auto"
          />
          <div className="flex flex-col sm:text-center xl:text-left">
            <CardHeader className="font-bold text-3xl lg:text-5xl ml-2 md:ml-0 text-orange-500">
              Skihütte des SC-Wehingen
            </CardHeader>
            <CardContent className="mb-14 text-lg sm:mb-0">
              Die gemütliche Skihütte des Skiclubs liegt direkt am Skilift und lädt im Winter zu einer
              Pause nach dem Skifahren ein. Neben warmen Getränken und einer urigen Atmosphäre bietet
              sie auch Platz für gesellige Stunden.
            </CardContent>
            <CardContent className="text-md">
              <p className="font-bold text-lg text-orange-500">
                Mich kann man auch mieten!
              </p>
              Bilder der Hütte sowie den direkten Link zur Mietanfrage finden Sie weiter unten auf dieser Website.
            </CardContent>
            <Link
              href={link}
              target={"_blank"}
              rel="noopener noreferrer"
              className="text-white px-3 py-2 rounded-md flex gap-2 items-center mb-20 sm:mb-4 self-end mr-8 bg-orange-500 hover:bg-orange-600 hover:scale-105 transition duration-200"
            >
              <p>Zu den Mietpreisen</p>
              <FaLongArrowAltRight />
            </Link>
          </div>
        </Card>
        <Image
          src="/SkihuetteSommerAußen.jpg"
          alt="lift bild klein"
          width={1920}
          height={1080}
          className="z-20 self-start rounded-xl shadow-lg h-[150px] w-auto sm:hidden mb-5 -mt-20 sm:-mt-80 mx-2 hover:scale-105 duration-150"
        />
      </div>
    </div>
  )
}

export default BlockCards
