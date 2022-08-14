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
  Modal,
} from "react-native";

const Modals = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);

  const onPressH = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShow(true);
    }
  };
  return (
    <View style={styles.container}>
      <Modal visible={show} onRequestClose={() => setShow(false)} animationType='fade' hardwareAccelerated>
        <View style={styles.center_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 character
              </Text>
              <Pressable
                onPress={() => setShow(false)}
                style={styles.warning_button}
                android_ripple={{ color: "yellow" }}
              >
                <Text style={styles.text}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Fill up the form</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. John"
        onChangeText={(v) => setName(v)}
      />
      <Pressable
        onPress={onPressH}
        android_ripple={{ color: "yellow" }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "red" : "green" },
          styles.button,
        ]}
      >
        <Text style={styles.text}>{submitted ? "clear" : "Submit"}</Text>
        {submitted ? (
          <Text style={styles.text}>Your name is:{name}</Text>
        ) : null}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    marginTop: 50,
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
    margin: 10,
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 20,
  },
  center_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "#00ffff",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default Modals;
