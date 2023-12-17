import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState }                          from 'react';
import { normalize }                                from '../style/responsive';

const Select = ({ label, options, selected, setSelected, left, right }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const chooseOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const renderOption = (option) => (
    <TouchableOpacity
      key={ option.value }
      style={ styles.option }
      onPress={ () => chooseOption(option.value) }
    >
      <Text>{ option.label }</Text>
    </TouchableOpacity>
  );

  return (
    <View style={ styles.textInput }>
      { left }
      <TouchableOpacity
        style={ { flex: 1, padding: normalize(10) } }
        onPress={ toggleOpen }
      >
        <Text>{ selected || label }</Text>
      </TouchableOpacity>
      { right }
      { isOpen && (
        <View style={ styles.dropdown }>
          { options.map((option) => renderOption(option)) }
        </View>
      ) }
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  ...stylesFromInput, // Reuse styles from Input component
  dropdown: {
    position: 'absolute',
    top: normalize(40), // Adjust based on your layout
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  option: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(15),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
