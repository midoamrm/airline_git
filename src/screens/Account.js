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
  Button,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
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
      style={{width: '100%', height: 350}}
      resizeMode="cover">
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          paddingBottom: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            size={26}
            name={Platform.OS === 'android' ? 'list' : 'ios-list'}></Icon>
        </TouchableOpacity>
        <Text style={styles.textww}>
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </Text>
        <Icon
          size={26}
          name={Platform.OS === 'android' ? 'grid-outline' : 'ios-list'}></Icon>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textsap}>ffff</Text>
        <View
          style={{
            backgroundColor: '#79602a',
            borderRadius: 15,
            width: 350,
            height: 200,
            paddingRight: -10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.texttf}>الفرسان</Text>
              <Text style={styles.texttfpad}>Al-fursan</Text>
            </View>

            <Text style={styles.textsp}>
              fffffffffffffffffffffffffffffffffff
            </Text>
            <Icon
              size={23}
              color="#FFFFFF"
              paddingTop={13}
              name={
                Platform.OS === 'android'
                  ? 'ellipsis-horizontal-outline'
                  : 'ios-list'
              }></Icon>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.texttx}>Member Id</Text>
            <Text style={styles.textsp}>fffffffffffffffffffff</Text>
            <Text style={styles.texttx}>27143526</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#FFFFFF',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={styles.textth1}>
            Tier<Text style={styles.textth11}>fffff</Text>Al-fursan MILes
            <Text style={styles.textth11}>fff</Text> Tier Miles
          </Text>
          <Text style={styles.textth2}>
            Gold <Text style={styles.textth22}>fffff</Text>21345,33
            <Text style={styles.textth22}>ffffffffff</Text> 41343,22
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.texttacc}>Account</Text>
          <Text style={styles.texttac}>Member Since 2021</Text>
        </View>
        <Text style={styles.textsp2}>ffffffffffff</Text>

        <Image
          source={require('../assets/images/aa.png')}
          style={{
            paddingTop: 10,
            paddingRight: 20,
          }}></Image>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    </ImageBackground>
  );
}
export default function Account({route, navigation}) {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <>
      <Title navigation={navigation} />
      <View style={{backgroundColor: 'white', paddingTop: 25}}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 15}}>
          <Icon
            size={30}
            color="brown"
            paddingLeft={15}
            name={
              Platform.OS === 'android' ? 'settings-outline' : 'ios-list'
            }></Icon>

          <Text style={styles.textss}>ff</Text>
          <Text style={styles.texttac}>App Settings</Text>
          <Text style={styles.textss}>ffffffffffffffffff</Text>

          <Icon
            size={30}
            name={
              Platform.OS === 'android' ? 'chevron-forward-outline' : 'ios-list'
            }></Icon>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 15}}>
          <Icon
            size={30}
            paddingLeft={15}
            color="brown"
            name={
              Platform.OS === 'android' ? 'help-circle-outline' : 'ios-list'
            }></Icon>

          <Text style={styles.textss}>ff</Text>
          <Text style={styles.texttac}>Help&Support</Text>
          <Text style={styles.textss}>fffffffffffffffff</Text>

          <Icon
            size={30}
            name={
              Platform.OS === 'android' ? 'chevron-forward-outline' : 'ios-list'
            }></Icon>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 15}}>
          <Icon
            size={30}
            paddingLeft={15}
            color="brown"
            name={
              Platform.OS === 'android'
                ? 'information-circle-outline'
                : 'ios-list'
            }></Icon>

          <Text style={styles.textss}>ff</Text>
          <Text style={styles.texttac}>Saudia App</Text>
          <Text style={styles.textss}>ffffffffffffffffffff</Text>

          <Icon
            size={30}
            name={
              Platform.OS === 'android' ? 'chevron-forward-outline' : 'ios-list'
            }></Icon>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 15}}>
          <Icon
            size={30}
            color="red"
            paddingLeft={15}
            name={
              Platform.OS === 'android' ? 'log-out-outline' : 'ios-list'
            }></Icon>

          <Text style={styles.textss}>ff</Text>
          <Text style={styles.texttacr}>Log Out</Text>
          <Text style={styles.textss}>fffffffffffffffffffffff</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 200,
          }}></View>
      </View>
    </>
  );

  // eslint-disable-next-line eol-last
}
const styles = StyleSheet.create({
  textt: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  textsap: {
    color: '#FFFFFF',

    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 2,
  },
  textts: {
    color: '#000000',
    fontSize: 15,
    paddingLeft: 10,
  },
  texttx: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 15,
  },

  textth1: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 15,
  },
  textth11: {
    color: '#79602a',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 15,
  },
  textth2: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 15,
  },
  textth22: {
    color: '#79602a',
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 15,
  },
  texttf: {
    color: '#FFFFFF',
    fontSize: 23,
    paddingLeft: 10,
  },
  texttfpad: {
    color: '#FFFFFF',
    fontSize: 23,
    paddingLeft: 10,
    paddingBottom: 15,
  },
  texttac: {
    color: '#000000',
    fontSize: 25,
    paddingLeft: 20,
    paddingBottom: 3,
  },
  texttacc: {
    color: '#000000',
    fontSize: 38,
    paddingTop: 8,
    paddingLeft: 20,
    paddingBottom: 3,
  },
  texttacr: {
    color: 'red',
    fontSize: 25,

    paddingBottom: 3,
  },
  textss: {
    color: '#FFFFFF',
    fontSize: 25,

    paddingBottom: 3,
  },
  textsp: {
    color: '#79602a',
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 2,
  },
  textww: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 2,
  },
  textsp2: {
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
    fontSize: 20,
  },
  textttt: {
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
