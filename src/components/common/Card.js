//Import Library
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Create Funtional Component
const Card = (props) => {
    return (
    <View style = {styles.cardStyle}>
        {props.children}
    </View>
    );
};

const styles = StyleSheet.create ({
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDD',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
});

export { Card };
