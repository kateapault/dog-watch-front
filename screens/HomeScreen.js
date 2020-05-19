import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

import DogQuickLook from '../components/DogQuickLook'

const HomeScreen = props => {
    const eventsNavigation = () => props.navigation.navigate({
        routeName: 'AddEvents'
    })


    return(
        <View style={styles.screen}>
            <DogQuickLook eventsNavigation={eventsNavigation} />
            <DogQuickLook eventsNavigation={eventsNavigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor: 'grey',
    },
    spacer:{
        height:20,
        width:10,
        backgroundColor:'white',
    }
});

export default HomeScreen;