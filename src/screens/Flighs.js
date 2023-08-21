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
function Cardd({
  navigation,
  buttontitle,
  lefttop,
  leftbottom,
  rigthtop,
  rigthbottom,
  bottomcorner,
  clr,
}) {
  return (
    <View style={{paddingTop: 5}}>
      <ImageBackground
        source={require('../assets/images/w.jpg')}
        borderRadius={20}
        style={{
          width: '100%',
          height: 280,
        }}
        resizeMode="cover">
        <View style={{flexDirection: 'row'}}>
          <Button color={clr} title={buttontitle} />
        </View>
        <View
          style={{
            flexDirection: 'row',

            paddingTop: 30,
            paddingBottom: 30,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text style={styles.texttac}>{lefttop}</Text>
            <Text style={styles.textdxb}>{leftbottom}</Text>
          </View>
          <Text style={styles.textsp2}>fffffffffffffffffffffff</Text>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text style={styles.texttac}>{rigthtop}</Text>
            <Text style={styles.textdxb}>{rigthbottom}</Text>
          </View>
        </View>
        <Text style={styles.textfl}>Flights Detiels</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
          }}>
          <Image
            source={require('../assets/images/plo.png')}
            style={{borderRadius: 10, width: 40, height: 40}}></Image>
          <Text style={styles.textsp2}>
            ffffffffffffffffffffffffffffffffffff
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textsar}>Form SAR</Text>
            <Text style={styles.textsar}>{bottomcorner}</Text>
          </View>

          <Icon
            size={23}
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
      </ImageBackground>
    </View>
  );
}
function Title({navigation}) {
  const [search, setState] = useState('');
  const updateSearch = () => {
    return ' ';
  };
  return (
    <ImageBackground
      source={require('../assets/images/w.jpg')}
      borderRadius={20}
      style={{
        width: '100%',
        height: 230,
        paddingBottom: 10,
      }}
      resizeMode="cover">
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            size={26}
            name={
              Platform.OS === 'android' ? 'arrow-back-outline' : 'ios-list'
            }></Icon>
        </TouchableOpacity>
        <Text style={styles.textsp2}>
          ffffffffffffffffffffffffffffffffffffffff
        </Text>
        <Text style={styles.textmil}>1,250 miles</Text>
        <Image
          source={require('../assets/images/user-profile.jpg')}
          style={{
            borderRadius: 10,
            width: 40,
            height: 40,
            paddingTop: 10,
          }}></Image>
      </View>
      <View
        style={{
          flexDirection: 'column',
          paddingLeft: 110,

          paddingTop: 30,
          paddingBottom: 30,
        }}>
        <Text style={styles.texttac}>Departing Flights</Text>
        <Text style={styles.textdxb}>DXB->RUH</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          size={23}
          name={
            Platform.OS === 'android' ? 'chevron-back-outline' : 'ios-list'
          }></Icon>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.texttac}>24 Aug</Text>
          <Text style={styles.texttac}>SAR 983</Text>
        </View>
        <Text style={styles.textsp2}>ffff</Text>
        <Text style={styles.textom}>Tommorw,25 Aug</Text>
        <Text style={styles.textsp2}>ffff</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.texttac}>26 Aug</Text>
          <Text style={styles.texttac}>SAR 983</Text>
        </View>

        <Icon
          size={23}
          name={
            Platform.OS === 'android' ? 'chevron-forward-outline' : 'ios-list'
          }></Icon>
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
export default function Flights({route, navigation}) {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <>
      <View style={{backgroundColor: 'black'}}>
        <Title navigation={navigation} />
        <View>
          <FlatList
            data={[
              {
                id: 1,
                lefttop: '01:40->17:20',
                leftbottom: 'DXB To RUH ',
                rigthtop: 'Non-stop ',
                rigthbottom: '2h 00m',
                bottomcorner: '1,536',

                buttontitle: 'Lowest Price',
                clr: 'green',
              },
              {
                id: 2,
                lefttop: '21:35->23:40',
                leftbottom: 'DXB To RUH ',
                rigthtop: 'Non-stop ',
                rigthbottom: '3h 00m',
                bottomcorner: 'Sold Out',
                buttontitle: '+1Day',
                clr: 'yellow',
              },
              {
                id: 3,
                lefttop: '15:35->17:40',
                leftbottom: 'DXB To RUH ',
                rigthtop: 'Non-stop ',
                rigthbottom: '3h 00m',
                bottomcorner: '2,3454',
                buttontitle: 'Middel price',
                clr: 'blue',
              },
              {
                id: 5,
                lefttop: ' ',
                leftbottom: ' ',
                rigthtop: ' ',
                rigthbottom: ' ',
                bottomcorner: ' ',
                buttontitle: 'ok ',
              },
            ]}
            renderItem={({item}) => (
              <Cardd
                lefttop={item.lefttop}
                rigthtop={item.rigthtop}
                leftbottom={item.leftbottom}
                rigthbottom={item.rigthbottom}
                buttontitle={item.buttontitle}
                bottomcorner={item.bottomcorner}
                clr={item.clr}></Cardd>
            )}
          />
        </View>
      </View>
    </>
  );

  // eslint-disable-next-line eol-last
}
const styles = StyleSheet.create({
  textt: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 10,
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
  },
  texttf: {
    color: '#FFFFFF',
    fontSize: 25,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  texttac: {
    color: '#000000',
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  textsar: {
    color: '#000000',
    fontSize: 20,

    paddingBottom: 3,
  },
  textfl: {
    color: 'blue',
    fontSize: 19,

    paddingBottom: 3,
  },
  textdxb: {
    color: '#000000',
    fontSize: 27,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  textmil: {
    color: '#000000',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 3,
  },
  textom: {
    color: '#000000',
    fontSize: 20,

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
    color: '#A67B5B',
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
