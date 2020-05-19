import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const AddEventsScreen = props => {
    return(
        <View>
            <Text>Add events!</Text>
            <Button title="Add this event" onPress={()=>props.navigation.navigate({routeName:'AddEventDetail'})}></Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AddEventsScreen;