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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getAll, getCategory} from '../../../api/truck';
import main from '../../../style/main';
import {EvilIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import {normalize} from '../../../style/responsive';

import {Picker} from '@react-native-picker/picker';
import Tab from './components/Tab';
import FoodCard from './components/FoodCard';
import useLocation from "../../../customHook/useLocation";
import {showErrorSnackbar} from "../../../utils/Toaster";
import {getValue} from "../../../utils/storage";
import {keys} from "../../../utils/storageKey";

const initStateTabs =
  {
    icon: "https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'All',
    isSelected: true,
  }
const Home = ({navigation, route}) => {
  const {location, errorMsg, placeName} = useLocation()
  const [tabs, setTabs] = useState([]);
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    if (location) {
      console.log(location)
      getAll({latitude: location.coords.latitude, longitude: location.coords.longitude}).then(res => {
        setList(res.data.data)
        setFilterList(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [location]);
  
  useEffect(() => {
    getValue(keys.name).then(res => {
      setUser(res)
    })
  }, [route]);
  
  useEffect(() => {
    getCategory().then((res) => {
      console.log(res.data.data)
      setTabs([initStateTabs, ...res.data.data.map((item) => ({
        icon: "https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: item,
        isSelected: false
      }))])
    }).catch((err) => {
      showErrorSnackbar(err.response.data.message)
    })
  }, []);
  
  return (
    <View style={[main.container, styles.container]}>
      <View style={styles.profileOverView}>
        <View style={styles.profileOverViewLeft}>
          <Image
            source={{
              uri: 'https://placehold.co/600x400.png',
            }}
            style={styles.profilePic}
          />
          <View>
            <Text
              style={{
                color: '#2F2D2D',
                fontSize: normalize(16),
                fontWeight: '500',
              }}
            >
              Hello {user || ""} 🤝
            </Text>
            <Text
              style={{
                color: '#929292',
                fontSize: normalize(12),
                fontWeight: '500',
              }}
            >
              What you want to eat today
            </Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.profileOverViewRight, main.shadow]}>
          <EvilIcons name='gear' size={normalize(20)} color='#E51A27'/>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          width: '70%',
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: normalize(100),
          borderColor: '#aeaeae73',
          borderWidth: 2,
          flexDirection: 'row',
          paddingHorizontal: normalize(15),
          marginHorizontal: normalize(20),
          height: normalize(40),
        }}
      >
        <Ionicons name='location-sharp' size={normalize(15)} color='#E51A27'/>
        <Text numberOfLines={1}>{placeName || "Loading"}</Text>
      </View>
      {/*<View*/}
      {/*  style={{*/}
      {/*    flexDirection: 'row',*/}
      {/*    alignItems: 'center',*/}
      {/*    gap: normalize(10),*/}
      {/*    marginHorizontal: normalize(20),*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <View*/}
      {/*    style={[*/}
      {/*      {*/}
      {/*        flexDirection: 'row',*/}
      {/*        alignItems: 'center',*/}
      {/*        padding: normalize(10),*/}
      {/*        borderRadius: normalize(10),*/}
      {/*        backgroundColor: 'white',*/}
      {/*        margin: normalize(5),*/}
      {/*        gap: normalize(10),*/}
      {/*        flex: 1,*/}
      {/*      },*/}
      {/*      main.shadow,*/}
      {/*    ]}*/}
      {/*  >*/}
      {/*    <AntDesign name='search1' size={24} color='#E51A27'/>*/}
      {/*    <TextInput placeholder='Search here'/>*/}
      {/*  </View>*/}
      {/*  <TouchableOpacity*/}
      {/*    style={[*/}
      {/*      {*/}
      {/*        backgroundColor: '#E51A27',*/}
      {/*        padding: normalize(10),*/}
      {/*        borderRadius: 10,*/}
      {/*      },*/}
      {/*      main.shadow,*/}
      {/*    ]}*/}
      {/*  >*/}
      {/*    <Image*/}
      {/*      source={require('../../../../assets/filter.png')}*/}
      {/*      style={{*/}
      {/*        width: normalize(20),*/}
      {/*        height: normalize(20),*/}
      {/*        resizeMode: 'contain',*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
      <View>
        <FlatList
          data={tabs}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
          }}
          horizontal
          renderItem={({item, index}) => (
            <Tab
              {...item}
              event={() => {
                setTabs((prevTabs) => {
                  const updatedTabs = prevTabs.map((tab, i) => {
                    if (i === index) {
                      return {...tab, isSelected: !tab.isSelected};
                    }
                    return {...tab, isSelected: false};
                  });
                  if (index > 0) {
                    const tab = updatedTabs[index]
                    setFilterList(prevState => {
                      return list.filter((i) => i.category === tab.title)
                    })
                  } else {
                    setFilterList(list)
                  }
                  
                  return updatedTabs;
                });
              }}
            />
          )}
        />
      </View>
      {list.length > 0 ? <FlatList
        data={filterList}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: normalize(20),
        }}
        renderItem={({item, index}) => (
          <FoodCard
            {...item}
            event={() => {
              navigation.navigate('truck', {id: item._id, away: item.away});
            }}
          />
        )}
      
      /> : <View style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}><Text>No Record found</Text></View>}
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
