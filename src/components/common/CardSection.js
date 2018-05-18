//Import Library
import React from 'react';
import { StyleSheet, View } from 'react-native';

//Create Funtional Component
const CardSection = (props) => {
    return(
        <View style = {styles.sectionStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    sectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#DDD',
        position: 'relative'
    },
};

export { CardSection };
