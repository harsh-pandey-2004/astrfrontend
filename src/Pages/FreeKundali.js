import React from "react";
import Head from "../components/kundalicomponents/Head";
import Kundlis from "../components/kundalicomponents/kundalis";
import Visit from "../components/kundalicomponents/Visits";
import FutureKund from "../components/kundalicomponents/FutureKund";
import Faq from "../components/kundalicomponents/Faq";

const FreeKundali = () => {
  return (
    <div className="flex flex-col  top-24 relative lg:top-0 h-fit">
      <Head />
      <Kundlis />
      <Visit />
      <FutureKund />
      <Faq />
    </div>
  );
};

export default FreeKundali;
