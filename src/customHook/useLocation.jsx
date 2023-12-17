import React, {useEffect, useState} from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
}

useEffect(() => {
  (async () => {
    
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  })();
}, []);


export default useLocation;