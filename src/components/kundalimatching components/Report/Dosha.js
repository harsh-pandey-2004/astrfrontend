import React from 'react';


const Dosha = ( {kundli}) => {
  
  console.log( kundli && kundli.response.score);
  return (
    <div className="mt-4 mb-12 px-4 md:px-20 h-96">
      <h3 className="text-lg font-bold">Dosha</h3>

      <div className='flex  items-center justify-center gap-4 md:gap-12 mt-4'>
      <p className=' rounded-md w-1/2 py-2 text-yellow-500 text-center bg-black '><strong >Ashtakoot :</strong> {kundli && kundli.response.score}/36</p>
      <p className=' rounded-md w-1/2 py-2 text-yellow-500 text-center bg-black '><strong>Manglik Match:</strong> No</p>

      </div>
      
      <p className="mt-8 py-6 w-full text-center rounded-md  kundali-matching-shadow">The overall points of this couple represent a great combination, both the bride and the groom have no mangal dosh. Marriage is preferred. Consult an astrologer to get rid of the few remedies and the doshas present for a harmonious married life ahead. Both boy and girl are not Manglik, which does not lead to any problems.</p>
     
    </div>
  );
};

export default Dosha;
