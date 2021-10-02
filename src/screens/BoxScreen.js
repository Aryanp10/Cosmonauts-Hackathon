import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle1}>Child #1</Text>
        <Text style={styles.textStyle2}>Child #2</Text>
        <Text style={styles.textStyle3}>Child #3</Text>
    </View>
}

/*
Important styling elements (other than normal margin/padding)
---------------------------
Parent (the <View> element in this case)
    *flexDirection
    *alignItems
    *justifyContent

Child (the <Text> elements in this case)
    *flex
    *alignSelf
    *position
    *top,bottom,left,right (use these with position set to absolute)
*/

const styles = StyleSheet.create({
    viewStyle: {
        height: 100,
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    textStyle1: {
        height: 50,
        borderWidth: 3,
        borderColor: 'red'
    },
    textStyle2: {
        height: 50,
        borderWidth: 3,
        borderColor: 'green',
        alignSelf: 'center'
    },
    textStyle3: {
        height: 50,
        borderWidth: 3,
        borderColor: 'blue'
    }
});

export default BoxScreen;