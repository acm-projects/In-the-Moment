import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackArrow from '../assets/images/back_arrow.svg';

const RestrictedApps = ({navigation}) => {
  placeholder = 'https://via.placeholder.com/150';
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Item 1',
      status: 'Restricted',
      image: placeholder,
    },
    {
      id: 2,
      name: 'Item 2',
      status: 'Restricted',
      image: placeholder,
    },
    {
      id: 3,
      name: 'Item 3',
      status: 'Restricted',
      image: placeholder,
    },
    {
      id: 4,
      name: 'Item 4',
      status: 'Restricted',
      image: placeholder,
    },
    {
      id: 5,
      name: 'Item 5',
      status: 'Restricted',
      image: placeholder,
    },
    {
      id: 6,
      name: 'Item 6',
      status: 'Restricted',
      image: placeholder,
    },
    {
      id: 7,
      name: 'Item 7',
      status: 'Restricted',
      image: placeholder,
    },
  ]);

  const [isEnabled, setIsEnabled] = useState(false);
  const [status, setStatus] = useState('Unrestricted');

  const toggleSwitch = () => {
    if (isEnabled) {
      setStatus('Unrestricted');
    } else {
      setStatus('Restricted');
    }

    setIsEnabled(previousState => !previousState);
  };

  const renderItem = item => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.itemName}> {item.name}: </Text>
            <Text style={styles.itemStatus}>{status} </Text>
          </View>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.button}
            trackColor={{false: 'grey', true: 'purple'}}
            thumbColor={isEnabled ? 'white' : 'white'}
          />
        </View>
      </View>
    );
  };

  return (
    <LinearGradient colors={['#FAC3FF', '#377AFF']} style={styles.Background}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <BackArrow style={styles.icon2} />
        </TouchableOpacity>
        <Text style={styles.title}>Restricted Apps</Text>
      </View>

      <View style={styles.container}>
        <ScrollView>
          {items.map(item => {
            return (
              <View style={styles.borderContainer} key={item.id}>
                {renderItem(item)}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Background: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 3,
    marginTop: 35,
    borderBottomColor: 'white',
  },
  icon2: {},
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 70,
    marginTop: 5,
    color: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    marginTop: 10,
  },
  borderContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  textContainer: {
    flexDirection: 'row'
  },
  infoContainer: {
    flexDirection: 'column',
    marginBottom: 30,
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white'
  },
  itemStatus: {
    fontSize: 22,
    marginLeft: 0,
    color: 'white',

  },
  button: {
    backgroundColor: '#2f95dc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    
  }
});

export default RestrictedApps;
