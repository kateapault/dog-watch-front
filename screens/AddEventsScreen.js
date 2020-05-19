import React from 'react'
import { FlatList, View, Text, Button, StyleSheet } from 'react-native'

import EventTile from '../components/EventTile'

const AddEventsScreen = props => {
    // const renderGridItem = () => {

    // }

    const eventsNav = () => props.navigation.navigate({
        routeName: 'AddEventDetail'
    })
    return(
        <View style={styles.screen}>
            <EventTile eventsNavigation={eventsNav}/>
            <EventTile eventsNavigation={eventsNav}/>
            <EventTile eventsNavigation={eventsNav}/>
            <EventTile eventsNavigation={eventsNav}/>
            <EventTile eventsNavigation={eventsNav}/>
            <EventTile eventsNavigation={eventsNav}/>
            <EventTile eventsNavigation={eventsNav}/>
            <EventTile eventsNavigation={eventsNav}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        flexWrap: 'wrap',
    }
});

export default AddEventsScreen;