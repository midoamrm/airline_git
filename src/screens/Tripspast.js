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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Trips');
            }}>
            <Text style={styles.texttap}>Upcoming</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.texttap}>Past</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
export default function Tripspast({route, navigation}) {
  const data1 = [];
  var cardescrption = {};

  return (
    // eslint-disable-next-line react/self-closing-comp
    <>
      <Title navigation={navigation} />
      <View>
        <FlatList
          data={[
            {
              id: 1,
              CardTitle: 'Jaddah-->Japan',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Completed Successfully ',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6WA3sz9izcmjv_newatbGUJASfDCRFK_ig&usqp=CAU',
            },
            {
              id: 2,
              CardTitle: 'Jaddah-->New York',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Completed Successfully',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRke9RE8ZXVeZpW3p5nfG3XjiBOuEnKmcyvMA&usqp=CAU',
            },
            {
              id: 3,
              CardTitle: 'Jaddah-->New York',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Completed Successfully',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOM4z8jw6yDYeR_VO8A4L3C71C0vv7YhemQ&usqp=CAU',
            },
            {
              id: 4,
              CardTitle: 'Jaddah-->New York',
              subtitle: '15-27 Aug . Round Trip ',
              descrpition: 'Completed Successfully',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzm8EW3fy70DwOJT4KRkrH9cSEmCYzHpM_w&usqp=CAU',
            },
            {
              id: 5,
              CardTitle: ' ',
            },
          ]}
          renderItem={({item}) => (
            <Card
              style={{
                backgroundColor: 'white',
                borderRadius: 0,
              }}>
              <Text style={styles.textttt}>{item.descrpition}</Text>
              <Card.Title title={item.CardTitle} />
              <Card.Cover source={{uri: item.srcimg}} />
              <Card.Content>
                <Text style={styles.item} variant="bodyMedium">
                  {item.subtitle}
                </Text>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => {}}>Manage</Button>
                <Button onPress={() => {}}>View</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
    </>
  );

  // eslint-disable-next-line eol-last
}
const styles = StyleSheet.create({
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
    color: '#FFA500',
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
