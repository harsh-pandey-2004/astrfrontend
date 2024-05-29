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
import CallwithAstrologer from "./Pages/CallwithAstrologer";
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
import PanditRegisterForm from './components/panditcomponents/Sign-up'
import PanditLoginForm from "./components/panditcomponents/Login";
import PanditVerifyPhone from "./components/panditcomponents/VerificationPop";
import PoojaPandit from "./components/BookaPanditComponents/PoojaPandit";
import BookPanditForm from "./components/BookaPanditComponents/BookPanditForm";
import ProfileForm from "./components/panditcomponents/MakeProfile";
import MainPanditDash from "./components/panditcomponents/MainDashPandit"
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
          <Route
            path="/chat-with-astrologer"
            element={<ChatWithAstrologer />}
          />
          <Route path="/call-to-astrologer" element={<CallwithAstrologer />} />
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

          <Route path="/poojapandit" element={<PoojaPandit />} />

          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/panditdashboard/:id" element={<MainPanditDash />} />

          <Route path="/PanditsetProfile/:id" element={<ProfileForm/>} />
          <Route path="/freekundali" element={<FreeKundali />}></Route>
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
          <Route path="/PanditRegister" element={<PanditRegisterForm />}></Route>
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
        </Routes>
        <Footer showblur={showblur} />
      </BrowserRouter>
    </div>
  );
}

export default App;
