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
  const [showDropdownAstrologer, setShowDropdownAstrologer] = useState(false);
  const [showDropdownKundali, setShowDropdownKundali] = useState(false);
  const [showhorodropDown, setshowhorodropDown] = useState(false);
  const [showAstrodropDown, setshowAstrodropDown] = useState(false);
  const [showCounclrdropDown, setshowCounclrdropDown] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    showbluefn(!showNav);
  };

  const toggleDropdownAstrologer = () => {
    setShowDropdownAstrologer(!showDropdownAstrologer);
    setshowhorodropDown(false);
    setshowCounclrdropDown(false);
    setShowDropdownKundali(false);
  };

  const toggleDropdownKundali = () => {
    setShowDropdownKundali(!showDropdownKundali);
    setShowDropdownAstrologer(false);
    setshowhorodropDown(false);
    setshowCounclrdropDown(false);
  };

  const toggleDropdownCounclr = () => {
    setshowCounclrdropDown(!showCounclrdropDown);
    setShowDropdownAstrologer(false);
    setShowDropdownKundali(false);
  };

  const handleMouseEnterHoro = () => {
    setshowhorodropDown(true);
  };

  const handleMouseLeaveHoro = () => {
    setshowhorodropDown(false);
  };

  const handleMouseEnterAstro = () => {
    setshowAstrodropDown(true);
  };

  const handleMouseLeaveAstro = () => {
    setshowAstrodropDown(false);
  };

  const closeNav = () => {
    setShowNav(false);
    showbluefn(false);
  };

  return (
    <>
      <div className="flex lg:hidden w-full h-auto min-h-20 p-4 items-center justify-between shadow-2xl fixed z-50 bg-black lg:static">
        <div onClick={toggleNav} className="lg:hidden">
          {!showNav ? <HambugerIcon /> : <CrossIcon />}
        </div>
        <div
          className={`${
            showNav ? "opacity-100 scale-100 " : "opacity-0 scale-95 hidden"
          } ${
            showCounclrdropDown ? "pb-56" : "pb-28"
          } w-64 bg-black text-white fixed top-[5rem] sm:top-[6.5rem] md:top-[6.5rem] left-0 transform transition-all duration-300 h-full z-50 overflow-y-scroll`}
        >
          <div
            className={`py-6 h-[35.2rem]  ${showDropdownAstrologer && "h-[49rem]"} ${
              showhorodropDown && "h-[59.7rem]"
            }`}
          >
            <div className="flex flex-col gap-8 text-md font-sans">
              <Link>
                <span
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdownAstrologer}
                >
                  Astrologer
                  <CaretDown />
                </span>
              </Link>
              {showDropdownAstrologer && (
                <div className="flex flex-col gap-5 mt-[-.8rem] shadow-xl py-3">
                  <Link to={"/chat-with-astrologer"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Chat Astrologer
                    </span>
                  </Link>
                  <Link to={"/call-to-astrologer"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Call Astrologer
                    </span>
                  </Link>
                </div>
              )}

              <Link>
                <span
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdownCounclr}
                >
                  AstroCouncellor
                  <CaretDown />
                </span>
              </Link>
              {showCounclrdropDown && (
                <div className="flex flex-col gap-5 mt-[-.8rem] shadow-xl py-3">
                  <Link to={"/chat-astrocouncellor"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Chat AstroCouncellor
                    </span>
                  </Link>
                  <Link to={"/talk-astrocouncellor"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Call AstroCouncellor
                    </span>
                  </Link>
                </div>
              )}

              <Link to={"/book-a-pandit"} onClick={closeNav}>
                <span className="transEffect hover:hover-effect px-5">
                  Book Pandit
                </span>
              </Link>
              <Link>
                <span
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdownKundali}
                >
                  Kundali
                  <CaretDown />
                </span>
              </Link>
              {showDropdownKundali && (
                <div className="flex flex-col gap-5 mt-[-.8rem] shadow-xl py-3">
                  <Link to={"/kundali-matching"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Kundali Matching
                    </span>
                  </Link>
                  <Link to={"/freekundali"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Free Kundali
                    </span>
                  </Link>
                </div>
              )}
              <Link to={"/book-a-pooja"} onClick={closeNav}>
                <span className="hover:hover-effect px-5">Book Pooja</span>
              </Link>

              <Link to={"/shop-on-astro"} onClick={closeNav}>
                <span className="hover:hover-effect px-5">Prasaad</span>
              </Link>
              <Link to={"/blogs"} onClick={closeNav}>
                <span className="transEffect hover:hover-effect px-5">Blog</span>
              </Link>
              <span className="transEffect hover:hover-effect lg:hidden bg-[#f6c000] text-white p-2 text-center rounded mt-32">
                Logout
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/" onClick={closeNav}>
            <img src={AstroCaptionLogo} className="w-[60%]"></img>
          </Link>
        </div>
        <div
          className="flex items-center gap-1 border-[#f6c300] border-2 px-5 py-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-[#EFC013] hover:hover-btn transition-all"
          onClick={() => navigate("/register-page")}
        >
          <AccountLogo />
          Login
        </div>
      </div>
      {/* Web nav */}
      <div>
        <div className="hidden lg:fixed lg:flex w-full h-auto min-h-20 p-4 items-center justify-between shadow-2xl bg-black z-50 text-white">
          <div className="flex items-center lg:w-52 xl:w-[18rem]">
            <Link to="/">
              <img src={AstroCaptionLogo}></img>
            </Link>
          </div>
          <div>
            <div className="flex flex-row gap-4 xl:text-base font-sans xl:gap-10 font-normal lg:gap-5 w-full grow lg:text-sm">
              <div
                className="relative"
                onMouseEnter={handleMouseEnterAstro}
                onMouseLeave={handleMouseLeaveAstro}
              >
                <Link to={"/"}>
                  <div className="transEffect hover:hover-effect flex gap-1">
                    Astrologer
                    <CaretDown />
                  </div>
                </Link>
                {showAstrodropDown && (
                  <div className="absolute bg-black text-white shadow-md rounded-md py-2 top-4 left-0 mt-2 w-40 z-10">
                    <Link to={"/call-to-astrologer"}>
                      <div className="px-4 py-2 transEffect hover:hover-effect">
                        Call Astrologer
                      </div>
                    </Link>
                    <Link to={"/chat-with-astrologer"}>
                      <div className="px-4 py-2 transEffect hover:hover-effect">
                        Chat Astrologer
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={handleMouseEnterHoro}
                onMouseLeave={handleMouseLeaveHoro}
              >
                <Link to={"/kundali"}>
                  <div className="transEffect hover:hover-effect flex gap-1">
                    Kundali
                    <CaretDown />
                  </div>
                </Link>
                {showhorodropDown && (
                  <div className="absolute bg-black text-white shadow-md rounded-md py-2 top-4 left-0 mt-2 w-40 z-10">
                    <Link to={"/kundali-matching"}>
                      <div className="px-4 py-2 transEffect hover:hover-effect">
                        Kundali Matching
                      </div>
                    </Link>
                    <Link to={"/freekundali"}>
                      <div className="px-4 py-2 transEffect hover:hover-effect">
                        Free Kundali
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link to={"/book-a-pooja"}>
                <div className="transEffect hover:hover-effect">
                  Book Pooja
                </div>
              </Link>
              <Link to={"/shop-on-astro"}>
                <div className="transEffect hover:hover-effect">Prasaad</div>
              </Link>
              <Link to={"/blogs"}>
                <div className="transEffect hover:hover-effect">Blog</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-1 border-[#f6c300] border-2 px-5 py-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-[#EFC013] hover:hover-btn transition-all">
            <AccountLogo />
            <Link to={"/register-page"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
