import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Gestures = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({ x: 0, y: 0 });

  const Gest = Gesture.Pan()
    .onStart(() => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    });

  const followX = useDerivedValue(() => {
    return withSpring(translateX.value);
  });
  const followY = useDerivedValue(() => {
    return withSpring(translateY.value);
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: followX.value }, { translateY: followY.value }],
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
