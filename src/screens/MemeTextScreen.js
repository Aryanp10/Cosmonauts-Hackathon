import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const MemeTextScreen = () => {

    const [name, setName] = useState("");
    const keyWord = 'Saloni'

    function validateName(nme) {
        if (nme == keyWord) {
            return <Text>Saloni is a bad baby!</Text>
        }
        else if ((name != keyWord) && (name != "")) {
            return <Text>{name} is a amazing!</Text>
        }
    }

    return <View>
        <Text>Enter your name: </Text>
        <TextInput 
            style={styles.input}
            autoCorrect={false}
            value={name}
            onChangeText={(newText) => setName(newText)}
        >    
        </TextInput>
        {validateName(name)}
    </View>

};

// TextInput is basically invisible by default, so it always needs styling

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default MemeTextScreen;