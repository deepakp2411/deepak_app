import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

const Texts = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fill up the form</Text>
      <TextInput
        // multiline
        style={styles.input}
        placeholder="eg. John"
        onChangeText={(v) => setName(v)}
        maxLength={18}
        secureTextEntry
      />
      <TextInput
        // multiline
        style={styles.input}
        placeholder="e.g 955959559"
        onChangeText={(v) => setNum(v)}
        keyboardType='phone-pad'
        maxLength={10}
      />
      <Text style={styles.text}>You name is: {name}</Text>
      <Text style={styles.text}>You name is: {num}</Text>
    </View>
  );
};

export default Texts;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "azure",
    marginTop: 30,
    // justifyContent:'center',
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    width: 250,
    height: 50,
    color: "grey",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    color: "red",
    padding: 10,
    margin: 5
  },
  item: {
    margin: 10,

    backgroundColor: "#4ae1fa",
  },
  text: {
    fontSize: 20,
    textTransform:'uppercase',
    margin: 20,
  },
});
