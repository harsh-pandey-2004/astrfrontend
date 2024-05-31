import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchLogo } from "../../icons/icons";
import { PanditData } from "../kundalicomponents/Data";
import AstroCard from "./AstroCard";

const TalktoAstro = () => {
  const [astroData, setAstroData] = useState([]);
  const [astroname, setAstroname] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");

  const skillsOptions = [
    "Vedic Astrology",
    "Numerology",
    "Tarot Reading",
    "Palmistry",
  ];
  const languageOptions = ["English", "Hindi", "Tamil", "Telugu"];
  const genderOptions = ["Male", "Female"];

  const handleSkillChange = (skill) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.includes(language)
        ? prevLanguages.filter((l) => l !== language)
        : [...prevLanguages, language]
    );
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const filterAstrologers = () => {
    setAstroData(() => {
      return PanditData.filter((astro) => {
        const matchesName = astro.name
          .toLowerCase()
          .includes(astroname.toLowerCase());
        const matchesSkills =
          selectedSkills.length === 0 ||
          selectedSkills.some((skill) => astro.skills.includes(skill));
        const matchesLanguages =
          selectedLanguages.length === 0 ||
          selectedLanguages.some((language) =>
            astro.language.includes(language)
          );
        const matchesGender =
          selectedGender === "" || astro.gender === selectedGender;

        return (
          matchesName && matchesSkills && matchesLanguages && matchesGender
        );
      });
    });
  };

  const clearAllFilters = () => {
    setAstroname("");
    setSelectedSkills([]);
    setSelectedLanguages([]);
    setSelectedGender("");
  };
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `http://localhost:3000/api/astrologer-data`
      );
      setAstroData(response.data.Astrodata);
    };
    fetchData();
  }, []);
  return (
    <div className="mb-28 w-full h-full flex relative top-24 lg:top-0">
      {/* Grid */}
      <div className="astrogrid h-screen overflow-y-auto w-full mt-3 pt-6 border-r border-gray-300">
        <h1 className="text-center text-yellow-500 text-3xl font-bold">
          Talk to Astrologer
        </h1>
        <h2 className="text-center text-2xl text-yellow-400 font-semibold">
          Find Your Perfect Astrologer Match
        </h2>

        {/* Recharge and Search Bar */}
        <div className="flex items-center justify-between px-6 mt-12">
          <div className="flex gap-6">
            <div className="text-lg">Available bal: ₹ 0</div>
            <button className="border border-green-600 rounded-md px-4 py-1 text-green-700 hover:text-white hover:bg-green-600 transition duration-500">
              Recharge
            </button>
          </div>

          <div className="relative hidden sm:block">
            <input
              placeholder="Search by name..."
              className="px-3 py-1 rounded bg-white hover:shadow-lg border-2 transition-all text-sans focus:outline-none"
              value={astroname}
              onChange={(e) => setAstroname(e.target.value)}
            />
            <div
              className="absolute right-0 top-[0.15rem] bg-orange-500 py-1 px-2 rounded cursor-pointer hover:bg-orange-400"
              onClick={filterAstrologers}
            >
              <SearchLogo />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid  xs:gridcols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4 px-4">
          {/* {console.log(astroData)} */}
          {astroData &&
            astroData.map((obj) => <AstroCard key={obj.name} obj={obj} />)}
        </div>
      </div>

      {/* Filters */}
      <div className="w-1/3 h-full p-6">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl">Filters</h1>
          <button className="text-xl text-blue-500" onClick={clearAllFilters}>
            clear All
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium">Skills</h2>
          {skillsOptions.map((skill) => (
            <div key={skill} className="flex items-center mt-2">
              <input
                type="checkbox"
                id={`skill-${skill}`}
                value={skill}
                checked={selectedSkills.includes(skill)}
                onChange={() => handleSkillChange(skill)}
                className="mr-2 hover:cursor-pointer"
              />
              <label htmlFor={`skill-${skill}`} className="text-gray-700">
                {skill}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium">Language</h2>
          {languageOptions.map((language) => (
            <div key={language} className="flex items-center mt-2">
              <input
                type="checkbox"
                id={`language-${language}`}
                value={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => handleLanguageChange(language)}
                className="mr-2 hover:cursor-pointer "
              />
              <label htmlFor={`language-${language}`} className="text-gray-700">
                {language}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium">Gender</h2>
          {genderOptions.map((gender) => (
            <div key={gender} className="flex items-center mt-2">
              <input
                type="radio"
                id={`gender-${gender}`}
                name="gender"
                value={gender}
                checked={selectedGender === gender}
                onChange={() => handleGenderChange(gender)}
                className="mr-2 hover:cursor-pointer"
              />
              <label htmlFor={`gender-${gender}`} className="text-gray-700">
                {gender}
              </label>
            </div>
          ))}
        </div>

        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={filterAstrologers}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default TalktoAstro;
