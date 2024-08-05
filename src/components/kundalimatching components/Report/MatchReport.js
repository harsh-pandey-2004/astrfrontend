import React, { useEffect, useState } from 'react';
import Header from './Header';
import UserDetails from './UserDetails';
import MatchPoints from './MatchPoints';
import Dosha from './Dosha';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import RangeSlider from './RangeSlider';



const MatchReport = () => {
  // fetched the form details
  const location = useLocation();
  const { details } = location.state;
  console.log(details);
  console.log(details.boy.hour);
  console.log(details.boy.minute);


  const[kundli,setKundli]=useState(null);
  const [boyLat, setBoyLat] = useState(null);
  const [boyLong, setBoyLong] = useState(null);
  const [girlLat, setGirlLat] = useState(null);
  const [girlLong, setGirlLong] = useState(null);
  const [loading, setLoading] = useState(true);

  // function to get Boy lat&long
  const getBoyCoordinates = async (cityName) => {
    const apiKey = 'AIzaSyDZ-0Ods3pdyF7QL_4frjNnhSeaxxEvo00';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        setBoyLat(location.lat);
        setBoyLong(location.lng);
        console.log('Boy Coordinates:', { boyLat: location.lat, boyLong: location.lng });
      } else {
        throw new Error('Unable to find location');
      }
    } catch (error) {
      console.error('Error fetching girl coordinates:', error);
    }
  };

  // function to get Girl lat&long
  const getGirlCoordinates = async (cityName) => {
    const apiKey = 'AIzaSyDZ-0Ods3pdyF7QL_4frjNnhSeaxxEvo00';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        setGirlLat(location.lat);
        setGirlLong(location.lng);
        console.log('Girl Coordinates:', { girlLat: location.lat, girlLong: location.lng });
      } else {
        throw new Error('Unable to find location');
      }
    } catch (error) {
      console.error('Error fetching girl coordinates:', error);
    }
  };

  // fetching match-details
  const fetchKundli = async () => {
    try {
      const url = `https://api.vedicastroapi.com/v3-json/matching/ashtakoot?boy_dob=${details.boy.day}/${details.boy.month}/${details.boy.year}&boy_tob=${details.boy.hour}:${details.boy.minute}&boy_tz=5.5&boy_lat=${boyLat}&boy_lon=${boyLong}&girl_dob=${details.girl.day}/${details.girl.month}/${details.girl.year}&girl_tob=${details.girl.hour}:${details.girl.minute}&girl_tz=5.5&girl_lat=${girlLat}&girl_lon=${girlLong}&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565`;
      console.log('Fetching Kundli with URL:', url);
      const response = await axios.get(url);
      console.log(response.data);
      setKundli(response.data);
    } catch (error) {
      console.log('Error fetching Kundli:', error);
      console.log(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getBoyCoordinates(details.boy.birthPlace);
    getGirlCoordinates(details.girl.birthPlace);
  }, [details]);

  useEffect(() => {
    if (boyLat !== null && boyLong !== null && girlLat !== null && girlLong !== null) {
      
      fetchKundli();
    }
  }, [boyLat, boyLong, girlLat, girlLong]);

  return (
    <div className='mx-auto  top-24 relative lg:top-24 h-fit w-full'>
      <Header kundli={kundli}/>
      {loading ? (
        <Spinner  /> // Show spinner while loading
      ) : (
        <>
          <RangeSlider min={0} max={36} step={1} kundli={kundli} />
          <UserDetails details={details} />
          <MatchPoints kundli={kundli} />
          <Dosha kundli={kundli}/>
         
        </>
      )}
    </div>
  );
};

export default MatchReport;
