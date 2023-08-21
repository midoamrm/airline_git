/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line no-unused-vars, prettier/prettier
import React from 'react';
import {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Touchable,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

function Title({navigation}) {
  const [search, setState] = useState('');
  const updateSearch = () => {
    return ' ';
  };
  return (
    <ImageBackground
      source={require('../assets/images/w.jpg')}
      style={{width: '100%', height: 160}}
      resizeMode="cover">
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            size={25}
            color="blue"
            name={Platform.OS === 'android' ? 'list' : 'ios-list'}></Icon>
        </TouchableOpacity>
        <Text style={styles.textsp}>sssssssssssssssssssssss</Text>
        <Text style={styles.textts}> Add A Promo Code</Text>
      </View>

      <Text style={styles.textt}> Book a Fligth</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.texttap}>Round Trip</Text>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tripspast');
            }}>
            <Text style={styles.texttap}>One Way</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tripspast');
            }}>
            <Text style={styles.texttap}>Mluti City</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
export default function Bookafligth({route, navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <Title navigation={navigation} />
      <View style={{backgroundColor: '#F2F3F5'}}>
        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'column',
              borderRadius: 20,
              backgroundColor: '#F2F3F5',
              width: 170,
              height: 140,
            }}>
            <Text style={styles.texttap2}>From</Text>
            <Text style={styles.textt}>DXB</Text>
            <Text style={styles.texttap2}>Dubai</Text>
          </View>
          <Icon
            style={{
              paddingTop: 30,
              paddingRight: 10,
              paddingLeft: 10,
            }}
            size={45}
            color="blue"
            name={
              Platform.OS === 'android' ? 'swap-horizontal-outline' : 'ios-list'
            }></Icon>
          <View
            style={{
              flexDirection: 'column',
              borderRadius: 20,
              backgroundColor: '#F2F3F5',
              width: 170,
              height: 140,
            }}>
            <Text style={styles.texttap2}>TO</Text>
            <Text style={styles.textt}>RUH</Text>
            <Text style={styles.texttap2}>Riydah</Text>
          </View>
        </View>
        <View style={{paddingTop: 20, borderRadius: 20}}>
          <View style={{backgroundColor: 'white', borderRadius: 20}}>
            <Text style={styles.texttap}>Travel Date</Text>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 20,
                backgroundColor: 'white',
              }}>
              <Text style={styles.texteco}>25 Aug-5 Sep</Text>
              <Icon
                style={{
                  paddingLeft: 160,
                }}
                size={35}
                color="blue"
                name={
                  Platform.OS === 'android' ? 'calendar-outline' : 'ios-list'
                }></Icon>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 20, borderRadius: 20}}>
          <View style={{backgroundColor: 'white', borderRadius: 20}}>
            <Text style={styles.texttap}>Passnger/Class</Text>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 20,
                backgroundColor: 'white',
              }}>
              <Text style={styles.texteco}>1 Passnger,Economy</Text>

              <Icon
                style={{
                  paddingLeft: 100,
                }}
                size={35}
                color="blue"
                name={
                  Platform.OS === 'android'
                    ? 'chevron-down-outline'
                    : 'ios-list'
                }></Icon>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 20, borderRadius: 20}}>
          <View style={{backgroundColor: 'white', borderRadius: 20}}>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 20,
                backgroundColor: 'white',
              }}>
              <Text style={styles.textfr}>Book with El Fursan Miles</Text>

              <Switch
                trackColor={{false: 'green', true: 'green'}}
                thumbColor={isEnabled ? '#00FF00' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <SearchBar
              inputContainerStyle={{backgroundColor: 'black'}}
              leftIconContainerStyle={{backgroundColor: 'black'}}
              inputStyle={{backgroundColor: 'black'}}
              containerStyle={{
                backgroundColor: 'transparent',
                justifyContent: 'space-around',
                borderTopWidth: 0,
                borderBottomWidth: 0,
              }}
              lightTheme={true}
              placeholder="Where To?"
              onChangeText={{}}
              value={{}}
            />
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  textt: {
    color: '#000000',
    fontSize: 40,
    paddingLeft: 40,
    paddingBottom: 10,
  },
  texteco: {
    color: '#000000',
    fontSize: 28,
    paddingLeft: 10,
    paddingBottom: 30,
  },
  textfr: {
    color: '#000000',
    fontSize: 28,
    paddingTop: 6,
    paddingLeft: 9,
    paddingBottom: 10,
  },
  textts: {
    color: '#0000FF',
    fontSize: 20,
    paddingLeft: 10,
  },
  texttap: {
    color: '#000000',
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  texttap2: {
    color: '#000000',
    fontSize: 20,
    paddingLeft: 60,
    paddingTop: 10,
  },
  texttx: {
    color: '#000000',
    fontSize: 13,
    paddingLeft: 10,
  },
  texttt: {
    color: '#000000',
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 2,
  },
  textsp: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 2,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textttt: {
    color: '#00FF00',
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
