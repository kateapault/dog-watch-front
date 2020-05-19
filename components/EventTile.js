import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const EventTile = props => {
    return(
        <TouchableOpacity style={styles.gridItem} onPress={props.eventsNavigation}>
            <View style={styles.container}>
                <Text style={styles.emoji}>Event Emoji</Text>
                <Text style={styles.label}>Event Text</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        // backgroundColor: 'green',   
        margin:15,
        height: 150,
        width: 150,
        
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'green',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        borderRadius: 50,
        padding: 10,
    },
    emoji: {
        fontWeight: 'bold',
        textAlign: 'center',

    },
    label: {
        fontStyle: 'italic',
        textAlign: 'center',
    }
})

export default EventTile