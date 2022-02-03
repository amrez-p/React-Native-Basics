import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animation from "./Screens/Animation";
import Gestures from "./Screens/Gestures";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <GestureHandlerRootView> is important to get gestures working */}
      <GestureHandlerRootView>
        <StatusBar style="auto" />
        {/* <Animation /> */}

        <Gestures />
      </GestureHandlerRootView>
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
