import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

import QuickAddButton from './QuickAddButton'
import QuickLookInfo from './QuickLookInfo'

const DogQuickLook = props => {
    return(
        <View style={styles.container}>
            <QuickAddButton />
            <TouchableOpacity style={styles.container} onPress={()=>{console.log('quick look button pressed')}}>
                <Text style={styles.image}>Image here</Text>
                <QuickLookInfo />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'lightgrey',
    },
    image:{
        height:200,
        width:200,
        borderColor:'black',
        borderWidth:2,
    }
});

export default DogQuickLook;