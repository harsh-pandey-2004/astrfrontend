import React, { useEffect } from "react";
import Head from "../components/kundalicomponents/Head";
import Kundlis from "../components/kundalicomponents/kundalis";
import Visit from "../components/kundalicomponents/Visits";
import FutureKund from "../components/kundalicomponents/FutureKund";
import Faq from "../components/kundalicomponents/Faq";

const FreeKundali = (props) => {
  const showblur=props.showblur;
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className={`${ showblur  &&
      "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"}
       flex flex-col  top-20 relative lg:top-16 `}>
      <Head />
      <Kundlis />
      <Visit />
      <FutureKund />
      <Faq />
    </div>
  );
};

export default FreeKundali;