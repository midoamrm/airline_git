/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// create home screen
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Image, ImageBackground} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import HomeS from './HomeScrolling';
import Colors from '../Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SearchBar} from 'react-native-elements';
import {useState, useEffect} from 'react';
import Trips from './Trips';
import Account from './Account';
const Tab = createBottomTabNavigator();
function Title() {
  const [search, setState] = useState('');
  const updateSearch = () => {
    return ' ';
  };
  return (
    <ImageBackground
      source={require('../assets/images/menu-bg.jpg')}
      style={{minWidth: '100%', height: 200, flex: 1}}
      resizeMode="cover">
      {/* <SearchBar
lightTheme={true}
placeholder="Type Here..."
onChangeText={updateSearch}
value={search}
/> */}
    </ImageBackground>
  );
}
const Home = ({navigation}: any) => {
  const {t, i18n} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeS}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components

          tabBarIcon: config => (
            <Icon
              size={23}
              name={Platform.OS === 'android' ? 'home' : 'ios-list'}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components

          tabBarIcon: config => (
            <Icon
              size={23}
              name={Platform.OS === 'android' ? 'bag' : 'ios-list'}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components

          tabBarIcon: config => (
            <Icon
              size={23}
              name={Platform.OS === 'android' ? 'settings' : 'ios-list'}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
