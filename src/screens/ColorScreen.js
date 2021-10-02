import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Button} from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    return <View>
        <Button title="Add a color" onPress={() => {
            setColors([...colors, randomRgb()])
        }} /> 
        <FlatList 
            data={colors} 
            renderItem={( {item} ) => {
                return <View style={{height: 100, width: 100, backgroundColor: item }} />;
            }} 
            keyExtractor={(item) => item}
        />
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    default: {
        fontSize: 25
    }
});

export default ColorScreen;