import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const Gestures = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const Gest = Gesture.Pan().onUpdate((event) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <GestureDetector gesture={Gest}>
      <Animated.View style={[styles.square, rStyle]} />
    </GestureDetector>
  );
};

export default Gestures;

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#b5179e",
    borderRadius: 20,
  },
});
