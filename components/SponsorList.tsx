import React from "react";
import Image from "next/image";
import { Sponsor, sponsorLevel, sponsoren, sponsorenByLevel } from "@/lib/sponsoren";

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
  const content = (
    <div className="flex h-32 w-52 items-center justify-center rounded-md bg-white p-4 shadow-md hover:scale-105 duration-150">
      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          alt={`Logo ${sponsor.name}`}
          width={400}
          height={250}
          className="h-full w-full object-contain"
        />
      ) : (
        <span className="text-center text-lg font-bold">{sponsor.name}</span>
      )}
    </div>
  );

  if (!sponsor.website) return content;

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      title={sponsor.name}
    >
      {content}
    </a>
  );
};

const SponsorList = () => {
  if (sponsoren.length === 0) {
    return (
      <div className="mx-4 rounded-md bg-[#EFF7FF] p-8 text-center shadow-md sm:mx-20">
        <p className="text-lg">
          Unsere Sponsoren werden hier in Kürze vorgestellt. Sie möchten den
          Trail unterstützen? Dann melden Sie sich bei uns unter{" "}
          <a
            href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#117;&#115;&#115;&#99;&#104;&#117;&#115;&#115;&#64;&#115;&#99;&#45;&#119;&#101;&#104;&#105;&#110;&#103;&#101;&#110;&#46;&#100;&#101;"
            className="font-bold text-orange-500"
          >
            ausschuss@sc-wehingen.de
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      {sponsorLevel.map((level) => {
        const sponsorenDerStufe = sponsorenByLevel(level.key);
        if (sponsorenDerStufe.length === 0) return null;

        return (
          <div key={level.key} className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-orange-500 sm:text-3xl">
              {level.title}
            </h3>
            <p className="text-center text-lg opacity-70">{level.description}</p>

            <div className="mt-4 flex flex-wrap justify-center gap-6">
              {sponsorenDerStufe.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SponsorList;
