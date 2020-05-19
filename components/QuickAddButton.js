import React from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet } from 'react-native';

const QuickAddButton = props => {
    return(
        <TouchableOpacity style={styles.button} onPress={props.eventsNavigation}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        display:'flex',
        flexDirection: 'column',
        backgroundColor:'blue',
        height:'100%',
        alignItems:'center',
        borderRadius:10,
        // justifyContent:'center',
    },
    buttonText:{
        color:'white',
        fontSize:42,
        padding: 10,
    }
});

export default QuickAddButton;