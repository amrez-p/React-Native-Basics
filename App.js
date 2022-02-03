import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animation from "./Screens/Animation";
import Gestures from "./Screens/Gestures";
import VibrationApi from "./Screens/VibrationApi";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <GestureHandlerRootView> is important to get gestures working */}
      {/* <GestureHandlerRootView>
        <Gestures />
      </GestureHandlerRootView> */}

      {/* <Animation /> */}
      <VibrationApi />
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
