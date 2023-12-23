import axios from 'axios';

exports.getPlaceName = async (latitude, longitude) => {
  const apiKey = 'AIzaSyDGIpq-fAgQZbCHOGv2bb-mhyEv_KttUiE';
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
  
  try {
    const response = await axios.get(apiUrl);
    
    if (response.data.results.length > 0) {
      const placeName = response.data.results[0].formatted_address;
      console.log('Place Name:', placeName);
      return placeName;
    } else {
      console.error('No results found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data', error);
    return null;
  }
};