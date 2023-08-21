/* eslint-disable prettier/prettier */

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
import ImagedCardView from 'react-native-imaged-card-view';
import {Card, Avatar} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
function Cardd({navigation, sr, name, rd, mn}) {
  // var s = 'jpa.jpg'; // some issue
  return (
    <ImageBackground
      source={require('../assets/images/w.jpg')}
      style={{
        width: '100%',
        height: 280,
        borderRadius: 20,
      }}
      resizeMode="cover">
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: sr,
          }}
          style={{width: 190, height: 190, borderRadius: 10}}
        />
        <View
          style={{
            flexDirection: 'column',
            paddingLeft: 20,
            paddingTop: 10,
          }}>
          <Text style={styles.textcard}>{name}</Text>
          <Text style={styles.textcard}>{rd}</Text>
          <Text style={styles.textcard}>{mn}</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
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
      style={{width: '100%', height: 200}}
      resizeMode="cover">
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Icon
          size={30}
          color="blue"
          name={Platform.OS === 'android' ? 'arrow-back-outline' : 'ios-list'}
        />
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textt}> Fares From Jaddah</Text>
        <Icon
          size={32}
          name={Platform.OS === 'android' ? 'chevron-down-outline' : 'ios-list'}
        />
      </View>

      <SearchBar
        inputContainerStyle={{backgroundColor: 'black', borderRadius: 10}}
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
        onChangeText={updateSearch}
        value={search}
      />
    </ImageBackground>
  );
}
export default function Tripsreport({route, navigation}) {
  const data1 = [];
  var cardescrption = {};
  const data2 = [
    {
      id: 1,
      CardTitle: 'BMW F30',
      subtitle: '415k Egyption pound ',
      descrpition: 'Model::2010  KM::200k  In good condtion ',
      srcimg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6WA3sz9izcmjv_newatbGUJASfDCRFK_ig&usqp=CAU',
    },
    {
      id: 2,
      CardTitle: 'Mercedes c180 ',
      subtitle: '400k Egyption pound',
      descrpition: 'Model::2010  KM::150k  In good condtion',
      srcimg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Cxawm5Js9U8pNyHE0_yw_zLIq_35D8bOjGQHRNSV&s',
    },
    {
      id: 3,
      CardTitle: 'Fiat Tipo',
      subtitle: '500k Egyption pound',
      descrpition: 'Model::2022  KM::10k  In new condtiont',
      srcimg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadiH9dCZtrTsDETbHsy3aEQQWN9zHMe3QVA&usqp=CAU',
    },
    {
      id: 4,
      CardTitle: 'Hond civic',
      subtitle: '800k Egyption pound',
      descrpition: 'Model::2022  KM::3k  In new condtiont',
      srcimg:
        'https://www.honda-mideast.com/ar/-/media/honda/new-civic2022/highlights/highlight-img-1.jpg',
    },
  ];

  return (
    <>
      <Title navigation={navigation} />
      <View>
        <FlatList
          data={[
            {
              id: 1,
              CardTitle: 'Japan,New',
              Roundtrip: 'Roundtrip From',
              price: '1,2355 SAR',
              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6WA3sz9izcmjv_newatbGUJASfDCRFK_ig&usqp=CAU',
            },
            {
              id: 2,
              CardTitle: 'Usa, New York',
              Roundtrip: 'Roundtrip From',
              price: '2,455 SAR',
              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRke9RE8ZXVeZpW3p5nfG3XjiBOuEnKmcyvMA&usqp=CAU',
            },
            {
              id: 3,
              CardTitle: 'Egypt,NEW',
              Roundtrip: 'Roundtrip From',
              price: '4,255 SAR',
              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOM4z8jw6yDYeR_VO8A4L3C71C0vv7YhemQ&usqp=CAU',
            },
          ]}
          renderItem={({item}) => (
            <View>
              <Cardd
                sr={item.srcimg}
                name={item.CardTitle}
                rd={item.Roundtrip}
                mn={item.price}
              />
            </View>
          )}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  textt: {
    color: '#000000',
    fontSize: 30,
    paddingLeft: 10,
  },
  textts: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingLeft: 10,
  },
  texttx: {
    color: '#000000',
    fontSize: 13,
    paddingLeft: 10,
  },
  textcard: {
    color: '#000000',
    fontSize: 25,
    paddingLeft: 10,
  },
  texttt: {
    color: '#FFFFFF',
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
