import React, { useState } from "react";
import { useReducer } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";

const ColorScreen = (red, green, blue) => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add in color"
        onPress={() => {
          setColors([...colors, randomRgb()]); //... creates copy of the array and replaces the variable with random rgb
        }}
      />
      <FlatList
        keyExtractor={(item) => item} //the key is unique to allow elements not conflict on screen, can be an id or something,
        // with 3 random numbers it's highly unlikely for it to repeat => unique
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
