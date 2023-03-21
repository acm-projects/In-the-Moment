import {StyleSheet, Text} from 'react-native';
import {View, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfilePage = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <LinearGradient
          colors={['#8CBBF1', '#FF9BC3']}
          style={styles.profile}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>inthemoment@gmail.com</Text>
          </LinearGradient>
      </View>
      <View style={styles.middleView}>
        <LinearGradient
          colors={['#8CBBF1', '#FF9BC3']}
          style={styles.item}></LinearGradient>
        <LinearGradient
          colors={['#8CBBF1', '#FF9BC3']}
          style={styles.item}></LinearGradient>
        <LinearGradient
          colors={['#8CBBF1', '#FF9BC3']}
          style={styles.item}></LinearGradient>
        <LinearGradient
          colors={['#8CBBF1', '#FF9BC3']}
          style={styles.item}></LinearGradient>
        <LinearGradient
          colors={['#8CBBF1', '#FF9BC3']}
          style={styles.item}></LinearGradient>
        <LinearGradient
          colors={['#8CBBF1', '#FF9BC3']}
          style={styles.item}></LinearGradient>
      </View>
      <View style={styles.bottomView}>
        <LinearGradient style={styles.Button} colors={['#F97794', '#A771FF']}>
          <Button
            color={'white'}
            title={`SIGN OUT`}
            onPress={() => {
              navigation.navigate('signUp');
            }}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
  topView: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleView: {
    width: '100%',
    height: '35%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 350,
    height: 310,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 70,
    alignItems: 'center',
  },
  item: {
    width: 90,
    height: 90,
    borderRadius: 25,
    margin: 18,
  },
  Button: {
    width: '70%',
    borderRadius: 17,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 6,
  },
  name: {
    fontSize: 50,
    color: 'white',
    marginTop: 160,
  },
  email: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  }
});
