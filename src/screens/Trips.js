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
  Button,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
function Carddd({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/images/ath.jpg')}
      style={{width: 350, height: 445}}
      borderRadius={20}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          paddingBottom: 240,
        }}>
        <View
          style={{
            paddingLeft: 4,
            paddingRight: 170,
            paddingTop: 4,
          }}>
          <Button color={'green'} title={'check in avilable'} />
        </View>

        <Icon
          size={26}
          name={
            Platform.OS === 'android'
              ? 'ellipsis-horizontal-outline'
              : 'ios-list'
          }></Icon>
      </View>
      <Text style={styles.text3}>Z0P5DM</Text>
      <Text style={styles.text1}>Jaddah-->Athens</Text>
      <Text style={styles.text2}>15-27 Aug Roundtrip</Text>

      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          paddingBottom: 15,
        }}>
        <Text style={styles.textww3}>ffffffffffffffffff</Text>
        <Button color={'#aa8e56'} title={'check in'} />
        <Text style={styles.textww2}>fffff</Text>
        <Button color={'#444450'} title={'Mange'} />
      </View>
    </ImageBackground>
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
      style={{width: '100%', height: 160}}
      resizeMode="cover">
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            size={25}
            color="blue"
            name={Platform.OS === 'android' ? 'list' : 'ios-list'}></Icon>
        </TouchableOpacity>
        <Text style={styles.textsp}>ssssssssssssssssssssssssssssssss</Text>
        <Text style={styles.textts}> Add A Trip</Text>
      </View>

      <Text style={styles.textt}> Trips</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.texttap}>Upcoming</Text>

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
            <Text style={styles.texttap}>Past</Text>
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
export default function Trips({route, navigation}) {
  const data1 = [];
  var cardescrption = {};

  return (
    // eslint-disable-next-line react/self-closing-comp
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <Title navigation={navigation} />
      <View
        style={{
          paddingLeft: 25,
          paddingTop: 20,
        }}>
        <FlatList
          data={[
            {
              id: 1,
              CardTitle: 'Jaddah-->Japan',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Check In Available',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6WA3sz9izcmjv_newatbGUJASfDCRFK_ig&usqp=CAU',
            },
            {
              id: 2,
              CardTitle: 'Jaddah-->New York',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Check In Available',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRke9RE8ZXVeZpW3p5nfG3XjiBOuEnKmcyvMA&usqp=CAU',
            },
            {
              id: 3,
              CardTitle: 'Jaddah-->New York',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Check In Available',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOM4z8jw6yDYeR_VO8A4L3C71C0vv7YhemQ&usqp=CAU',
            },
            {
              id: 4,
              CardTitle: 'Jaddah-->New York',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Check In Available',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzm8EW3fy70DwOJT4KRkrH9cSEmCYzHpM_w&usqp=CAU',
            },
            {
              id: 5,
              CardTitle: ' ',
            },
          ]}
          renderItem={({item}) => (
            <View style={{paddingBottom: 10}}>
              <Carddd></Carddd>
            </View>
          )}
        />
      </View>
    </View>
  );

  // eslint-disable-next-line eol-last
}
const styles = StyleSheet.create({
  textww: {
    color: '#8eaad6',
  },
  textww2: {
    color: '#017a83',
  },
  textww3: {
    color: '#e5c394',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 25,
    paddingLeft: 90,
    paddingBottom: 5,
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingLeft: 90,
    paddingBottom: 10,
  },
  text3: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingLeft: 90,
    paddingBottom: 5,
  },
  textt: {
    color: '#000000',
    fontSize: 40,
    paddingLeft: 10,
    paddingBottom: 30,
  },
  textts: {
    color: '#0000FF',
    fontSize: 20,
    paddingLeft: 10,
  },
  texttap: {
    color: '#000000',
    fontSize: 20,
    paddingLeft: 10,
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
