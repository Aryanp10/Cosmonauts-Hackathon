import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

// Display interactive name
//    const [name, setName] = useState("");
//
//    return <View>
//        <Text>Enter Name:</Text>
//        <TextInput 
//            style={styles.input}
//            autoCapitalize='none'
//            autoCorrect={false}
//            value={name}
//            onChangeText={(newValue) => setName(newValue)}
//        />
//        <Text>My name is {name}</Text>
//    </View>

    // Validate password longer than x characters
    const [password, setPassword] = useState("");
    const numOfCharacters = 5;

    function validatePassword(passwd) {
        if (passwd.length < numOfCharacters) {
            return <Text>Password mush be longer than {numOfCharacters} characters</Text>
        }
    }

    return <View>
        <Text>Enter Password: </Text>
        <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(changedText) => setPassword(changedText)}
        >    
        </TextInput>
        {validatePassword(password)}
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

export default TextScreen;