import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React from "react";

const NotificationBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Notifications</Text>
      <TextInput placeholder={"enter something..."} style={styles.Input} />
      <Button
        style={styles.InputButton}
        title="Enter"
        onPress={() => {
          ToastAndroid.show("Hello Notification", ToastAndroid.SHORT);
        }}
      />
    </View>
  );
};

export default NotificationBox;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  Title: {
    textAlign: "center",

    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Input: {
    margin: 50,
  },
  InputButton: {
    padding: 10,
  },
});
