import React from 'react'
import Read from "./Read.png"
import { RxDotFilled } from "react-icons/rx";
import Vedio5 from "../../../vedios/vedio5.mp4"
import KnowHead from './KnowHead';
import KnowFaqs from './KnowFaqs';
import { Link } from 'react-router-dom';
import Parallax from '../../kundalimatching components/Parallax';

const HowToRead = () => {
  return (
    <div className=' mb-16 top-20 relative lg:top-16 '>
        
        
       

       
        <KnowHead/>

        <div className='px-4 md:px-12 py-3 mt-6 '>
            <h1 className='text-start font-semibold  text-2xl pt-6 pl-2'> Importance and Significance of kundli reading</h1>
             <p className='pl-2 pt-6'>The centrality of Kundli can be attested from the reality that it is one of the primary things that most Indian guardians consider planning for their child before long after his/her birth. A person's birth chart is ready after taking under consideration his date of birth, put of birth and time of birth. Based on this information, an <span className='text-yellow-600 '>celestial prophet</span>  is able to discover the mysterious position of distinctive planets within the distinctive houses in Kundli at the time of the child's birth. These positions not as it were characterize the person's character but moreover offer assistance in understanding the impact of different planets on different aspects of your life, such as cherish, marriage, instruction, career, etc. The position of various planets within the chart of the individual at the time of his/her birth too makes a difference in characterizing their leisure activities, characteristics, likes, detests, etc. </p>
        </div>


        <div className='px-4 md:px-12 py-6'>
            <h1 className='text-start font-semibold  text-2xl pt-6 pl-2'> What can a kundli and kundli perusing assist you with? </h1>
           <p  className='pl-2 pt-6 '>In Hinduism, the hone of coordinating the Kundli of the young lady and boy some time recently settling their marriage is predominant. So in that sense as well, getting a conventional or online Kundli can come in helpful. In truth, separated from Panchang a individual Kundli is additionally taken under consideration to discover the <span className='text-yellow-600'>Marriage muhurat </span> of the local. </p>
             <p  className='pl-2 pt-6 '>The horoscope of a individual maps the challenges and openings s/he may bump into within the future. In a nutshell, it makes a difference you in being arranged for the highs and lows of long-standing time. </p>
            
            <p className='pl-2 pt-6'>Most vitally, knowing <span className='text-yellow-600'>how to perused your birth chart</span>  can too offer assistance in indicating out the ideal career choices for you. It translates the kind of career that will suit your endeavors and judgment skills. </p>
            <p className='pl-2 pt-6'>A person's kundli involves in it the reasons for a certain issue in your life. For illustration, in case you're not able to discover a work or your marriage is getting postponed, the reason and arrangements for such complications can be found with the assistance of your Kundli. </p>
        </div>


   

        
        <div className='px-4 md:px-12 py-6'>
        <h1 className='text-start font-semibold  text-2xl pt-6 pl-2 '> Getting to know planets, signs and houses in crystal gazing  </h1>
        <p className='pl-2 pt-4 font-semibold text-gray-700'> Step 1 - Meaning of Planets in Astrology</p>
        <p className='rounded-md p-2 border  border-black  mt-2 hover:bg-black hover:text-white hover:cursor-pointer transition duration-300 '>Step 1 is the basic step. So in step 1 of learning how to perused your kundli, we are going learn approximately planets and             <span className='pl-24 text-yellow-600'> <Link to="/planets-in-astro">read more...</Link></span> </p>
         
        <p className='pl-2 pt-4 font-semibold text-gray-700'> Step 2 - Understanding Planets in Astrology</p>
        <p className='rounded-md p-2 border  border-black  mt-2 hover:bg-black hover:text-white hover:cursor-pointer transition duration-300 '>In portion 1 of how to examined kundli, we have learned the noteworthiness of kundli whereas too learning a thing or two     <span className='pl-24 text-yellow-600'><Link to="/read-planets">read more...</Link></span></p>
       
        <p className='pl-2 pt-4 font-semibold text-gray-700'> Step 3 - Meaning of Planets in Astrology</p>
        <p className='rounded-md p-2 border  border-black  mt-2 hover:bg-black hover:text-white hover:cursor-pointer transition duration-300 '>Step 1 is the basic step. So in step 1 of learning how to perused your kundli, we are going learn approximately planets and     <span className='pl-24 text-yellow-600'>read more...</span></p>
       
        <p className='pl-2 pt-4 font-semibold text-gray-700'> Step 4 - Meaning of Planets in Astrology</p>
        <p className='rounded-md p-2 border  border-black  mt-2 hover:bg-black hover:text-white hover:cursor-pointer transition duration-300 '>Step 1 is the basic step. So in step 1 of learning how to perused your kundli, we are going learn approximately planets and      <span className='pl-24 text-yellow-600'>read more...</span></p>
        </div>
        <KnowFaqs/>



       
 


      
      </div>
    


  )
}

export default HowToRead;