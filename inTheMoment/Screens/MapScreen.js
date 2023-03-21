import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapScreen = ({navigation}) => {
  const [markers, setMarkers] = useState([]);

  const handlePress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMarkers([...markers, coordinate]);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handlePress}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker} />
        ))}
      </MapView>
      <View style={styles.infoContainer}>
        <Text>Tap on the map to add a marker</Text>
        <Text>You have {markers.length} markers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    ...StyleSheet.absoluteFillObject
  },
  infoContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default MapScreen;