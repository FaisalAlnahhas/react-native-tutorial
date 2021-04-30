import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')} 
                imageScore={'1'} //can use ints instead of string
            />
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')} 
                imageScore={'2'}
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
                imageScore={'3'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ImageScreen;