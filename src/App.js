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

import HomePage from "./Pages/HomePage";
import KundliMatching from "./Pages/Kundalimatching";
import ShopAstro from "./Pages/ShopAstro";

function App() {
  const [showblur, setshowBlur] = useState(false);
  function showbluefn(status) {
    setshowBlur(status);
  }
  const[IsmenuClicked,setIsMenuClicked]=useState(false);
  function ModalHandler(){
    setIsMenuClicked(!IsmenuClicked);
  }
  return (
    <div className="w-full h-fit relative">
    <BrowserRouter>
      <Navbar showbluefn={showbluefn} />
      <Routes>
        <Route path="/" element={<HomePage showblur={showblur} />} />
        <Route path="/chat-with-astrologer" element={<ChatWithAstrologer />} />
        <Route path="/call-to-astrologer" element={<CallwithAstrologer />} />
        <Route path="/shop-on-astro" element={<ShopAstro IsmenuClicked={IsmenuClicked} showblur={showblur}/>}/>
        <Route path="/book-a-pooja" element={<BookPooja IsmenuClicked={IsmenuClicked} showblur={showblur}/>}/>
        <Route path="/book-a-pandit" element={<BookPandit  IsmenuClicked={IsmenuClicked} showblur={showblur} />}/>
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/freekundali" element={<FreeKundali />}></Route>
        <Route path="/kundali-matching" element={<KundliMatching />}></Route>
        <Route path="/register-page" element={<RegisterForm />}></Route>
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
