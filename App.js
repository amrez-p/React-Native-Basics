import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animation from "./Screens/Animation";
import Gestures from "./Screens/gestures";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Animation /> */}
      <Gestures />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
