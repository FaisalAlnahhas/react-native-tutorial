// a component is a function that returns JSX
/*
Four steps to create a component:
imports
define components to return JSX
Create stylesheet
Export component so it can be used everywhere in project
*/

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// view is used to group elements together 

//text is a primitive react element
//can't have objects inside Text element
const ComponentsScreen = () => { //can use function() instead of =>
    const greeting = 'Yo Yo Yo!'
    const greetingTextElement = <Text>Greeting Text Element</Text>
    const myName = 'Faisal'
    return (
        <View> 
            <Text style={styles.largerTextStyle}>Getting started with react native</Text>
            <Text style={styles.textStyle}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    largerTextStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;