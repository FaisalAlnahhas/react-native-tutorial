import React, { useState } from "react";
import { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  let broken_counter = 0; // doesn't work because it does not update the state value
  const [counter, setCounter] = useState(0); //array destructuring

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.text}> Current count = {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default CounterScreen;
