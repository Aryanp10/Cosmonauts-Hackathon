import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

const _IntroScreen = () => {

  const [name, setName] = useState("");

  function validateName() {
    return <Text style={styles.textStyle}>Hi {name}! I'm Hermit the Hermit Crab!</Text>
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Welcome to Hermit!</Text>
        <View style={styles.viewStyle2}>
          <Text style={styles.subHeaderStyle}>What is your name?</Text>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={(changedText) => setName(changedText)}>
          </TextInput>
          <Button
            onPress={() => {validateName}}
            title="Enter"
          />
        </View>
          {validateName}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 40,
  },
  viewStyle2: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeaderStyle: {
    fontSize: 20,
    textAlign: 'left',
  },
  input: {
    marginLeft: 30,
    borderColor: 'black',
    borderWidth: 1,
    width: 400,
  }
});

export default _IntroScreen;
