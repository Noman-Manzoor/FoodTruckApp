import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
}                                         from 'react-native';
import React, { useState, useEffect }     from 'react';
import { getAll }                         from '../../../api/truck';
import main                               from '../../../style/main';
import { EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { normalize }                      from '../../../style/responsive';
import { Picker }                         from '@react-native-picker/picker';
import Tab                                from './components/Tab';
import FoodCard                           from './components/FoodCard';

const Home = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [tabs, setTabs] = useState([
    {
      icon: 'https://placehold.co/600x400.png',
      title: 'All',
      isSelected: false,
    },
  ]);
  const [list, setList] = useState([
    // {
    //   img: 'https://placehold.co/600x400.png',
    //   title: 'Tasty Tacos on Wheels',
    //   tag: 'Mexicon',
    //   startIn: '10 min',
    //   rate: 4.5,
    //   awayKm: 2,
    // },
  ]);

  useEffect(() => {
    getAll().then(res => {
      console.log(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <View style={ [main.container, styles.container] }>
      <View style={ styles.profileOverView }>
        <View style={ styles.profileOverViewLeft }>
          <Image
            source={ {
              uri: 'https://placehold.co/600x400.png',
            } }
            style={ styles.profilePic }
          />
          <View>
            <Text
              style={ {
                color: '#2F2D2D',
                fontSize: normalize(16),
                fontWeight: '500',
              } }
            >
              Hello Raja Sabiq 🤝
            </Text>
            <Text
              style={ {
                color: '#929292',
                fontSize: normalize(12),
                fontWeight: '500',
              } }
            >
              What you want to eat today
            </Text>
          </View>
        </View>
        <TouchableOpacity style={ [styles.profileOverViewRight, main.shadow] }>
          <EvilIcons name='gear' size={ normalize(20) } color='#E51A27'/>
        </TouchableOpacity>
      </View>
      <View
        style={ {
          justifyContent: 'center',
          width: '60%',
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: normalize(100),
          borderColor: '#aeaeae73',
          borderWidth: 2,
          flexDirection: 'row',
          paddingHorizontal: normalize(15),
          marginHorizontal: normalize(20),
          height: normalize(40),
        } }
      >
        <Ionicons name='location-sharp' size={ normalize(15) } color='#E51A27'/>
        <Picker
          style={ {
            color: '#929292',
            flex: 1,
            padding: 0,
            margin: 0,
            fontSize: normalize(12),
          } }
          selectedValue={ selectedValue }
          onValueChange={ (itemValue, itemIndex) => setSelectedValue(itemValue) }
        >
          <Picker.Item
            label='Green Street, 4th Avenue'
            value='option1'
            style={ styles.pickerItem }
          />
          <Picker.Item
            label='Green Street, 2th Avenue'
            value='option2'
            style={ styles.pickerItem }
          />
          <Picker.Item
            label='Green Street, 3th Avenue'
            value='option3'
            style={ styles.pickerItem }
          />
        </Picker>
      </View>
      <View
        style={ {
          flexDirection: 'row',
          alignItems: 'center',
          gap: normalize(10),
          marginHorizontal: normalize(20),
        } }
      >
        <View
          style={ [
            {
              flexDirection: 'row',
              alignItems: 'center',
              padding: normalize(10),
              borderRadius: normalize(10),
              backgroundColor: 'white',
              margin: normalize(5),
              gap: normalize(10),
              flex: 1,
            },
            main.shadow,
          ] }
        >
          <AntDesign name='search1' size={ 24 } color='#E51A27'/>
          <TextInput placeholder='Search here'/>
        </View>
        <TouchableOpacity
          style={ [
            {
              backgroundColor: '#E51A27',
              padding: normalize(10),
              borderRadius: 10,
            },
            main.shadow,
          ] }
        >
          <Image
            source={ require('../../../../assets/filter.png') }
            style={ {
              width: normalize(20),
              height: normalize(20),
              resizeMode: 'contain',
            } }
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={ tabs }
          showsHorizontalScrollIndicator={ false }
          style={ {
            flexDirection: 'row',
          } }
          horizontal
          renderItem={ ({ item, index }) => (
            <Tab
              { ...item }
              event={ () => {
                setTabs((prevTabs) => {
                  const updatedTabs = prevTabs.map((tab, i) => {
                    if (i === index) {
                      return { ...tab, isSelected: !tab.isSelected };
                    }
                    return tab;
                  });
                  return updatedTabs;
                });
              } }
            />
          ) }
        />
      </View>
      {list.length>0? <FlatList
        data={ list }
        showsVerticalScrollIndicator={ false }
        style={ {
          flex: 1,
          paddingHorizontal: normalize(20),
        } }
        renderItem={ ({ item, index }) => (
          <FoodCard
            { ...item }
            event={ () => {
              navigation.navigate('truck');
            } }
          />
        ) }
      />: <View style={ {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      } }><Text>No Record found</Text></View>}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: normalize(15),
    padding: 0,
  },
  profilePic: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(500),
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  profileOverView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
  },
  profileOverViewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10),
  },
  profileOverViewRight: {
    borderRadius: 100,
    height: normalize(35),
    width: normalize(35),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerItem: {
    fontSize: normalize(12),
  },
});
