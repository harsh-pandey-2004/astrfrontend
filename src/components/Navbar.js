import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AccountLogo,
  CaretDown,
  CrossIcon,
  HambugerIcon,
} from "../icons/icons";

const Navbar = ({ showbluefn }) => {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showhorodropDown, setshowhorodropDown] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
    showbluefn(!showNav);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setshowhorodropDown(false)
  };
  const toggleDropdownHoro = () => {
    setshowhorodropDown(!showhorodropDown);
    setShowDropdown(false)
  };

  return (
    <>
      <div className="bg-white text-gray-700 py-2 px-4 flex items-center  justify-between   shadow-sm  fixed top-0 w-full z-10 lg:static ">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="orange"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <p>+1 123 456 7890</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="orange"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6l3 5H5a2 2 0 01-2-2V4a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2h-1l3 5h-1a2 2 0 01-2 2H6a2 2 0 01-2-2H2a2 2 0 01-2-2V8a2 2 0 012-2h1z"
            />
          </svg>
          <p>contact@example.com</p>
        </div>
      </div>
      <div className="flex lg:hidden w-full h-auto min-h-14 p-4 items-center justify-between shadow-2xl fixed z-10 bg-gray-100  top-10 lg:static">
        <div onClick={toggleNav} className="lg:hidden">
          {!showNav ? <HambugerIcon /> : <CrossIcon />}
        </div>
        <div
          className={`${
            showNav ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } w-64 bg-gray-100 fixed top-[6.4rem] left-0 transform transition-all duration-300 h-full z-10 overflow-scroll`}
        >
          <div
            className={`h-1/3 flex bg-gray-200 bg-back bg-cover bg-center bg-no-repeat  w-full`}
          >
            <div className="font-serif font-normal text-lg  left-3 h-full">
              <p className="text-center font-sans"></p>
              <p className="text-center font-sans"></p>
            </div>
          </div>
          <div className={`py-6 h-[39rem] ${showDropdown&& "h-[45.5rem]"} ${showhorodropDown&& "h-[63rem]"}`} >
            <div className="flex flex-col gap-8  text-md font-sans ">
              <Link to={"/chat-with-astrologer"}>
                <span className=" hover:hover-effect px-5">
                  Chat with Astrologer
                </span>
              </Link>
              <Link to={"/call-to-astrologer"}>
                <span className=" hover:hover-effect px-5">
                  Call to Astrologer
                </span>
              </Link>
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
                <div className=" flex flex-col gap-5 mt-[-.8rem] shadow-xl py-3">
                  <Link to={"/kundali-matching"}>
                    <div className="px-5 py-2 hover:bg-gray-100 transEffect hover:hover-effect ">
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
              <span className="transEffect hover:hover-effect sm:hidden bg-orange-400 text-white p-2 text-center rounded">
                Logout
              </span>
            </div>
          </div>
          {/* <div></div> */}
        </div>
        <div className="flex  justify-center ">
          <img
            src="https://aws.astrotalk.com/assets/images/astrotalk-header-logo.webp"
            className="w-[60%] h-[60%] "
          ></img>
        </div>
        <div className="flex items-center gap-1 bg-orange-600 px-5 py-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-orange-500 hover:hover-btn transition-all">
          <AccountLogo />
          Login
        </div>
      </div>
      <div>
        <div className="hidden lg:flex w-full h-auto min-h-14 p-4 items-center justify-between shadow-2xl ">
          <div className="flex items-center lg:w-40 xl:w-64">
            <img
              src="https://aws.astrotalk.com/assets/images/astrotalk-header-logo.webp"
              className="w-[70%] h-[70%] "
            ></img>
          </div>
          <div>
            <div className="flex flex-row gap-4 xl:text-base font-sans xl:gap-10 font-normal lg:gap-5  w-full grow lg:text-sm">
              <Link to={"/chat-with-astrologer"}>
                <span className="transEffect hover:hover-effect">
                  Chat with Astrologer
                </span>
              </Link>
              <Link to={"/call-to-astrologer"}>
                <span className="transEffect hover:hover-effect">
                  Call to Astrologer
                </span>
              </Link>
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
                  <div className="absolute bg-white shadow-md rounded-md py-2 top-4  left-0 mt-2 w-40 z-10">
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Kundali Matching
                      </div>
                    </Link>
                    <Link to={"/freekundali"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
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
                  <div className="transEffect hover:hover-effect flex gap-1">
                    Horoscopes
                    <CaretDown />
                  </div>
                </Link>
                {showhorodropDown && (
                  <div className="absolute bg-white shadow-md rounded-md py-2 top-4  left-0 mt-2 w-52 z-10">
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Horoscope 2024
                      </div>
                    </Link>
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Today's Horoscope
                      </div>
                    </Link>
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Weekly Horoscope
                      </div>
                    </Link>
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Monthly Horoscope
                      </div>
                    </Link>
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Yearly Horoscope
                      </div>
                    </Link>
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Yesterday's Horoscope
                      </div>
                    </Link>
                    <Link to={"/free-kundali"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Tommorow's Horoscope
                      </div>
                    </Link>
                    <Link to={"/free-kundali"}>
                      <div className="px-4 py-2 hover:bg-gray-100 transEffect hover:hover-effect">
                        Chinese Horoscope
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link to={"/blogs"}>
                <span className="transEffect hover:hover-effect">Blog</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-orange-600 px-5 py-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-orange-500 hover:hover-btn">
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
