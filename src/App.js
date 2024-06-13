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
function App() {
  const [showblur, setshowBlur] = useState(false);
  function showbluefn(status) {
    setshowBlur(status);
  }
  const [IsmenuClicked, setIsMenuClicked] = useState(false);
  function ModalHandler() {
    setIsMenuClicked(!IsmenuClicked);
  }
  return (
    <div className="w-full h-fit relative">
      <BrowserRouter>
        <Navbar showbluefn={showbluefn} />
        <Routes>
          <Route path="/" element={<HomePage showblur={showblur} />} />
          <Route path="/chat-with-astrologer" element={<ChatWithAstro />} />
          <Route path="/call-to-astrologer" element={<TalktoAstro />} />
          <Route path="/call-to-astrologer/:id" element={<SingleAstro />} />
          <Route
            path="/shop-on-astro"
            element={
              <ShopAstro IsmenuClicked={IsmenuClicked} showblur={showblur} />
            }
          />
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

          <Route path="/poojapandit/:id" element={<PoojaPandit />} />

          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/panditdashboard/:id" element={<MainPanditDash />} />
          <Route
            path="/panditdashboard/:id/shedule"
            element={<PanditSchedule />}
          ></Route>
          <Route path="/PanditsetProfile/:id" element={<ProfileForm />} />

          {/* //kundali ROutes */}
          <Route path="/freekundali" element={<FreeKundali />}></Route>
          <Route
            path="/freekundali/basic-details"
            element={<TabComponent />}
          ></Route>

          {/* //// */}
          <Route path="/kundali-matching" element={<KundliMatching />}></Route>
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
            path="/PanditRegister"
            element={<PanditRegisterForm />}
          ></Route>
          <Route path="/loginPandit" element={<PanditLoginForm />}></Route>
          <Route
            path="/PanditRegister/panditVerify-phone/:id"
            element={<PanditVerifyPhone />}
          ></Route>

          <Route
            path="/poojapandit/:poojaId/pandit/:panditId/date/:date/time/:time"
            element={<BookPanditForm />}
          ></Route>
          <Route
            path="/register-page/verify-phone/:id"
            element={<VerifyPhone />}
          ></Route>
          <Route path="/loginform" element={<LoginForm />}></Route>

          {/* //AstroRoutes */}
          <Route
            path="/astrologerlogin"
            element={<AstrologerLoginForm />}
          ></Route>
          <Route
            path="/astrologerregister"
            element={<AstrologerRegistrationForm />}
          ></Route>
          <Route
            path="/astrologerregister/astrologerVerify-phone/:id"
            element={<AstrologerVerifyPhone />}
          ></Route>
          <Route
            path="/astrologersetprofile/:id"
            element={<AstrologerProfileForm />}
          ></Route>

          {/* //AstroCouncellor Routes */}
          <Route
            path="/astrologerCouncellorlogin"
            element={<AstroCouncellForm />}
          ></Route>
          <Route
            path="/astrologerCouncellorregister"
            element={<AstroCouncellorRegistrationForm />}
          ></Route>
          <Route
            path="/astrologerCouncellorregister/astrologerCouncellorVerify-phone/:id"
            element={<AstroCouncellorVerify />}
          ></Route>
          <Route
            path="/astrologerCouncellor/:id"
            element={<AstroCouncellorProfileForm />}
          ></Route>
        </Routes>
        <Footer showblur={showblur} />
      </BrowserRouter>
    </div>
  );
}

export default App;
