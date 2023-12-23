import React, {useEffect, useState} from "react";
import * as Location from 'expo-location';
import {getPlaceName} from "../utils/place";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      
      const place = await getPlaceName(location.coords.latitude, location.coords.longitude);
      console.log(place)
      setPlaceName(place)
      setLocation(location);
    })();
  }, []);
  
  return {
    location, errorMsg, placeName
  }
}

export default useLocation;