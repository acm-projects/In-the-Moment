import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Profile from '../assets/images/profile.svg';
import Apps from '../assets/images/apps.svg';
import Location from '../assets/images/location.svg';

const HomePage = ({navigation}) => (

    <View style={styles.container}>

        <LinearGradient
            colors={['rgba(156, 182, 234, 1)', 'rgba(255, 155, 195, 1)']}

            style={styles.box}>

            <Text style={styles.text}>
                You are not in the {'\n'} moment
            </Text>

            <Text style={styles.text2}>
                Two friends nearby
            </Text>

        </LinearGradient>

        <View style={styles.ImageBackground}>
            <Image
        style={styles.Image}
        source={require('../assets/images/sell_geolocation.png')}
        />
        </View>

        <LinearGradient
            colors={['rgba(156, 182, 234, 1)', 'rgba(255, 155, 195, 1)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.bottomPanel}>
            <TouchableOpacity onPress={() => {} }>
                <Location width={110} height={110} style={styles.icon1} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('restrictedApps')} }>
                <Apps width={76} height={74} style={styles.icon2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('profilePage')} }>
                <Profile width={75} height={75} style={styles.icon2} />
            </TouchableOpacity>
        </LinearGradient>

    </View>

)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    box: {
        height: 150,
        width: '100%',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        
    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',
    },
    text2: {
        fontSize: 15,
        color: 'white',
        marginTop: 15,
        textAlign: 'center'
    },
    ImageBackground: {
        flex: 1,
    },
    Image: {
        resizeMode: 'contain',
        aspectRatio: 1,
        marginTop: 0,
      },
    bottomPanel: {
        height: 110,
        width: '100%',
        ajustifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
    },
    icon1: {
        borderRadius: 5,
        padding: 10,
        marginRight: 30,
        marginLeft: 5
    },
    icon2: {
        borderRadius: 5,
        padding: 10,
        marginRight: 45,  
        marginTop: 20  
    },
    icon3: {
        borderRadius: 5,
        padding: 10,
        marginTop: 20
    }
    
})
 
export default HomePage;