// This is another way to accomplish what is done in RgbScreen.js but with a different method
// Use the OptionalRgbComponent with this

import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import OptionalRgbComponent from '../components/OptionalRgbComponent';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const OptionalRgbScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return <View>
        <OptionalRgbComponent  onIncrease={ () => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})} onDecrease={ () => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT})} increment={COLOR_INCREMENT} colorName='red' colorVariable={red} ></OptionalRgbComponent>
        <OptionalRgbComponent  onIncrease={ () => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})}  onDecrease={ () => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT})} increment={COLOR_INCREMENT} colorName='green' colorVariable={green} ></OptionalRgbComponent>
        <OptionalRgbComponent  onIncrease={ () => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})}  onDecrease={ () => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})} increment={COLOR_INCREMENT} colorName='blue'colorVariable={blue} ></OptionalRgbComponent>
        <View style={ {height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`} }></View>
    </View>
}

const styles = StyleSheet.create({});

export default OptionalRgbScreen;