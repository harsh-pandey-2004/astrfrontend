import React, { useEffect, useState } from "react";
import { SearchLogo } from "../../icons/icons";
import ChatCard from "./ChatCard";
import axios from "axios";

const skillsOptions = [
  "Face Reading",
  "Kp",
  "Life Coach",
  "Nadi",
  "Numerology",
  "Palmistry",
  "Prashana",
  "Psychic",
  "Psychologist",
  "Tarot",
  "Vastu",
  "Vedic",
];

const languageOptions = [
  "Bengali",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Punjabi",
  "Tamil",
  "Telugu",
  "Urdu",
];

const genderOptions = ["Male", "Female"];

const TalktoAstro = () => {
  const [astroData, setAstroData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [astroname, setAstroname] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  const handleSkillChange = (skill) => {
    setSelectedSkills((prevSkills) => {
      const updatedSkills = prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill];
      localStorage.setItem("selectedSkills", JSON.stringify(updatedSkills));
      return updatedSkills;
    });
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prevLanguages) => {
      const updatedLanguages = prevLanguages.includes(language)
        ? prevLanguages.filter((l) => l !== language)
        : [...prevLanguages, language];
      localStorage.setItem(
        "selectedLanguages",
        JSON.stringify(updatedLanguages)
      );
      return updatedLanguages;
    });
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    localStorage.setItem("selectedGender", gender);
  };

  const handleSortCriteriaChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const filterAstrologers = () => {
    let filtered = astroData.filter((astro) => {
      const matchesName = astro.firstName
        .toLowerCase()
        .includes(astroname.toLowerCase());
      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.some((skill) => astro.Skills.includes(skill));
      const matchesLanguages =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((language) =>
          astro.languages.includes(language)
        );
      const matchesGender =
        selectedGender === "" || astro.gender === selectedGender;

      return matchesName && matchesSkills && matchesLanguages && matchesGender;
    });

    if (sortCriteria === "price_high_to_low") {
      filtered = filtered.sort((a, b) => {
        if (!b.price) return -1;
        if (!a.price) return 1;
        return b.price - a.price;
      });
    } else if (sortCriteria === "price_low_to_high") {
      filtered = filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortCriteria === "experience_high_to_low") {
      filtered = filtered.sort(
        (a, b) => (b.experience || 0) - (a.experience || 0)
      );
    } else if (sortCriteria === "experience_low_to_high") {
      filtered = filtered.sort(
        (a, b) => (a.experience || 0) - (b.experience || 0)
      );
    }

    setFilteredData(filtered);
  };

  const clearAllFilters = () => {
    setAstroname("");
    setSelectedSkills([]);
    setSelectedLanguages([]);
    setSelectedGender("");
    setSortCriteria("");
    setFilteredData(astroData);
    localStorage.removeItem("selectedSkills");
    localStorage.removeItem("selectedLanguages");
    localStorage.removeItem("selectedGender");
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://astro-4-kny6.onrender.com/api/astrologer-data`
      );
      setAstroData(response.data.Astrodata);
      setFilteredData(response.data.Astrodata);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const savedSkills =
      JSON.parse(localStorage.getItem("selectedSkills")) || [];
    const savedLanguages =
      JSON.parse(localStorage.getItem("selectedLanguages")) || [];
    const savedGender = localStorage.getItem("selectedGender") || "";
    setSelectedSkills(savedSkills);
    setSelectedLanguages(savedLanguages);
    setSelectedGender(savedGender);
  }, []);

  useEffect(() => {
    filterAstrologers();
  }, [
    sortCriteria,
    astroname,
    selectedSkills,
    selectedLanguages,
    selectedGender,
  ]);

  return (
    <div className="mb-28 w-full h-full flex">
      <div className="astrogrid h-screen overflow-y-auto w-full mt-3 pt-6 border-r border-gray-300">
        <h1 className="text-center text-yellow-500 text-3xl font-bold">
          Chat With Astrologer
        </h1>
        <h2 className="text-center text-2xl text-yellow-400 font-semibold">
          Find Your Perfect Astrologer Match
        </h2>

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

        <div className="flex justify-end items-center px-6 mt-4">
          <select
            value={sortCriteria}
            onChange={handleSortCriteriaChange}
            className="border border-gray-300 rounded-md px-2 py-1 mr-2"
          >
            <option value="">Sort by</option>
            <option value="price_high_to_low">Price High to Low</option>
            <option value="price_low_to_high">Price Low to High</option>
            <option value="experience_high_to_low">
              Experience High to Low
            </option>
            <option value="experience_low_to_high">
              Experience Low to High
            </option>
          </select>
        </div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4 px-4">
          {filteredData.map((obj) => (
            <ChatCard key={obj._id} obj={obj} type={"chat"} />
          ))}
        </div>
      </div>

      <div className="w-1/3 h-full p-6">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl">Filters</h1>
          <button className="text-xl text-blue-500" onClick={clearAllFilters}>
            Clear All
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium">Skills</h2>
          <div className="grid grid-cols-2">
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
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium">Language</h2>
          <div className="grid grid-cols-2">
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
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium">Gender</h2>
          <div className="grid grid-cols-2">
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
        </div>
      </div>
    </div>
  );
};

export default TalktoAstro;
