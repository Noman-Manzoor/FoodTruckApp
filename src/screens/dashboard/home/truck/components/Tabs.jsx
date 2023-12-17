import React from 'react';
import { View } from 'react-native';
import { normalize } from '../../../../../style/responsive';

const Tabs = ({ children }) => {
  return (
    <View style={{ flexDirection: 'row', gap: normalize(15) }}>{children}</View>
  );
};

export default Tabs;
