import React, { useState } from "react";
import { useReducer } from "react";
import { FlatList, StyleSheet, View, Button, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  

  console.log("red:" + red);
  console.log("green: " + green);
  console.log("blue: " + blue);


  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    default:
        return;
    }
  };

  const changeValue = 10;
  return (
    <View>
      <ColorCounter
        Increase={() => setColor("red", changeValue)}
        Decrease={() => setColor("red", -1 * changeValue)}
        color="Red"
      />
      <ColorCounter
        Increase={() => setColor("green", changeValue)}
        Decrease={() => setColor("green", -1 * changeValue)}
        color="Green"
      />
      <ColorCounter
        Increase={() => setColor("blue", changeValue)}
        Decrease={() => setColor("blue", -1 * changeValue)}
        color="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
