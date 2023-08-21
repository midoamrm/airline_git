/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import './src/utils/i18n';

import {useTranslation} from 'react-i18next';

import CustomDrawer from './src/components/CustomDrawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from './src/assets/colors/Colors';
import Home from './src/screens/Home';
import Tripspast from './src/screens/Tripspast';
import Tripsreport from './src/screens/Tripsreports';
import Flights from './src/screens/Flighs';
import Bookafligth from './src/screens/Bookafligth';
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen
          name={'asd'}
          component={Home}
          options={{
            title: t('Home'),
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={'Tripspast'}
          component={Tripspast}
          options={{
            title: 'lastTrips',
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="bag" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={'Tripsreport'}
          component={Tripsreport}
          options={{
            title: 'Tripsreport',
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="travel" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={'Flights'}
          component={Flights}
          options={{
            title: 'Flights',
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="travel" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={'Bookafligth'}
          component={Bookafligth}
          options={{
            title: 'Bookafligth',
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="travel" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
