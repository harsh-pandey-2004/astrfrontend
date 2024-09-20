import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/authcomponents/Login";
import RegisterForm from "./components/authcomponents/Sign-up";
import VerifyPhone from "./components/authcomponents/VerificationPop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BlogPage from "./Pages/BlogPage";
import BookPandit from "./Pages/BookPandit";
import BookPooja from "./Pages/BookPooja";
// import CallwithAstrologer from "./Pages/CallwithAstrologer";
import ChatWithAstrologer from "./Pages/ChatWithAstrologer";
import FreeKundali from "./Pages/FreeKundali";
import Transactions from "./components/dashboard/pages/Transactions";
import OrderHistory from "./components/dashboard/pages/OrderHistory";
import Support from "./components/dashboard/pages/Support";
import ChatHistory from "./components/dashboard/pages/ChatHistory";
import HomePage from "./Pages/HomePage";
import KundliMatching from "./Pages/Kundalimatching";
import ShopAstro from "./Pages/ShopAstro";
import Dashboard from "./components/dashboard/components/Dashboard";
import Bookpoojasub from "./components/Bookpoojasub";
import PujaCartForm from "./components/BookingForm";
// import PanditPage from "./Pages/PanditPortal/PanditPage";
import PanditRegisterForm from "./components/panditcomponents/Sign-up";
import PanditLoginForm from "./components/panditcomponents/Login";
import PanditVerifyPhone from "./components/panditcomponents/VerificationPop";
import PoojaPandit from "./components/BookaPanditComponents/PoojaPandit";
import BookPanditForm from "./components/BookaPanditComponents/BookPanditForm";
import ProfileForm from "./components/panditcomponents/MakeProfile";
import MainPanditDash from "./components/panditcomponents/MainDashPandit";
import TalktoAstro from "./components/Astrocomponents/TalktoAstro";
import AstrologerLoginForm from "./components/astrologercomponents/Login";
import AstrologerRegistrationForm from "./components/astrologercomponents/Sign-up";
import AstrologerVerifyPhone from "./components/astrologercomponents/VerificationPop";
import AstrologerProfileForm from "./components/astrologercomponents/SetProfileForm";
import ChatWithAstro from "./components/Astrocomponents/ChatWithAstro";
import SingleAstro from "./components/Astrocomponents/SingleAstro";
import PanditSchedule from "./Pages/PanditDash/panditdashcomponents/PanditSchedule";
import TabComponent from "./components/kundalicomponents/generateComponents/TabComponent";
import AstroCouncellorRegistrationForm from "./components/AstroCounceler/Sign-up";
import AstroCouncellForm from "./components/AstroCounceler/Login";
import AstroCouncellorVerify from "./components/AstroCounceler/VerificationPop";
import AstroCouncellorProfileForm from "./components/AstroCounceler/AstroCouncelProfileForm";
import TalktoAstroCouncellor from "./components/AstroCounceler/TalkwithConcellor";
import ChattoAstroCouncellor from "./components/AstroCounceler/ChatwithCouncellor";
import MainDashAstro from "./components/astrologercomponents/Maindashastro";
import MaindashCouncellor from "./components/AstroCounceler/MaindashCouncellor";
import HowToRead from "./components/kundalicomponents/KnowMore/HowToRead";
import PlanetaryTab from "./components/kundalicomponents/generateComponents/firstSection.js/PlanetaryTab";
import PlanetsInAstro from "./components/kundalicomponents/KnowMore/PlanetsInAstro";
import ReadPlanets from "./components/kundalicomponents/KnowMore/ReadPlanets";
import MatchReport from "./components/kundalimatching components/Report/MatchReport";
import RangeSlider from "./components/kundalimatching components/Report/RangeSlider";
import SingleTalkAstro from "./components/Astrocomponents/SingleTalkAstro";
import SingleCoun from "./components/AstroCounceler/SingleCoun";
import SingleTalkCoun from "./components/AstroCounceler/SingleTalkCoun";
import Prasaad from "./Pages/Prasaad";
import VastuMainPage from "./Pages/VastuPage/VastuMainPage";
import VastuIndiPage from "./Pages/VastuPage/VastuIndiPage";
import VastuTypePage from "./Pages/VastuPage/VastuTypePage";
import PricingPage from "./Pages/VastuPage/PricingPage";
import Notifications from "./components/UserDashComponents/Notifications";
import Wallet from "./components/UserDashComponents/Wallet";
import History from "./components/UserDashComponents/OrderHistory";
import CustomerSupport from "./components/UserDashComponents/Support";
import Recharge from "./components/UserDashComponents/Recharge";
import PaymentDetails from "./components/UserDashComponents/PaymentDetails";
import ProfileSettings from "./components/UserDashComponents/ProfileSettings";
import VastuForm from "./Pages/VastuPage/VastuForm";
import GarhPooja from "./Pages/VastuPage/GarhPooja";
import Pitrapaksh from "./Pages/Pitrapaksh";
import TodayHoroscope from "./Pages/TodayHoroscope";
import { BlogDetails } from "./Pages/BlogDetails";
import BookPanditSub from "./components/BookaPanditComponents/BookPanditSub/BookPanditSub";
import PanditBookingForm from "./components/BookaPanditComponents/BookPanditSub/PanditBookingForm";
import PanditPackages from "./components/BookaPanditComponents/BookPanditSub/PanditPackages";


function App() {
  const [showblur, setshowBlur] = useState(false);
  function showbluefn(status) {
    setshowBlur(status);
  }
  const [IsmenuClicked, setIsMenuClicked] = useState(false);
  function ModalHandler() {
    setIsMenuClicked(!IsmenuClicked);
  }

 const [editProfile,setEditProfile]=useState(false);

 const handleProfile=()=>{
  setEditProfile(!editProfile);
 }

  return (
    <div className="w-full h-fit relative ">
      <BrowserRouter>
        <Navbar showbluefn={showbluefn} editProfile={editProfile}/>
        <Routes>
          <Route path="/" element={<HomePage showblur={showblur} />} />
          <Route path="/allblogs" element={<BlogPage/>}/>
          <Route path="blogdetails/:id" element={<BlogDetails/>}/>

                {/* user dashpages */}
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/my-wallet" element={<Wallet/>}/>
          <Route path="/order-history" element={<History/>}/>
          <Route path="/customer-support" element={<CustomerSupport/>}/>
          <Route path="/recharge" element={<Recharge/>}/>
          <Route path="/recharge/paymentdetails" element={<PaymentDetails/>}/>
          <Route path="/profile-settings" element={<ProfileSettings handleProfile={handleProfile} />}/>






          <Route path="/chat-with-astrologer" element={<ChatWithAstro />} />
          <Route path="/call-to-astrologer" element={<TalktoAstro />} />
          <Route path="/chat-with-astrologer/:slug" element={<SingleAstro />} />
          <Route
            path="/call-to-astrologer/:slug"
            element={<SingleTalkAstro />}
          />
          <Route path="/pitrpaksh" element={<Pitrapaksh />} />
          <Route path="/shop-on-astro" element={<Prasaad />} />
          <Route
            path="/book-a-pooja"
            element={
              <BookPooja IsmenuClicked={IsmenuClicked} showblur={showblur} />
            }
          />
          <Route
            path="/book-a-pandit"
            element={
              <BookPandit IsmenuClicked={IsmenuClicked} showblur={showblur} />
            }
          />
          <Route path="/book-a-pandit/:slug" element={<BookPanditSub/>} />
          <Route path="/pandit-packages" element={<PanditPackages/>}/>
          <Route path="/pandit-booking" element={<PanditBookingForm/>}/>

          <Route path="/poojapandit/:id" element={<PoojaPandit />}/>

          <Route path="/blogs" element={<VastuMainPage />} />
          <Route path="/panditdashboard/:id/*" element={<MainPanditDash />} />
          <Route
            path="/panditdashboard/:id/shedule"
            element={<PanditSchedule />}
          ></Route>
          <Route path="/panditsetprofile/:id" element={<ProfileForm />} />

          {/* //kundali ROutes */}
          <Route path="/freekundali" element={<FreeKundali />}></Route>
          <Route
            path="/freekundali/basic-details"
            element={<TabComponent />}
          ></Route>

          <Route path="/how-to-read" element={<HowToRead />} />
          <Route path="/planets-in-astro" element={<PlanetsInAstro />} />
          <Route path="/read-planets" element={<ReadPlanets />} />

          {/* //// */}
          <Route path="/kundali-matching" element={<KundliMatching />}></Route>
          <Route path="/match-report" element={<MatchReport />} />

          <Route path="/pooja-booking" element={<PujaCartForm />}></Route>
          <Route path="/register-page" element={<RegisterForm />}></Route>
          <Route path="/book-a-pooja/:id" element={<Bookpoojasub />}></Route>
          <Route path="/dashboard/:id" element={<Dashboard />}>
            <Route path="Transactions" element={<Transactions />} />
            <Route path="OrderHistory" element={<OrderHistory />} />
            <Route path="Support" element={<Support />} />
            <Route path="ChatHistory" element={<ChatHistory />} />
          </Route>
          <Route
            path="/panditregister"
            element={<PanditRegisterForm />}
          ></Route>
          <Route path="/loginpandit" element={<PanditLoginForm />}></Route>
          <Route
            path="/panditregister/panditverify-phone/:id"
            element={<PanditVerifyPhone />}
          ></Route>

          {/* Not changed */}
          <Route
            path="/poojapandit/:poojaId/pandit/:panditId/date/:date/time/:time"
            element={<BookPanditForm />}
          ></Route>

          <Route
            path="/register-page/verify-phone/:id"
            element={<VerifyPhone/>}
          ></Route>
          <Route path="/loginform" element={<LoginForm/>}></Route>

          {/* //AstroRoutes */}
          <Route
            path="/astrologerlogin"
            element={<AstrologerLoginForm />}
          ></Route>
          <Route
            path="/astrologerdashboard/:id/*"
            element={<MainDashAstro />}
          />
          <Route
            path="/astrologerregister"
            element={<AstrologerRegistrationForm />}
          ></Route>
          <Route
            path="/astrologerregister/astrologerverify-phone/:id"
            element={<AstrologerVerifyPhone />}
          ></Route>
          <Route
            path="/astrologersetprofile/:id"
            element={<AstrologerProfileForm />}
          ></Route>

          {/* //AstroCouncellor Routes */}
          <Route
            path="/astrocouncellorlogin"
            element={<AstroCouncellForm />}
          ></Route>
          <Route
            path="astrocouncellordashboard/:id/*"
            element={<MaindashCouncellor />}
          />
          <Route
            path="/astrocouncellorregister"
            element={<AstroCouncellorRegistrationForm />}
          ></Route>
          <Route
            path="/astrocouncellorregister/astrocouncellorverify-phone/:id"
            element={<AstroCouncellorVerify />}
          ></Route>
          <Route
            path="/astrocouncellor/:id"
            element={<AstroCouncellorProfileForm />}
          ></Route>
          <Route
            path="/talk-astrocouncellor"
            element={<TalktoAstroCouncellor />}
          ></Route>
          <Route
            path="/chat-astrocouncellor"
            element={<ChattoAstroCouncellor />}
          ></Route>

          <Route
            path="/chat-to-astrocouncellor/:slug"
            element={<SingleCoun />}
          ></Route>
          <Route
            path="/talk-to-astrocouncellor/:slug"
            element={<SingleTalkCoun />}
          ></Route>
          {/* //vastu routes */}
          <Route path="/vastuType/:id" element={<VastuIndiPage />}></Route>
          <Route path="/vastuType" element={<VastuTypePage />}></Route>
          <Route path="/vastupricing" element={<PricingPage />}></Route>
          <Route path="/grahpooja" element={<GarhPooja />}></Route>
          <Route path="/contact" element={<VastuForm />} />
          <Route path="/todayhoroscope" element={<TodayHoroscope/>}/>
        </Routes>

        <Footer showblur={showblur} />
      </BrowserRouter>
    </div>
  );
}

export default App;
