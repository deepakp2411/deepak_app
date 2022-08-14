import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Alert,
  ToastAndroid,
} from "react-native";

const Buttond = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onPressH = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      //   Alert.alert(
      //     "warning",
      //     "The name must be longer than 3 char",
      //     [
      //       {
      //         text: "OK",
      //         onPress: () => {
      //           console.warn("Ok Pressed");
      //         },
      //       },
      //       {
      //         text: "Cancel",
      //         onPress: () => {
      //           console.warn("Cancel Pressed");
      //         },
      //       },
      //       {
      //         text: "Do not show",
      //         onPress: () => {
      //           console.warn("Do not Pressed");
      //         },
      //       },
      //     ],
      //     {
      //       cancelable: true,
      //     }
      //   );
      ToastAndroid.showWithGravityAndOffset(
        "The name must be 3 char",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100,
        100
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fill up the form</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. John"
        onChangeText={(v) => setName(v)}
        // secureTextEntry
      />
      {/* <TouchableHighlight
        style={styles.button}
        onPress={onPressH}
        activeOpacity={0.6}
        underlayColor="red"
      > */}
      <Pressable
        onPress={onPressH}
        android_ripple={{ color: "yellow" }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "red" : "green" },
          styles.button,
        ]}
      >
        <Text style={styles.text}>{submitted ? "clear" : "Submit"}</Text>
      </Pressable>
      {/* </TouchableHighlight> */}
      {/* <Button title={submitted ? "clear" : "Submit"} onPress={onPressH} color='red' />
      {submitted ? <Text style={styles.text}>Your name is:{name}</Text> : null} */}
      {submitted ? <Text style={styles.text}>Your name is:{name}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "blue",
    marginTop: 50,
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
    margin: 10,
  },
  item: {
    margin: 10,

    backgroundColor: "#4ae1fa",
  },
  text: {
    fontSize: 20,
    // textTransform: "uppercase",
    margin: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    // backgroundColor: "purple",
    // color: 'black'
  },
});

export default Buttond;
