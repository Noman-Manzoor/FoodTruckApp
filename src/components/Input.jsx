import {StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {TextInput} from "react-native-paper"
import React, {useState} from 'react';
import {normalize} from '../style/responsive';
import DateTimePicker from '@react-native-community/datetimepicker';

const Input = ({
                 label,
                 text,
                 setText,
                 left,
                 right,
                 multiline,
                 numberOfLines,
                 type = "default",
                 isDateTime = false,
                 regex,
                 required = false,
                 isDisabled = false
               }) => {
  const [error, setError] = useState("")
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);
  const showDateTimePicker = () => {
    setDateTimePickerVisibility(true);
  };
  
  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };
  
  
  return (<View style={{
    display: 'flex', flexDirection: 'column', gap: normalize(5)
  }}>
    <View style={styles.textInput}>
      {left}
      <TextInput
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        keyboardType={type}
        mode='flat'
        label={label}
        disabled={isDisabled}
        placeholder={label}
        editable={!isDateTime}
        value={isDateTime ? new Date(text).toLocaleTimeString() : text}
        onChangeText={(text) => {
          if (!isDateTime) {
            if (required) {
              if (text.trim().length < 1) {
                setError(`${label} is required`)
              } else {
                setError("")
              }
            }
            if (regex) {
              const isValid = regex.test(text)
              if (!isValid) {
                setError(`Invalid ${label}`)
              }
            }
            setText(text)
          }
        }}
        underlineColor={"transparent"}
        activeUnderlineColor={'transparent'}
      />
      {isDateTime ? <TouchableOpacity onPress={() => {
        if (isDateTime) setDateTimePickerVisibility(true)
      }}>
        <Text>Select Time</Text>
      </TouchableOpacity> : <></>}
      {right}
    </View>
    {isDateTimePickerVisible ? (<DateTimePicker
      isVisible={isDateTimePickerVisible}
      mode="time" // "date" or "datetime"
      onChange={(selectedDate) => {
        console.log("////////////// WORKING ...............")
        setText(new Date(selectedDate.nativeEvent.timestamp).toString())
        hideDateTimePicker();
      }}
      onCancel={hideDateTimePicker}
      value={new Date(text)}
    />) : <></>}
    {error && <Text style={{
      color: "#F44336",
      fontWeight: "800",
    }}>{error}</Text>}
  </View>);
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#C6C6C6',
    borderWidth: 1,
    paddingStart: normalize(10),
    paddingEnd: normalize(10),
  },
});
