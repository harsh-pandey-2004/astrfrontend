import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";

const specialists = [
  {
    id: 1,
    name: "Dr. Dheeresh Nayak",
    occupation: "Structural Engineer",
    qualifications: [
      "BTECH-Civil Engineering - Madan Mohan Malaviya University of Technology",
      "MTECH-Structural Engineering - Indian Institute of Technology (Banaras Hindu University), Varanasi",
    ],
    achievements: [
      "Seasoned Structural Consultant with extensive experience in designing various types of structures.",
      "Expertise includes design of steel structures, water tanks, industrial facilities, commercial multistory, and high-rise buildings.",
    ],
    experience: "15 years",
    image:
      "https://media.licdn.com/dms/image/C5603AQGVCu9_gSh4JA/profile-displayphoto-shrink_800_800/0/1517349707719?e=1727913600&v=beta&t=QwJYKPy6ql94AMZd17yP_d1ik1k_H1ICZEdE6KPqxTs",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Ayush Tiwari",
    occupation: "Structural Engineer",
    qualifications: [
      "BTECH-Civil Engineering - Motilal Nehru National Institute Of Technology",
    ],
    achievements: [
      "Project Management: Managed a 35km road project and a district shopping complex, ensuring compliance, timely delivery, and quality standards.",

      "      Maintenance and Construction: Handled structural maintenance and construction projects, focusing on longevity and safety.",
    ],
    experience: "10 years",
    image:
      "https://media.licdn.com/dms/image/C5603AQGVCu9_gSh4JA/profile-displayphoto-shrink_800_800/0/1517349707719?e=1727913600&v=beta&t=QwJYKPy6ql94AMZd17yP_d1ik1k_H1ICZEdE6KPqxTs",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

const SpecialistCard = ({ specialist }) => (
  <>
    <div className="bg-white p-8 md:px-12 md:py-5 w-full md:w-4/5 flex flex-col md:flex-row gap-8 items-center shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={specialist.image}
        alt={specialist.name}
        className=" w-32 h-full md:w-[30%] rounded-full md:h-[30%] border-4 "
      />

      <div className="text-left">
        <h2 className="text-2xl font-semibold text-[#f6c300] mb-2">
          {specialist.name}
        </h2>
        <p className="text-lg text-gray-700 mb-1">
          <strong>Occupation:</strong> {specialist.occupation}
        </p>

        {/* Enhanced Qualifications Section with Icon */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaCertificate className="mr-2 text-yellow-500" /> Qualifications
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {specialist.qualifications.map((qual, index) => (
              <li
                key={index}
                className="text-[#f6c300] bg-black p-2 rounded-md shadow-sm flex items-center"
              >
                <FaCertificate className="mr-2 text-[#f6c300]" /> {qual}
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Achievements Section with Icon */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaTrophy className="mr-2 text-yellow-500" /> Achievements
          </h3>
          <ul className=" pl-5 space-y-2">
            {specialist.achievements.map((ach, index) => (
              <li
                key={index}
                className="text-[#f6c300] bg-black p-2 rounded-md shadow-sm flex items-center"
              >
                <FaTrophy className="mr-2 w-5 h-5 c" /> {ach}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg text-gray-700 mb-1">
          <strong>Experience:</strong> {specialist.experience}
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={specialist.socialLinks.linkedin}
            className="text-xl text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href={specialist.socialLinks.instagram}
            className="text-xl text-pink-600 hover:text-pink-800 transition"
          >
            <FaInstagram />
          </a>
          <a
            href={specialist.socialLinks.twitter}
            className="text-xl text-blue-400 hover:text-blue-600 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  </>
);

const OurSpecialists = () => {
  return (
    <div className="w-full mx-auto bg-gray-50 py-10">
      <h1 className="text-5xl font-serif text-center text-black mb-8">
        Our <span className="text-[#f6c300]">Specialists</span>
      </h1>
      <div className="flex flex-col items-center space-y-10">
        {specialists.map((specialist) => (
          <SpecialistCard key={specialist.id} specialist={specialist} />
        ))}
      </div>
    </div>
  );
};

export default OurSpecialists;
