import React, { useState } from "react";
import { useReducer } from "react";
import { FlatList, StyleSheet, View, Button, Text } from "react-native";

const ColorCounter = ({ color, Increase, Decrease, Reset }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => {
          Increase();
        }}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => {
          Decrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
