import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RestrictedLocations = ({navigation}) => {
    placeholder = 'https://via.placeholder.com/150'
    const [items, setItems] = useState([
        {
          id: 1,
          address: '308, Negra Arroyo Lane, Albuquerque, New Mexico, 87104',
          radius: '2 miles',
        },
        {
          id: 2,
          address: 'University of Texas at Dallas',
          radius: '5 miles',
        },
        {
          id: 3, 
          address: 'Chipotle Mexican Grill',
          radius: '2 miles',
        },
      ]);

      const handleDeleteItem = (itemId) => {
        Alert.alert(
          'Confirm Delete',
          'Are you sure you want to delete this item?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => {
                const newList = items.filter((item) => item.id !== itemId);
                setItems(newList);
              },
            },
          ],
          { cancelable: false }
        );
      };

      const [location, setLocation] = useState("");

      const renderItem = (item) => {
        return (

        <View style = {styles.textContainer}>
            <Text style={styles.itemAddress}> {item.address}: </Text>
            <Text style={styles.itemRadius}>Radius: {item.radius} </Text>
        </View>

        );
      };

      return (
        <LinearGradient
        colors={['#FAC3FF', '#377AFF']}
        style={styles.Background}
        >  

          <View style={styles.topContainer}>
            <TouchableOpacity onPress={() => {navigation.goBack()} }>
                <Image source={require('../assets/images/back_arrow.png')} style={styles.icon2} />
            </TouchableOpacity>
            <Text style = {styles.title}>Restricted Locations</Text>
          </View>
            
            <View style={styles.container}>
                <ScrollView style = {styles.scroll}>
                {items.map((item) => {
                    return (
                    <View style={styles.borderContainer} key={item.id}>
                        {renderItem(item)}
                        <TouchableOpacity onPress={() => {handleDeleteItem(item.id)} }>
                            <Image source={require('../assets/images/cross.png')} style={styles.cross}/>
                        </TouchableOpacity>
                    </View>
                    );
                })}
                </ScrollView>
            </View>
            <ScrollView>
            <TextInput style={styles.TextInput} 
                placeholder={'Enter location'} 
                placeholderTextColor= 'black'
                onChangeText={setLocation}
                value={location}
                
            />
             <Image
                style={styles.Image}
                source={require('../assets/images/sell_geolocation.png')}
            />
            </ScrollView>
        </LinearGradient>
      )
}

const styles = StyleSheet.create({
    Background: {
        width: '100%',
        height: '100%',
        display: 'flex',
      },
      topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth:2
      },

      title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2F2929',
        textShadowColor: 'white',
        textShadowRadius: 10,
        letterSpacing: 2,
        marginRight: 60,
        marginTop: 5,
      },
      container: {
        height: '30%',
        borderBottomWidth: 4,
        borderColor: '#2F2929'
        
      },
      scroll: {
        flexGrow: 0
      },
      borderContainer: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#2F2929',
        marginBottom: 5,
        justifyContent: 'space-between'
      },
      textContainer: {
        flexDirection: 'column'
      },
      itemAddress: {
        fontSize: 21,
        fontWeight: '500',
        color: '#203c52',
      },
      itemRadius: {
        fontSize: 22,
        marginTop: 20,
      },
      cross: {
        marginVertical: '50%',
      },
      TextInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#b0b2b5',
        padding: 13,
        borderRadius: 40,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center'
      },
      Image: {
        alignSelf: 'center'
      },
     
   
})
 
export default RestrictedLocations;