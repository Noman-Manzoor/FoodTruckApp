import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import { normalize } from '../../../../style/responsive';
import main from '../../../../style/main';

const Tab = ({ icon, title, isSelected = false, event }) => {
  const styles = StyleSheet.create({
    tabContainer: {
      padding: normalize(10),
      paddingEnd: normalize(15),
      flexDirection: 'row',
      alignItems: 'center',
      gap: normalize(10),
      margin: 10,
      backgroundColor: isSelected ? '#E51A27' : 'white',
      borderRadius: normalize(30),
    },
    tabIcon: {
      width: normalize(20),
      height: normalize(20),
      margin: 0,
      borderRadius: 100,
      backgroundColor: 'black',
    },
    tabTitle: {
      color: isSelected ? 'white' : 'black',
      fontWeight: '500',
      fontSize: normalize(12),
    },
  });
  return (
    <TouchableOpacity onPress={() => event()}>
      <View style={[styles.tabContainer, main.shadow]}>
        <Image
          style={styles.tabIcon}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.tabTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tab;
