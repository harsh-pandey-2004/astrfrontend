import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AstroCaptionLogo from "../images/Astrocaptain.jpeg";
import { HiCurrencyRupee } from "react-icons/hi2";
import {
  AccountLogo,
  CaretDown,
  CrossIcon,
  HambugerIcon,
} from "../icons/icons";

const Navbar = ({ showbluefn}) => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showhorodropDown, setshowhorodropDown] = useState(false);
  const [showAstrodropDown, setshowAstrodropDown] = useState(false);
  const [showCounclrdropDown, setshowCounclrdropDown] = useState(false);

  const[userDetails,setUserDetails]=useState({});

  const toggleNav = () => {
    setShowNav(!showNav);
    showbluefn(!showNav);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDropdown1(false);
    setShowDropdown2(false);
    setshowhorodropDown(false);
    setshowCounclrdropDown(false);
  };

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown(false);
    setshowhorodropDown(false);
    setShowDropdown2(false);
    setshowCounclrdropDown(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false);
    setShowDropdown(false);
    setshowhorodropDown(false);
    setshowCounclrdropDown(false);
  };

  const toggleDropdownCounclr = () => {
    setshowCounclrdropDown(!showCounclrdropDown);
    setShowDropdown(false);
    setShowDropdown2(false);
    setShowDropdown1(false);
    setshowhorodropDown(false);
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

  const handleClick = () => {
    window.location.href = "/";
  };

 
  // const storeduserDetails=  localStorage.getItem('userdetails');
 
  //   const userDetails=storeduserDetails!=null && JSON.parse(storeduserDetails);
  //   console.log(userDetails);
 
const LogOutHandler = ()=>{
 
  localStorage.clear();
  
  window.location.href="/";
 
}


useEffect(()=>{

    const fetchUserDetails=async()=>{
       
      if( localStorage.length!=0 && localStorage.getItem('userSlug')!=null){
              const userSlug=localStorage.getItem('userSlug');
              console.log(userSlug);

              try{
              const res=await fetch(`https://astrobackend.onrender.com/api/userDetails/${userSlug}`);
              const userDetails=await res.json();
              console.log(userDetails);
              console.log(userDetails.existingUser);
              setUserDetails(userDetails.existingUser);
            }catch(err){console.log(err);}

      }


    }

    if(localStorage.length!=0 && localStorage.getItem('userId')!=null){fetchUserDetails();}

  });






 

  return (
    <>
      <div className="flex lg:hidden w-full h-auto min-h-20 p-4 items-center justify-between shadow-2xl fixed z-50 bg-black lg:static">
        <div onClick={toggleNav} className="lg:hidden">
          {!showNav ? <HambugerIcon /> : <CrossIcon />}
        </div>
        <div
          className={`${
            showNav ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
          } ${
            showCounclrdropDown ? "pb-56" : "pb-28"
          } w-64 bg-black text-white fixed top-[5rem] sm:top-[6.5rem] md:top-[6.5rem] left-0 transform transition-all duration-300 h-full z-50 overflow-y-auto`}
        >
          <div className="py-6 h-full flex flex-col">
            <div className="flex flex-col gap-8 text-md font-sans flex-grow">
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
                <div className="flex flex-col gap-5 shadow-xl py-3">
                  <Link to={"/chat-astrocouncellor"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Chat Astrologer
                    </span>
                  </Link>
                  <Link to={"/talk-astrocouncellor"} onClick={closeNav}>
                    <span className="trasEffect hover:hover-effect px-5">
                      Call Astrologer
                    </span>
                  </Link>
                </div>
              )}

              {/*fixing the astrologercoucelor*/}
              <Link>
                <span
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdown2}
                >
                  AstroCouncellor
                  <CaretDown />
                </span>
              </Link>
              {showDropdown2 && (
                <div className="flex flex-col gap-5 shadow-xl py-3">
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

              {/*Fix end here*/}

              <Link to={"/book-a-pandit"} onClick={closeNav}>
                <span className="transEffect hover:hover-effect px-5">
                  Book Pandit
                </span>
              </Link>
              <Link>
                <span
                  className="trasEffect hover:hover-effect px-5 flex justify-between"
                  onClick={toggleDropdown1}
                >
                  Kundali
                  <CaretDown />
                </span>
              </Link>
              {showDropdown1 && (
                <div className="flex flex-col gap-5 shadow-xl py-3">
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
                <span className="transEffect hover:hover-effect px-5">
                  Vastu
                </span>
              </Link>
            </div>
            <span className="transEffect hover:hover-effect lg:hidden bg-[#f6c000] text-white p-2 text-center font-bold rounded mx-1 my-3">
              Logout
            </span>
          </div>
        </div>
        <div className="flex justify-center ">
          <img
            onClick={handleClick}
            src={AstroCaptionLogo}
            className="w-[90%] h-[100%]"
          ></img>
        </div>
        <div
          className="flex items-center gap-1 border-[#f6c300] border-2 font-sans text-sm p-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-[#EFC013] hover:hover-btn transition-all"
          onClick={() => navigate("/register-page")}
        >
          <AccountLogo />
          Login
        </div>
      </div>

      {/* Web nav */}
      <div>
        <div className="hidden lg:fixed lg:flex w-full h-auto min-h-20 p-4  items-center justify-between shadow-2xl bg-black z-50 text-white">
          <div className="flex items-center lg:w-52 xl:w-[18rem] ">
            <Link to="/">
              <img src={AstroCaptionLogo} className=""></img>
            </Link>
          </div>
          <div>
            <div className="flex  flex-row gap-4 xl:text-base font-sans xl:gap-10 font-normal lg:gap-5  w-full grow lg:text-sm">
              <div
                className="relative"
                onMouseEnter={handleMouseEnterAstro}
                onMouseLeave={handleMouseLeaveAstro}
              >
                <Link to={"/"}>
                  <div className="transEffect hover:hover-effect flex gap-1 ">
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
                onMouseEnter={handleMouseEnterHoro}
                onMouseLeave={handleMouseLeaveHoro}
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
                    <Link to={"/talk-astrocouncellor"}>
                      <div className="px-4 py-2  transEffect hover:hover-effect">
                        Call AstroCounseler
                      </div>
                    </Link>
                    <Link to={"/chat-astrocouncellor"}>
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


          {localStorage.getItem("userId") ? <div className="rounded-full outline outline-yellow-400 bg-yellow-400 flex flex-col relative group"> <AccountLogo className="h-6 w-6 "/> 

           {/* user modal  */}
          <div className="absolute h-fit w-64 top-7 right-0 z-10   bg-black hidden group-hover:flex flex-col cursor-pointer text-yellow-500">
        <Link to="/profile-settings"> 
          <div className="flex flex-col items-center gap-1  py-4 border-b-2 border-b-yellow-400 h-fit w-full bg-gray-800">
              <img src="https://aws.astrotalk.com/assets/images/profile_pic.webp"
              className="rounded-full h-20 w-20 "/>
            <p >{userDetails && userDetails.name}</p> 
              <p className="text-sm"><span>+91</span>{ userDetails && userDetails.mobile}</p>
           </div>
          </Link>
              
              {/* dashboard Links */}

          <div className="flex flex-col gap-2  text-start  text-white">
              <Link to="/notifications" className="hover:bg-yellow-400 hover:text-black transition pl-6 pb-1 pt-1">Notifications</Link>
              <Link to="/my-wallet"  className="hover:bg-yellow-400 hover:text-black transition flex items-center pl-6 py-1">Wallet Transactions  <span className="text-sm  flex items-center pl-8"><HiCurrencyRupee />20</span></Link>
              <Link to="/order-history"  className="hover:bg-yellow-400 hover:text-black transition pl-6 py-1">Order History</Link>
              <Link to="customer-support" className="hover:bg-yellow-400 hover:text-black transition pl-6 py-1">Customer Support Chat</Link>
              <Link className="hover:bg-yellow-400 hover:text-black transition pl-6 py-1" onClick={LogOutHandler}>Logout</Link>
              <Link className="hover:bg-yellow-400 hover:text-black transition pl-6 py-1">Logout From Other Devices</Link>
          </div>

          
         



          
          
          </div>


          </div>
           :
          <div
          className="flex items-center gap-1  border-[#f6c003] border-2 px-5 py-1 rounded-full cursor-pointer text-white hover:transform hover:scale-105 hover:bg-yellow-500 hover:hover-btn font-semibold"
          onClick={() => navigate("/register-page")}
        >
          <AccountLogo />
          Login
        </div> }
         
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
