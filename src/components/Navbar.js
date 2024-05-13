import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AstroCaptionLogo from "../images/Astrocaptain.jpeg";
import {
  AccountLogo,
  CaretDown,
  CrossIcon,
  HambugerIcon,
} from "../icons/icons";

const Navbar = ({ showbluefn }) => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showhorodropDown, setshowhorodropDown] = useState(false);
  const [showAstrodropDown, setshowAstrodropDown] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
    showbluefn(!showNav);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setshowhorodropDown(false);
  };
  const toggleDropdownHoro = () => {
    setshowhorodropDown(!showhorodropDown);
    setShowDropdown(false);
  };
  const toggleDropdownAstro = () => {
    setshowAstrodropDown(!showAstrodropDown);
  };
  return (
    <>
      <div className="flex lg:hidden w-full h-auto min-h-20 p-4 items-center justify-between shadow-2xl fixed z-50 bg-black  lg:static">
        <div onClick={toggleNav} className="lg:hidden">
          {!showNav ? <HambugerIcon /> : <CrossIcon />}
        </div>
        <div
          className={`${
            showNav ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } w-64 bg-black text-white fixed top-[6.5rem] sm:top-[7.6rem] md:top-[7.9rem] left-0 transform transition-all duration-300 h-full z-50 overflow-scroll`}
        >
          <div
            className={`h-1/3 flex bg-gray-200 bg-back bg-cover bg-center bg-no-repeat  w-full overflow-hidden`}
          >
            <div className="font-serif font-normal text-lg  left-3 h-full">
              <p className="text-center font-sans"></p>
              <p className="text-center font-sans"></p>
            </div>
          </div>
          <div
            className={`py-6 h-[35.2rem]  ${showDropdown && "h-[49rem]"} ${
              showhorodropDown && "h-[59.7rem]"
            }`}
          >
            <div className="flex flex-col gap-8  text-md font-sans ">
              <Link>
                <span
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdown}
                >
                  Astrologer
                  <CaretDown />
                </span>
              </Link>
              {showDropdown && (
                <div className="flex flex-col gap-5 mt-[-.8rem] shadow-xl py-3">
                  <Link to={"/kundali-matching"}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Connect Astrologer
                    </span>
                  </Link>
                  <Link to={"/freekundali"}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Call Astrologer
                    </span>
                  </Link>
                </div>
              )}
              <Link to={"/book-a-pandit"}>
                <span className="transEffect hover:hover-effect px-5">
                  Book Pandit
                </span>
              </Link>
              <Link>
                <span
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdown}
                >
                  Kundali
                  <CaretDown />
                </span>
              </Link>
              {showDropdown && (
                <div className="flex flex-col gap-5 mt-[-.8rem] shadow-xl py-3">
                  <Link to={"/kundali-matching"}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Kundali Matching
                    </span>
                  </Link>
                  <Link to={"/freekundali"}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Free Kundali
                    </span>
                  </Link>
                </div>
              )}
              <Link to={"/book-a-pooja"}>
                <span className=" hover:hover-effect px-5">Book Pooja</span>
              </Link>
              <Link to={"/"}>
                <div
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdownHoro}
                >
                  Horoscopes
                  <CaretDown />
                </div>
              </Link>
              {showhorodropDown && (
                <div className=" flex flex-col gap-5 mt-[-.8rem] shadow-xl py-3 z-50">
                  <Link to={"/kundali-matching"}>
                    <div className="px-5 py-2  transEffect hover:hover-effect ">
                      Horoscope 2024
                    </div>
                  </Link>
                  <Link to={"/kundali-matching"}>
                    <div className="trasEffect hover:hover-effect px-5">
                      Today's Horoscope
                    </div>
                  </Link>
                  <Link to={"/kundali-matching"}>
                    <div className="trasEffect hover:hover-effect px-5">
                      Weekly Horoscope
                    </div>
                  </Link>
                  <Link to={"/kundali-matching"}>
                    <div className="trasEffect hover:hover-effect px-5">
                      Monthly Horoscope
                    </div>
                  </Link>
                  <Link to={"/kundali-matching"}>
                    <div className="trasEffect hover:hover-effect px-5">
                      Yearly Horoscope
                    </div>
                  </Link>
                  <Link to={"/kundali-matching"}>
                    <div className="trasEffect hover:hover-effect px-5">
                      Yesterday's Horoscope
                    </div>
                  </Link>
                  <Link to={"/free-kundali"}>
                    <div className="trasEffect hover:hover-effect px-5">
                      Tommorow's Horoscope
                    </div>
                  </Link>
                  <Link to={"/free-kundali"}>
                    <div className="trasEffect hover:hover-effect px-5">
                      Chinese Horoscope
                    </div>
                  </Link>
                </div>
              )}

              <Link to={"/shop-on-astro"}>
                <span className=" hover:hover-effect px-5">Prasaad</span>
              </Link>
              <Link to={"/blogs"}>
                <span className="transEffect hover:hover-effect px-5">
                  Blog
                </span>
              </Link>
              <span className="transEffect hover:hover-effect lg:hidden bg-[#f6c000] text-white p-2 text-center rounded ">
                Logout
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <img src={AstroCaptionLogo} className="w-[60%]  "></img>
        </div>
        <div
          className="flex items-center gap-1 bg-[#f6c003] px-5 py-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-[#EFC013] hover:hover-btn transition-all"
          onClick={() => navigate("/register-page")}
        >
          <AccountLogo />
          Login
        </div>
      </div>
      <div>
        <div className="hidden lg:flex w-full h-auto min-h-20 p-4 items-center justify-between shadow-2xl bg-black text-white">
          <div className="flex items-center lg:w-52 xl:w-[18rem]">
            <img src={AstroCaptionLogo} className=""></img>
          </div>
          <div>
            <div className="flex flex-row gap-4 xl:text-base font-sans xl:gap-10 font-normal lg:gap-5  w-full grow lg:text-sm">
              <div
                className="relative"
                onMouseEnter={toggleDropdownAstro}
                onMouseLeave={toggleDropdownAstro}
              >
                <Link to={"/"}>
                  <div className="transEffect hover:hover-effect flex gap-1">
                    Astrologer
                    <CaretDown />
                  </div>
                </Link>
                {showAstrodropDown && (
                  <div className="absolute bg-black text-white  shadow-md rounded-md py-2 top-4  left-0 mt-2 w-40 z-10">
                    <Link to={"/call-to-astrologer"}>
                      <div className="px-4 py-2  transEffect hover:hover-effect">
                        Call Astrologer
                      </div>
                    </Link>
                    <Link to={"/chat-with-astrologer"}>
                      <div className="px-4 py-2  transEffect hover:hover-effect">
                        Chat Astrologer
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link to={"/book-a-pandit"}>
                <span className="transEffect hover:hover-effect">
                  Book Pandit
                </span>
              </Link>
              <Link to={"/book-a-pooja"}>
                <span className="transEffect hover:hover-effect">
                  Book Pooja
                </span>
              </Link>
              <Link to={"/shop-on-astro"}>
                <span className="transEffect hover:hover-effect">Prasaad</span>
              </Link>
              <div
                className="relative"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <Link to={"/"}>
                  <div className="transEffect hover:hover-effect flex gap-1">
                    Kundali
                    <CaretDown />
                  </div>
                </Link>
                {showDropdown && (
                  <div className="absolute bg-black text-white shadow-md rounded-md py-2 top-4  left-0 mt-2 w-40 z-10">
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2  transEffect hover:hover-effect">
                        Kundali Matching
                      </div>
                    </Link>
                    <Link to={"/freekundali"}>
                      <div className="px-4 py-2  transEffect hover:hover-effect">
                        Free Kundali
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={toggleDropdownHoro}
                onMouseLeave={toggleDropdownHoro}
              >
                <Link to={"/"}>
                  <div className="transEffect hover:hover-effect relative">
                    <div className="flex gap-1">
                      AstroCounsel
                      <CaretDown />
                      <span className="absolute top-[-1.2rem] text-xs bg-orange-300 rounded-full px-2 right-0 text-white py-[1px]">
                        <img
                          src="https://media.tenor.com/H1eQhynQsuAAAAAi/new-post.gif"
                          className="h-5 w-10"
                        ></img>
                      </span>
                    </div>
                  </div>
                </Link>
                {showhorodropDown && (
                  <div className="absolute bg-black text-white  shadow-md rounded-md py-2 top-4  left-0 mt-2 w-52 z-10">
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2  transEffect hover:hover-effect">
                        Call AstroCounseler
                      </div>
                    </Link>
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2  transEffect hover:hover-effect">
                        Chat AstroCounseler
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link to={"/blogs"}>
                <span className="transEffect hover:hover-effect relative">
                  Vastu Making
                  <span className="absolute top-[-1.2rem] text-xs bg-orange-300 rounded-full  right-[-1rem] text-white ">
                    <img
                      src="https://media.tenor.com/H1eQhynQsuAAAAAi/new-post.gif"
                      className="h-5 w-10"
                    ></img>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div
            className="flex items-center gap-1  bg-[#f6c003] px-5 py-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-yellow-500 hover:hover-btn font-semibold"
            onClick={() => navigate("/register-page")}
          >
            <AccountLogo />
            Login
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
