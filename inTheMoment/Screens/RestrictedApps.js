import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RestrictedApps = ({navigation}) => {
    placeholder = 'https://via.placeholder.com/150'
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

      const renderItem = (item) => {
        return (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.infoContainer}>
              <Text style={styles.itemName}> {item.name}: </Text>
              <Text style={styles.itemStatus}>{item.status} </Text>
              {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button</Text>
              </TouchableOpacity> */}
            </View>
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
            <Text style = {styles.title}>Restricted Apps</Text>
          </View>
            
            <View style={styles.container}>
                <ScrollView>
                {items.map((item) => {
                    return (
                    <View style={styles.borderContainer} key={item.id}>
                        {renderItem(item)}
                    </View>
                    );
                })}
                </ScrollView>
            </View>
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
      icon1: {
        marginTop: 30,
        marginLeft: 15
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2F2929',
        marginRight: 70,
        marginTop: 5
      },
      container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginHorizontal: 16,
        marginTop: 16,
      },
      borderContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#2F2929',
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
      infoContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
      },
      itemName: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 8,
        
      },
      itemStatus: {
        fontSize: 26,
        marginLeft: 0,
      },
      button: {
        backgroundColor: '#2f95dc',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
})
 
export default RestrictedApps;