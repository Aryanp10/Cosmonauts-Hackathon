import React, {useState} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    let [counter, setCounter] = useState(0);

    return <View>
        <Button 
            title="Increase counter"
            onPress={() => setCounter(counter + 1)}
        />
        <Button 
            title="Decrease counter"
            onPress={() => setCounter(counter - 1)}
        />
        <Text style={styles.default}>Current Count: {counter}</Text>
    </View>
}

const styles = StyleSheet.create({
   default: {
       fontSize: 25
   } 
});

export default CounterScreen;