import { dividerClasses } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
const TodayHoroscope = () => {
    const location = useLocation();
    const { horoscope } = location.state || {};
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const today = new Date();
    const todayDate=formatDate(today);
    console.log(todayDate);
    const id =horoscope ? horoscope.id:'';
    console.log(id);
    

    const [data,setData]=useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.vedicastroapi.com/v3-json/prediction/daily-sun?zodiac=${id}&date=${todayDate}&show_same=true&api_key=98d42535-b080-5dad-a6dc-5084c3f6d243&lang=en&split=true&type=big`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                
              });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            console.log(data.response.bot_response.career.split_response)
            setData(data.response);
          } catch (error) {
            console.log(error);
          } 
        };
        if (id) {
            fetchData();
        }
      }, []);
      
     
  return (
    <div className='h-screen flex flex-col lg:flex-row relative top-24'>
       
       <div className='bg-yellow-400 text-white px-4 py-4 overflow-auto flex-1'>
       {/* { data && data?.bot_response?.career?.split_response} */}
       {data && (
          <>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Career</h4>
                <div className='px-2 my-2'>
                    {/* <p>Score: {data.bot_response?.career?.score ?? 'N/A'}</p> */}
                    <p>{data.bot_response?.career?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Family</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.family?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Finances</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.finances?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Friends</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.friends?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Health</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.health?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Physique</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.physique?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Relationship</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.relationship?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Status</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.status?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Total Score</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.total_score?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Travel</h4>
                <div className='px-2 my-2'>
                    <p>{data.bot_response?.travel?.split_response ?? 'No data available'}</p>
                </div>
            </div>
            {/* <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Lucky Color</h4>
                <div className='px-2 my-2'>
                    <p>Color: {data.lucky_color ?? 'N/A'} ({data.lucky_color_code ?? 'N/A'})</p>
                </div>
            </div> */}
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>Lucky Number</h4>
                <div className='px-2 my-2'>
                    <p>Numbers: {data.lucky_number?.join(', ') ?? 'N/A'}</p>
                </div>
            </div>
           
          </>
        ) }
            
        </div>
        {/* <div className=' h-64 w-fit flex flex-col'>
            <img src={horoscope.img} className='md:h-fit md:w-fit mt-32 mb-5'/>
            <h3 className=' text-center font-serif text-4xl'>{horoscope.title}</h3>
        </div> */}
        <div className='flex flex-col items-center lg:w-1/3 p-4 lg:p-8'>
            <img src={horoscope.img} className='w-3/4 md:w-full h-auto mb-4' alt='Horoscope' />
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-serif text-center'>{horoscope.title}</h3>
        </div>
        


    </div>
  )
}

export default TodayHoroscope