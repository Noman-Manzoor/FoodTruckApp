import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import PlacesAutocomplete from 'react-native-google-places-autocomplete';

const GooglePlacesAutocomplete = ({ onChangeText, onPressPlace, defaultText, currentLocation }) => {
  const [searchQuery, setSearchQuery] = useState(defaultText || '');
  
  const handleSearchQueryChange = (text) => {
    setSearchQuery(text);
    onChangeText(text);
  };
  
  return (
    <View>
      <PlacesAutocomplete
        placeholder="Search for places..."
        onPress={onPressPlace}
        query={searchQuery}
        onChangeText={handleSearchQueryChange}
        debounce={200}
        currentLocation={currentLocation}
      />
    </View>
  );
};

export default GooglePlacesAutocomplete;
