import React from 'react';

const MatchPoints = ({ kundli }) => {
  {kundli && console.log(kundli)}
  const matchPoints = [
    { attribute: 'Varna', male: ` ${kundli && kundli.response.varna.boy_varna}`, female: `${kundli && kundli.response.varna.girl_varna}`, received: `${kundli && kundli.response.varna.varna}`, outOf: `${kundli && kundli.response.varna.full_score}`, areaOfLife: 'Natural Refinement / Work', description:` ${kundli && kundli.response.varna.description }`, meaning: 'Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.' },
    { attribute: 'Vashya', male: ` ${kundli && kundli.response.vasya.boy_vasya}`, female: ` ${kundli && kundli.response.vasya.girl_vasya}`, received: `${kundli && kundli.response.vasya.vasya}`, outOf: `${kundli && kundli.response.vasya.full_score}`, areaOfLife: 'Innate Giving / Attraction towards each other', description: ` ${kundli && kundli.response.vasya.description }`, meaning: 'Vashya indicates the bride and the groom\'s tendency to dominate or influence each other in a marriage.' },
    { attribute: 'Tara', male: ` ${kundli && kundli.response.tara.boy_tara}`, female: ` ${kundli && kundli.response.tara.girl_tara}`, received: ` ${kundli && kundli.response.tara.tara}`, outOf: `${kundli && kundli.response.tara.full_score}`, areaOfLife: 'Comfort - Prosperity - Health', description: ` ${kundli && kundli.response.tara.description }`, meaning: 'Tara is the indicator of the birth star compatibility of the bride and the groom. It also indicates the fortune of the couple.' },
    { attribute: 'Yoni', male: ` ${kundli && kundli.response.yoni.boy_yoni}`, female: ` ${kundli && kundli.response.yoni.girl_yoni}`, received: ` ${kundli && kundli.response.yoni.yoni}`, outOf: `${kundli && kundli.response.yoni.full_score}`, areaOfLife: 'Physical Intimacy', description: ` ${kundli && kundli.response.yoni.description }`, meaning: 'Yoni is the indicator of the sexual or physical compatibility between the bride and the groom in question' },
    { attribute: 'Maitri', male: ` ${kundli && kundli.response.grahamaitri.boy_lord}`, female: ` ${kundli && kundli.response.grahamaitri.girl_lord}`, received: ` ${kundli && kundli.response.grahamaitri.grahamaitri}`, outOf: `${kundli && kundli.response.grahamaitri.full_score}`, areaOfLife: 'Comfort - Prosperity - Health', description: ` ${kundli && kundli.response.grahamaitri.description }`, meaning: 'Tara is the indicator of the birth star compatibility of the bride and the groom. It also indicates the fortune of the couple.' },
    { attribute: 'Gan', male: ` ${kundli && kundli.response.gana.boy_gana}`, female: ` ${kundli && kundli.response.gana.girl_gana}`, received: ` ${kundli && kundli.response.gana.gana}`, outOf: `${kundli && kundli.response.gana.full_score}`, areaOfLife: 'Comfort - Prosperity - Health', description: ` ${kundli && kundli.response.gana.description }`, meaning: 'Tara is the indicator of the birth star compatibility of the bride and the groom. It also indicates the fortune of the couple.' },
    { attribute: 'Bhakut', male: ` ${kundli && kundli.response.bhakoot.boy_rasi_name}`, female: ` ${kundli && kundli.response.bhakoot.girl_rasi_name}`, received: ` ${kundli && kundli.response.bhakoot.bhakoot}`, outOf: `${kundli && kundli.response.bhakoot.full_score}`, areaOfLife: 'Comfort - Prosperity - Health', description: ` ${kundli && kundli.response.bhakoot.description }`, meaning: 'Tara is the indicator of the birth star compatibility of the bride and the groom. It also indicates the fortune of the couple.' },
    { attribute: 'Nadi', male: ` ${kundli && kundli.response.nadi.boy_nadi}`, female: ` ${kundli && kundli.response.nadi.girl_nadi}`, received: ` ${kundli && kundli.response.nadi.nadi}`, outOf: `${kundli && kundli.response.nadi.full_score}`, areaOfLife: 'Comfort - Prosperity - Health', description: ` ${kundli && kundli.response.nadi.description }`, meaning: 'Tara is the indicator of the birth star compatibility of the bride and the groom. It also indicates the fortune of the couple.' },
  ];

  return (
    <div className="mt-8 px-4 md:px-20">
      <h3 className="text-2xl font-bold">Match Ashtakoot Points</h3>
      <table className="min-w-full bg-white  border-collapse mt-4 rounded-md kundali-matching-shadow ">
        <thead className='bg-black text-yellow-500 '>
          <tr >
            <th className="border  border-black   py-2 px-2 md:px-4 text-sm md:text-base">Attribute</th>
            <th className="border  border-black py-2 px-2 md:px-4 text-sm md:text-base">Male</th>
            <th className="border  border-black py-2 px-2 md:px-4 text-sm md:text-base">Female</th>
            <th className="border  border-black py-2 px-2 md:px-4 text-sm md:text-base">Received</th>
            <th className="border  border-black py-2 px-4 hidden md:table-cell"> of</th>
            <th className="border  border-black py-2 px-4 hidden md:table-cell ">Area Of Life</th>
            <th className="border  border-black py-2 px-4 hidden md:table-cell">Description</th>
            <th className="border  border-black py-2  hidden md:table-cell">Meaning</th>
          </tr>
        </thead>
        <tbody>
          {matchPoints.map((point, index) => (
            <tr key={index}>
              <td className="border py-2 px-2 md:px-4 text-black font-semibold text-sm md:text-base">{point.attribute}</td>
              <td className="border py-2 px-2 md:px-4 text-sm md:text-base">{point.male}</td>
              <td className="border py-2 px-2 md:px-4 text-sm md:text-base">{point.female}</td>
              <td className="border py-2 px-2 md:px-4 text-sm md:text-base">{point.received}</td>
              <td className="border py-2  px-4 hidden md:table-cell ">{point.outOf}</td>
              <td className="border py-2 px-4 hidden md:table-cell">{point.areaOfLife}</td>
              <td className="border py-2 px-4 hidden md:table-cell">{point.description}</td>
              <td className="border py-2 px-4 hidden md:table-cell">{point.meaning}</td>
            </tr>
          ))}
          <tr>
            <td className='border py-2 px-4 text-sm md:text-lg  text-black font-semibold'> Total</td>
            <td className='border py-2 px-4 '></td>
            <td className='border py-2 px-4 '></td>
            <td className='border py-2 px-4 font-bold text-yellow-500 text-sm md:text-base'>{ kundli &&  kundli.response.score}</td>
            <td className='border py-2 px-4 font-bold text-yellow-500 hidden md:table-cell'>36</td>
            <td className='border py-2 px-4 hidden md:table-cell'></td>
            <td className='border py-2 px-4 hidden md:table-cell'></td>

          </tr>
        </tbody>
      </table>
      <p className="mt-6 py-3 w-full text-center border rounded-md bg-black text-yellow-500 px-2 md:px-0">{ kundli && kundli.response.bot_response} </p>
    </div>
  );
};

export default MatchPoints;
