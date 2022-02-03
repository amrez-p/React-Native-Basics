import { Button, StyleSheet, Text, View, Vibration } from "react-native";
import React from "react";

const VibrationApi = () => {
  const ONE_SECOND = 1000;

  return (
    <View>
      <Text style={styles.Title}>Vibration API</Text>
      <Button
        title={"Vibrate Once"}
        onPress={() => Vibration.vibrate(ONE_SECOND)}
      />
    </View>
  );
};

export default VibrationApi;

const styles = StyleSheet.create({
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
