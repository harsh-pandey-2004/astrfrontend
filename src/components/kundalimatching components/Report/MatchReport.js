import React, { useEffect, useState } from 'react';
import Header from './Header';
import UserDetails from './UserDetails';
import MatchPoints from './MatchPoints';
import Dosha from './Dosha';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

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
    const apiKey = '50b47f443c7e4f06a422fd8a33223ccc';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const { lat, lng } = response.data.results[0].geometry;
      setBoyLat(Math.floor(lat));
      setBoyLong(Math.floor(lng));
      console.log('Boy Coordinates:', { lat, lng });
    } catch (error) {
      console.error('Error fetching boy coordinates:', error);
    }
  };

  // function to get Girl lat&long
  const getGirlCoordinates = async (cityName) => {
    const apiKey = '50b47f443c7e4f06a422fd8a33223ccc';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const { lat, lng } = response.data.results[0].geometry;
      setGirlLat(Math.floor(lat));
      setGirlLong(Math.floor(lng));
      console.log('Girl Coordinates:', { lat, lng });
    } catch (error) {
      console.error('Error fetching girl coordinates:', error);
    }
  };

  // fetching match-details
  const fetchKundli = async () => {
    try {
      const url = `https://api.vedicastroapi.com/v3-json/matching/ashtakoot?boy_dob=${details.boy.day}/${details.boy.month}/${details.boy.year}&boy_tob=${details.boy.hour}:${details.boy.minute}&boy_tz=5.5&boy_lat=${boyLat}&boy_lon=${boyLong}&girl_dob=${details.girl.day}/${details.girl.month}/${details.girl.year}&girl_tob=${details.girl.hour}:${details.girl.minute}&girl_tz=5.5&girl_lat=${girlLat}&girl_lon=${girlLong}&api_key=4d62b18a-64d2-5948-827b-5d418589a8b5&lang=en`;
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
    <div className='mx-auto '>
      <Header />
      {loading ? (
        <Spinner  /> // Show spinner while loading
      ) : (
        <>
          <UserDetails details={details} />
          <MatchPoints kundli={kundli} />
          <Dosha kundli={kundli}/>
         
        </>
      )}
    </div>
  );
};

export default MatchReport;
