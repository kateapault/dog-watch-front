import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuickLookInfo = props => {
    return(
        <View style={styles.container}>
            <Text>DOG NAME</Text>
            <Text>Last fed</Text>
            <Text>Last out</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'purple',
        height:'100%',
    }
});

export default QuickLookInfo;