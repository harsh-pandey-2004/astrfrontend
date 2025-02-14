import React, { useEffect, useState } from "react";
import { SearchLogo } from "../../icons/icons";
import ChatCard from "./ChatCard";
import axios from "axios";
import { Link } from "react-router-dom";

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

const sortOptions = [
  { label: "Price High to Low", value: "price_high_to_low" },
  { label: "Price Low to High", value: "price_low_to_high" },
  { label: "Experience High to Low", value: "experience_high_to_low" },
  { label: "Experience Low to High", value: "experience_low_to_high" },
];

const ChatAstro = () => {
  const [astroData, setAstroData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [astroname, setAstroname] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [showFilters, setShowFilters] = useState(false); // State to manage filter popup visibility
  const [showSortOptions, setShowSortOptions] = useState(false); // State to manage sort options popup visibility

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

  const handleSortCriteriaChange = (value) => {
    setSortCriteria(value);
    setShowSortOptions(false); // Close sort options popup after selection
  };

  const filterAstrologers = () => {
    let filtered = astroData.filter((astro) => {
      const matchesName = astro.firstName
        ? astro.firstName.toLowerCase().includes(astroname.toLowerCase())
        : false;
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
      try {
        let response = await axios.get(
          `https://astrobackend.onrender.com/api/astrologer-data`
        );
        console.log(response.data.Astrodata);
        setAstroData(response.data.Astrodata);
        setFilteredData(response.data.Astrodata);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
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

  useEffect(() => {
    // Function to handle scroll behavior when filter popup is shown on small devices
    const handleScrollBehavior = () => {
      if (showFilters || showSortOptions) {
        document.body.style.overflow = "hidden"; // Disable scroll
      } else {
        document.body.style.overflow = "auto"; // Enable scroll
      }
    };

    handleScrollBehavior(); // Initial setup

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto"; // Reset scroll behavior
    };
  }, [showFilters, showSortOptions]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mb-28 w-full h-full flex relative top-20">
      <div className="astrogrid h-screen overflow-y-auto w-full mt-3 pt-14 border-r border-gray-300">
        <h1 className="text-center text-[#f6c300] text-4xl font-bold mb-4 relative">
          <span className="relative z-10">Chat With Astrologer</span>
          <span
            className="absolute inset-0 text-transparent"
            style={{
              background: "#f6c300",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Chat With Astrologer
          </span>
        </h1>
        <h2 className="text-center text-xl text-[#f6c300] font-semibold mb-6 relative">
          <span className="relative z-10">
            Find Your Perfect Astrologer Match
          </span>
          <span
            className="absolute inset-0 text-transparent"
            style={{
              background: "#f6c300",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Find Your Perfect Astrologer Match
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-between px-6 mb-6">
          <div className="flex gap-6 items-center mb-4 sm:mb-0">
            <div className="text-lg font-medium">Available bal: ₹ 0</div>
            <Link to="/recharge">
              <button className="border-[#f6c300] text-[#f6c300] border-2 rounded-md px-4 py-2 text-lg font-semibold hover:bg-[#edcb42] hover:text-white transition duration-300">
                Recharge
              </button>
            </Link>
          </div>

          <div className="relative w-full sm:w-auto">
            <input
              placeholder="Search by name..."
              className="px-4 py-3 rounded-lg bg-white border-2 border-[#f6c300] focus:outline-none focus:ring-2 placeholder:text-[#f6c300] focus:ring-yellow-500 transition-all duration-300 w-full sm:w-64"
              value={astroname}
              onChange={(e) => setAstroname(e.target.value)}
            />
          </div>
        </div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 mb-6">
          {filteredData.map((obj) => (
            <Link to={`/chat-with-astrologer/${obj.slug}`} key={obj._id}>
              <ChatCard obj={obj} type={"chat"} />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-1/3 h-full p-6 hidden lg:block pt-8 ">
        <div className="flex justify-between mb-6">
          <h1 className="font-semibold text-2xl">Filters</h1>
          <button
            className="text-lg text-[#f6c300] hover:underline"
            onClick={clearAllFilters}
          >
            Clear All
          </button>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-medium mb-3">Skills</h2>
          <div className="grid grid-cols-2 gap-2">
            {skillsOptions.map((skill) => (
              <div key={skill} className="flex items-center">
                <input
                  type="checkbox"
                  id={`skill-${skill}`}
                  value={skill}
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                  className="mr-2 accent-yellow-500"
                />
                <label
                  htmlFor={`skill-${skill}`}
                  className="text-gray-700 text-sm"
                >
                  {skill}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-medium mb-3">Language</h2>
          <div className="grid grid-cols-2 gap-2">
            {languageOptions.map((language) => (
              <div key={language} className="flex items-center">
                <input
                  type="checkbox"
                  id={`language-${language}`}
                  value={language}
                  checked={selectedLanguages.includes(language)}
                  onChange={() => handleLanguageChange(language)}
                  className="mr-2 accent-yellow-500"
                />
                <label
                  htmlFor={`language-${language}`}
                  className="text-gray-700 text-sm"
                >
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium mb-3">Gender</h2>
          <div className="grid grid-cols-2 gap-2">
            {genderOptions.map((gender) => (
              <div key={gender} className="flex items-center">
                <input
                  type="radio"
                  id={`gender-${gender}`}
                  name="gender"
                  value={gender}
                  checked={selectedGender === gender}
                  onChange={() => handleGenderChange(gender)}
                  className="mr-2 accent-yellow-500"
                />
                <label
                  htmlFor={`gender-${gender}`}
                  className="text-gray-700 text-sm"
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button
            className="w-full text-[#f6c300] border-[#f6c300] border-2 text-center py-2 rounded-lg shadow-lg hover:text-[#ffff] hover:bg-[#f6c300] transition duration-300"
            onClick={filterAstrologers}
          >
            Apply
          </button>
        </div>
      </div>

      {/* Filter and Sort Buttons for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-300 sm:hidden">
        <div className="flex">
          <button
            className="w-1/2 bg-blue-600 text-white text-center py-2 rounded-lg mr-2 shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={() => setShowFilters(true)}
          >
            Filter
          </button>
          <button
            className="w-1/2 bg-gray-600 text-white text-center py-2 rounded-lg ml-2 shadow-lg hover:bg-gray-700 transition duration-300"
            onClick={() => setShowSortOptions(true)}
          >
            Sort
          </button>
        </div>

        {showFilters && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md overflow-y-auto">
              <div className="flex justify-between mb-6">
                <h1 className="font-semibold text-2xl">Filters</h1>
                <button
                  className="text-xl text-blue-500 hover:underline"
                  onClick={() => setShowFilters(false)}
                >
                  Close
                </button>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  {skillsOptions.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`skill-${skill}`}
                        value={skill}
                        checked={selectedSkills.includes(skill)}
                        onChange={() => handleSkillChange(skill)}
                        className="mr-2 accent-yellow-500"
                      />
                      <label
                        htmlFor={`skill-${skill}`}
                        className="text-gray-700 text-lg"
                      >
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Language</h2>
                <div className="grid grid-cols-2 gap-4">
                  {languageOptions.map((language) => (
                    <div key={language} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`language-${language}`}
                        value={language}
                        checked={selectedLanguages.includes(language)}
                        onChange={() => handleLanguageChange(language)}
                        className="mr-2 accent-yellow-500"
                      />
                      <label
                        htmlFor={`language-${language}`}
                        className="text-gray-700 text-lg"
                      >
                        {language}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Gender</h2>
                <div className="grid grid-cols-2 gap-4">
                  {genderOptions.map((gender) => (
                    <div key={gender} className="flex items-center">
                      <input
                        type="radio"
                        id={`gender-${gender}`}
                        name="gender"
                        value={gender}
                        checked={selectedGender === gender}
                        onChange={() => handleGenderChange(gender)}
                        className="mr-2 accent-yellow-500"
                      />
                      <label
                        htmlFor={`gender-${gender}`}
                        className="text-gray-700 text-lg"
                      >
                        {gender}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  className="w-full bg-blue-600 text-white text-center py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                  onClick={() => {
                    setShowFilters(false);
                    filterAstrologers();
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {showSortOptions && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md overflow-y-auto">
              <div className="flex justify-between mb-6">
                <h1 className="font-semibold text-2xl">Sort Options</h1>
                <button
                  className="text-xl text-blue-500 hover:underline"
                  onClick={() => setShowSortOptions(false)}
                >
                  Close
                </button>
              </div>

              <div>
                {sortOptions.map((option) => (
                  <div key={option.value} className="flex items-center mb-4">
                    <input
                      type="radio"
                      id={`sort-${option.value}`}
                      name="sort"
                      value={option.value}
                      checked={sortCriteria === option.value}
                      onChange={() => handleSortCriteriaChange(option.value)}
                      className="mr-2 accent-yellow-500"
                    />
                    <label
                      htmlFor={`sort-${option.value}`}
                      className="text-gray-700 text-lg"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatAstro;
