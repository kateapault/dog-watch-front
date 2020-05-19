import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const AddEventDetailScreen = props => {
    return(
        <View>
            <Text>Add EVENT NAME</Text>
            <Button title="ADD" onPress={()=>{console.log("EVENT ADDED")}}></Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AddEventDetailScreen;