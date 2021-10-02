// Another way to accomplish what is done is CounterScreen.js but with another method

import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const reducer  = (state, action) => {
    switch(action.type) {
        case 'increase':
            return { ...state, counter: state.counter + action.amount};
        case 'decrease':
            return { ...state, counter: state.counter - action.amount};
        case 'default':
            return state;
    }
};

const OptionalCounterScreen = () => {
    let [state, dispatch] = useReducer(reducer, {counter: 0});

    return <View>
        <Button 
            title="Increase counter"
            onPress={() => dispatch({ type: 'increase', amount: 1})}
        />
        <Button 
            title="Decrease counter"
            onPress={() => dispatch({ type: 'decrease', amount: 1})}
        />
        <Text style={styles.default}>Current Count: {state.counter}</Text>
    </View>
}

const styles = StyleSheet.create({
   default: {
       fontSize: 25
   } 
});

export default OptionalCounterScreen;