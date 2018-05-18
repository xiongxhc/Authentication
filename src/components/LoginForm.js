//Import Library
import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
    Card,
    CardSection,
    Button,
    Input,
    Spinner
} from './common';

//Create Class Component
export default class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        signInError: '',
        loading: false
    };

    //Login Handler
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({signInError: '', loading: true});

        //User Login
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            //If Failed / New User
            .catch(() => {
                //Create Account
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    //If Failed/ Wrong Password
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({
            loading: false,
            signInError: 'Authentication Failed'
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            signInError: ''
        });
    }

    //Render Button Or Spinner
    renderButton() {
        if (this.state.loading) {
            return <Spinner size = 'small'/>;
        }
        return (
            <Button onPress = {this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                //User Email
                <CardSection>
                    <Input
                        label = 'Email:'
                        placeholder = 'username@email.com'
                        value = {this.state.email}
                        onChangeText = {email => this.setState({email})}
                    />
                </CardSection>

                //Password
                <CardSection>
                    <Input
                        secureEntry
                        label = 'Password:'
                        placeholder = 'password'
                        value = {this.state.password}
                        onChangeText = {password => this.setState({password})}
                    />
                </CardSection>

                <Text style = {styles.signInErrorStyle}>
                    {this.state.signInError}
                </Text>

                //Login Button
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    signInErrorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
