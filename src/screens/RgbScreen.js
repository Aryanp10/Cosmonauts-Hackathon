import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RgbComponent from '../components/RgbComponent';

const COLOR_INCREMENT = 20;

const RgbScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return <View>
        <RgbComponent onIncrease={() => setRed(red + COLOR_INCREMENT)} onDecrease={() => setRed(red - COLOR_INCREMENT)} colorName="Red" increment={COLOR_INCREMENT} colorVariable={red} ></RgbComponent>
        <RgbComponent onIncrease={() => setGreen(green + COLOR_INCREMENT)} onDecrease={() => setGreen(green - COLOR_INCREMENT)} colorName="Green" increment={COLOR_INCREMENT} colorVariable={green} ></RgbComponent>
        <RgbComponent onIncrease={() => setBlue(blue + COLOR_INCREMENT)} onDecrease={() => setBlue(blue - COLOR_INCREMENT)} colorName="Blue" increment={COLOR_INCREMENT} colorVariable={blue} ></RgbComponent>
        <View style={ {height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`} }></View>
    </View>
}

const styles = StyleSheet.create({});

export default RgbScreen;