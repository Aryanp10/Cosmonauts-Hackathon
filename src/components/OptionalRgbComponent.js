// For use in OptionalRgbScreen.js
import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, Button} from 'react-native';

const OptionalRgbComponent = ( props ) => {

    return <View>
        <Text style={styles.default}>{props.colorName}</Text>
        <Button 
            title={"Increase " + props.colorName} 
            onPress={() => {
                if (props.colorVariable + props.increment > 255) {
                    return;
                }
                else {
                    props.onIncrease();
                }
            }} 
        />
        <Button 
            title={"Decrease " + props.colorName}
            onPress={() => {
                if (props.colorVariable - props.increment < 0) {
                    return;
                }
                else {
                    props.onDecrease();
                }
            }} 
            onPress={() => {
                props.onDecrease();
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    default: {
        fontSize: 25
    }
});

export default OptionalRgbComponent;