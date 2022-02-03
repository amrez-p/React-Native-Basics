import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

function Animation() {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animated.loops loops the animation

    Animated.loop(
      //  Starts or stops all animation arrays at the same time
      Animated.parallel([
        // processes each animation in order
        Animated.sequence([
          Animated.spring(progress, {
            toValue: 1,
            useNativeDriver: true,
            duration: 2000,
          }),
          Animated.spring(progress, {
            toValue: 0.5,
            useNativeDriver: true,
            duration: 2000,
          }),
        ]),

        Animated.sequence([
          Animated.spring(scale, {
            toValue: 2,
            useNativeDriver: true,
            duration: 2000,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
            duration: 2000,
          }),
        ]),
      ]),
    ).start();
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          styles.square,
          {
            opacity: progress,
            transform: [
              { scale },
              {
                rotate: progress.interpolate({
                  inputRange: [0, 1],
                  //needs to be strings like this
                  outputRange: ["0deg", "50deg"],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#b5179e",
  },
});
export default Animation;
