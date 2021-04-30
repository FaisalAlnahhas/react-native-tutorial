import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name : 'Friend 1', age: 20}, //can define key here on each object like , {name: 'Friend 1', key = 'some string'}
        {name : 'Friend 2', age: 21},
        {name : 'Friend 3', age: 22},
        {name : 'Friend 4', age: 23},
        {name : 'Friend 5', age: 24},
    ]
    return (
        <FlatList
            // horizontal //same as horizontal = {true} shows horizontal display of elements Friend1Friend2
            // showsHorizontalScrollIndicator={false} // removes the scrollbar from showing
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
                // element === {item: {name: 'Friend 1'}, index: 0} 
                return (
                <Text style = {styles.textStyle}>
                    {item.name} - Age {item.age}
                </Text>
                )
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;