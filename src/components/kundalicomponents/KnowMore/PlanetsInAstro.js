import React from "react";
import PlanetHead from "./PlanetHead";
import Vedio6 from "../../../vedios/vedio6.mp4";
import { RxDotFilled } from "react-icons/rx";
import sunFactImage from "../../../images/sun-fact.webp";
import MoonFactImage from "../../../images/moon-fact.webp";
import MarsFactImage from "../../../images/mars-fact.webp";
import MercuryFactImage from "../../../images/mercury-fact.webp";
import JupiterFactImage from "../../../images/jupiter-fact.webp";
import VenusFactImage from "../../../images/venus-fact.webp";
import SaturnFactImage from "../../../images/saturn-fact.webp";
import NorthFactImage from "../../../images/north-node.webp";
import SouthFactImage from "../../../images/south-node.webp";

const PlanetsInAstro = () => {
  return (
    <div className="relative top-20 lg:top-16 mb-12">
      <PlanetHead />
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-center">
          Introduction to Planets in Astrology
        </h1>
        <p className="py-6 px-4 md:px-20">
          Step 1 is the early on step. So in step 1 of learning how to peruse
          your kundli, we are going to learn about planets and houses in
          astrology as they are the soul and heart of any kundli along with
          signs in the kundli. Each planet and house in astrology signifies
          something or other. They carry particular characteristics, which may
          have either positive or negative effects on the native. In astrology,
          planets, signs, and houses do not work in isolation; they are all
          interdependent and contribute to bringing about changes in a person's
          life.
        </p>
        <div className="px-4 md:px-20">
          <p className="text-2xl font-semibold">
            The Nine Planets in Astrology are:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { src: sunFactImage, alt: "Sun Facts", title: "Sun Facts", description: "The Sun in astrology represents identity, vitality, and core personality, influencing one's purpose, ambitions, and central life themes." },
              { src: MoonFactImage, alt: "Moon Facts", title: "Moon Facts", description: "The Moon in astrology represents emotions, instincts, and inner self, influencing moods, subconscious, and personal needs." },
              { src: MarsFactImage, alt: "Mars Facts", title: "Mars Facts", description: "Mars in astrology represents action, energy, and desire, influencing drive, ambition, and assertiveness in achieving goals." },
              { src: MercuryFactImage, alt: "Mercury Facts", title: "Mercury Facts", description: "Mercury in astrology represents communication, intellect, and reasoning, influencing thought processes, speech, and adaptability." },
              { src: JupiterFactImage, alt: "Jupiter Facts", title: "Jupiter Facts", description: "Jupiter in astrology represents growth, expansion, and luck, influencing optimism, wisdom, and opportunities for success." },
              { src: VenusFactImage, alt: "Venus Facts", title: "Venus Facts", description: "Venus in astrology represents love, beauty, and relationships, influencing romance, aesthetics, and personal values." },
              { src: SaturnFactImage, alt: "Saturn Facts", title: "Saturn Facts", description: "Saturn in astrology represents discipline, responsibility, and challenges, influencing structure, perseverance, and personal growth through hardships." },
              { src: NorthFactImage, alt: "North Node (Rahu) Facts", title: "North Node (Rahu) Facts", description: "Rahu in astrology represents ambition, obsession, and material desires, influencing unconventional paths and transformative experiences." },
              { src: SouthFactImage, alt: "South Node (Ketu) Facts", title: "South Node (Ketu) Facts", description: "Ketu in astrology represents detachment, spirituality, and past karma, influencing introspection, liberation, and mystical experiences." }
            ].map(({ src, alt, title, description }) => (
              <div className="w-full" key={alt}>
                <div className="group bg-black w-full h-56 flex items-center justify-center">
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-full group-hover:scale-105 transition duration-500 h-52 w-52"
                  />
                </div>
                <p className="text-lg font-bold pt-1">{title}</p>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-12">
          <h1 className="text-2xl font-semibold text-center">
            Astrological Signs and Their Meanings
          </h1>
          <p className="py-6 px-4 md:px-20">
            Now that we have learned about the 9 planets in astrology and their
            meanings, we should look at the 12 signs in astrology. Signs, planets,
            and houses in astrology share a close relationship. Each zodiac sign
            is ruled by a planet, and thus, the planet brings its characteristics
            to the sign. For example, the zodiac sign Taurus is ruled by Venus.
            Venus characteristics (as mentioned above), such as love and relationship,
            make Taurus natives romantic and sensual. Signs in astrology have much
            more to offer when it comes to learning how to read a kundli. However,
            we will learn that in another lesson.
          </p>
          <p className="px-4 md:px-20 text-xl font-semibold">
            Here are 12 zodiac signs and the planets overseeing them:
          </p>

          <div className="flex flex-col-reverse md:flex-row">
            <div className="flex justify-between items-center w-full md:w-1/2">
              <div className="pt-4 pl-4 md:pl-20">
                <p className="font-semibold text-lg">Zodiac signs</p>
                <p className="pt-2">Aries</p>
                <p className="pt-2">Taurus</p>
                <p className="pt-2">Gemini</p>
                <p className="pt-2">Cancer</p>
                <p className="pt-2">Leo</p>
                <p className="pt-2">Virgo</p>
                <p className="pt-2">Libra</p>
                <p className="pt-2">Scorpio</p>
                <p className="pt-2">Sagittarius</p>
                <p className="pt-2">Capricorn</p>
                <p className="pt-2">Aquarius</p>
                <p className="pt-2">Pisces</p>
              </div>
              <div className="pt-4 px-4 md:px-20">
                <p className="font-semibold text-lg">Planets overseeing</p>
                <p className="pt-2">Mars</p>
                <p className="pt-2">Venus</p>
                <p className="pt-2">Mercury</p>
                <p className="pt-2">Moon</p>
                <p className="pt-2">Sun</p>
                <p className="pt-2">Mercury</p>
                <p className="pt-2">Venus</p>
                <p className="pt-2">Mars</p>
                <p className="pt-2">Jupiter</p>
                <p className="pt-2">Saturn</p>
                <p className="pt-2">Saturn</p>
                <p className="pt-2">Jupiter</p>
              </div>
            </div>

            <div className="md:w-1/2 px-4 md:pr-16">
              <video autoPlay loop muted className="pt-8 md:pt-20 rounded-md">
                <source src={Vedio6} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-center">
            Astrological Houses and Their Meanings
          </h1>
          <p className="py-6 px-4 md:px-20">
            Have you seen those kundli charts or diagrams, which really look
            like some kind of rocket science to decipher? The chart, also
            known as a birth chart, is composed of 12 different segments,
            also called Houses. Each house represents different aspects of
            a person’s life. Let's take a quick look at these houses and
            understand what they represent:
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanetsInAstro;
