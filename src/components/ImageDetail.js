// For use in ImageScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail= ( props ) => {
    return <View>
        <Image source={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>Image score - {props.score}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    }
});

export default ImageDetail;