

import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen() {
  const ring1padding=useSharedValue(0);
  const ring2padding=useSharedValue(0);
  const navigation=useNavigation();

  useEffect(()=>{
    ring1padding.value=0;
    ring2padding.value=0;
    setTimeout(()=>ring1padding.value=withSpring(ring1padding.value+hp(5)),100);
    setTimeout(()=>ring2padding.value=withSpring(ring2padding.value+hp(5.5)),300);

    setTimeout(()=>navigation.navigate("Home"),2500)
  },[]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
      
        <Image 
            source={require('../../assets/images/welcome.png')}
            style={styles.image}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Foody
        </Text>
        <Text style={styles.subtitle}>
          Food is always right
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC107',
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 100,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
  },
  subtitle: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 20,
  },
});
