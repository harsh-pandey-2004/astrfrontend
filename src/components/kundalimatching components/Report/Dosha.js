import React from 'react';

const Dosha = ( {kundli}) => {
  
  console.log( kundli && kundli.response.score);
  return (
    <div className="my-4 px-20 h-96">
      <h3 className="text-lg font-bold">Dosha</h3>

      <div className='flex items-center justify-center mt-4'>
      <p className='w-1/2 text-center'><strong>Ashtakoot:</strong> {kundli && kundli.response.score}/36</p>
      <p className='w-1/2 text-center'><strong>Manglik Match:</strong> No</p>

      </div>
      
      <p>The overall points of this couple represent a great combination, both the bride and the groom have no mangal dosh. Marriage is preferred. Consult an astrologer to get rid of the few remedies and the doshas present for a harmonious married life ahead. Both boy and girl are not Manglik, which does not lead to any problems.</p>
    </div>
  );
};

export default Dosha;
