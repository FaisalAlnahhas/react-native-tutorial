import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>My HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Components Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Image Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Counter Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Color Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Square Color Demo"
      />
      {/* <TouchableOpacity 
        onPress={() => props.navigation.navigate('List')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
