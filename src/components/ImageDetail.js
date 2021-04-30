import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, ShadowPropTypesIOS } from "react-native";


const ImageDetail = ({title, imageScore, imageSource}) => {
    return (
        <View>
            <Image 
                source={imageSource}
            />
             <Text>{title}</Text>
             <Text>Image Score: {imageScore}</Text>
             
        </View>
       
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });
  
  export default ImageDetail;