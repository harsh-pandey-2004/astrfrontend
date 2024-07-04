import React from 'react'
import NewKundli from '../components/kundalimatching components/NewKundali';
import SaveKundli from '../components/kundalimatching components/SaveKundali';

import HeadMatch from '../components/kundalimatching components/HeadMatch';
import Parallax from '../components/kundalimatching components/Parallax';
import WhyMatching from '../components/kundalimatching components/WhyMatching';


const KundliMatching = (props) => {
  const showblur=props.showblur;
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
      'Jan', 'Feb', 'Mar', 'APR', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className={`${ showblur  &&
      "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"}
       flex flex-col  top-28 relative lg:top-0`}>
       
        <HeadMatch/>
        <div className=' flex-col gap-6  max-h-fit mt-10 mb-12 '>
          <NewKundli/>
          <SaveKundli/>
          <Parallax/>
          <WhyMatching/>
        </div>
    </div>
  )
}

export default KundliMatching