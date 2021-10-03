import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ( props ) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Hermit!</Text>
      <Button
        onPress={() => props.navigation.navigate('Intro')}
        title="Go to Intro screen"
      />
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate('List')}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate('Image')}
      />
      <Button 
        title="Go to Counter Screen" 
        onPress={() => props.navigation.navigate('Counter')} 
      />
      <Button 
        title="Go to Color Screen" 
        onPress={() => props.navigation.navigate('Color')} 
      />
      <Button 
        title="Go to Rgb Screen" 
        onPress={() => props.navigation.navigate('Rgb')} 
      />
      <Button 
        title="Go to Text Screen" 
        onPress={() => props.navigation.navigate('Text')} 
      />
      <Button 
        title="Go to Meme Text Screen" 
        onPress={() => props.navigation.navigate('MemeText')} 
      />
      <Button 
        title="Go to Box Screen" 
        onPress={() => props.navigation.navigate('Box')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  dark: {
      backgroundColor: 'black',
      backgroundCard: '#25282c',
      color: 'white'
    },
   light: {
     backgroundColor: 'white',
     backgroundCard: '#fff',
     color: 'black'
  }
});

export default HomeScreen;

