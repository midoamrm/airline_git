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
      source={require('../assets/images/clt.jpg')}
      style={{width: '100%', height: 300}}
      resizeMode="cover">
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Icon
          size={23}
          name={Platform.OS === 'android' ? 'list' : 'ios-list'}></Icon>
      </TouchableOpacity>

      <Text style={styles.textt}> Hi,Ahamed</Text>
      <Text style={styles.texttt}>Join Us,and enjoy exclusive benefits</Text>
      <SearchBar
        inputContainerStyle={{backgroundColor: 'white'}}
        leftIconContainerStyle={{backgroundColor: 'white'}}
        inputStyle={{backgroundColor: 'white'}}
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

      <View
        style={{
          position: 'absolute',
          top: 190,
          left: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Card
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Button style={styles.button} title="On Time" color={'green'} />
            <Text style={styles.textsp}>
              ffffffffffffffffffffffffffffffffffff
            </Text>
            <Text style={{color: 'green', paddingLeft: 3}} onPress={() => {}}>
              Borading pass
            </Text>
          </View>
          <Text style={styles.texttx}>RLIH+DXB</Text>
          <Text style={styles.texttxr}>Gate Closess in 3h 55m</Text>
          <Text style={styles.texttx}>
            Terminla <Text style={styles.textsp}>ffffff</Text> Gate
            <Text style={styles.textsp}>fffffffffffff</Text>Time
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={styles.textt1a}>
            1A <Text style={styles.textsp}>fffffffffffffffffffffff</Text>15A
            <Text style={styles.textsp}>fffffffffffff</Text> 21:53
          </Text>
        </Card>
      </View>
    </ImageBackground>
  );
}
export default function HomeS({route, navigation}) {
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
    // eslint-disable-next-line react/self-closing-comp
    <>
      <Title navigation={navigation} />
      <View style={{paddingTop: 160}}>
        <Text style={{fontSize: 30}}>Spicel Offer</Text>
        <FlatList
          data={[
            {
              id: 1,
              CardTitle: 'Japan,New',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6WA3sz9izcmjv_newatbGUJASfDCRFK_ig&usqp=CAU',
            },
            {
              id: 2,
              CardTitle: 'Usa, New York ,NEW',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRke9RE8ZXVeZpW3p5nfG3XjiBOuEnKmcyvMA&usqp=CAU',
            },
            {
              id: 3,
              CardTitle: 'Egypt,NEW',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOM4z8jw6yDYeR_VO8A4L3C71C0vv7YhemQ&usqp=CAU',
            },
            {
              id: 4,
              CardTitle: 'saudi arabia,NEW ',

              srcimg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzm8EW3fy70DwOJT4KRkrH9cSEmCYzHpM_w&usqp=CAU',
            },
            {
              id: 5,
              CardTitle: 'Dummy End',

              srcimg:
                'https://www.honda-mideast.com/ar/-/media/honda/new-civic2022/highlights/highlight-img-1.jpg',
            },
          ]}
          renderItem={({item}) => (
            <Card
              style={{
                backgroundColor: 'white',
                borderRadius: 50,
              }}>
              <Card.Title title={item.CardTitle} subtitle={item.descrpition} />
              <Card.Cover
                style={{
                  width: 370,
                  paddingLeft: 40,
                }}
                source={{uri: item.srcimg}}
              />
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
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 10,
  },
  textts: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingLeft: 10,
  },
  texttx: {
    color: '#000000',
    fontSize: 30,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  textt1a: {
    color: '#000000',
    fontSize: 30,
    paddingLeft: 10,
    paddingBottom: 40,
  },
  texttxr: {
    color: '#000000',
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 10,
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
