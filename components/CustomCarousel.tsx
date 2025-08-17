"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const images = [
    "/Skihuette2.jpg",
    "/bettenNeu.jpg",
    "/bettenNeu2.jpg",
    "/neueFotos1.png",
    "/neueFotos2.png",
    "/neueFotos3.png",
    "/neueFotos4.png",
    "/neueFotos6.png",
    "/neueFotos7.png",
    "/SkihuetteSommer.jpg",
    "/SkihuetteSommerAußen.jpg",
    "/Skihuette-schild.gif",
    "/Skihuette-außen.gif",
    "/Treppenhaus.jpg",
    "/Loipen.jpg",
    "/lift.jpg",
    "/lifthuette.jpg",
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    controls.start({
      x: `-${currentIndex * 100}%`,
    });
  }, [currentIndex, controls]);

  return (
    <div className="w-full max-w-sm">
      <motion.div
        className="flex gap-4 border-2 border-gray-100"
        initial={false}
        animate={controls}
        transition={{ duration: 3.0 }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            width={1920}
            height={1080}
            quality={100}
            className="rounded-lg shadow-lg w-[720px] h-[480px] object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
}
