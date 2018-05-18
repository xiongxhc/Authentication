//Import Library
import React from 'react';
import { Text, View } from 'react-native';

//Create Funtional Component
const Header = (props) => {
    const {textStyle, viewStyle} = styles
    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}>{ props.headerText }</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
};

//Make Available
export { Header };
