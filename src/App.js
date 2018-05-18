//Import Library
import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

//Class Base Component
export default class App extends React.Component {
    //State
    state = { loggedIn: null };

    componentWillMount() {
        // initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyAkF9bx-nbTK7dyZ9_oKcXTN7KS4rN86WY",
            authDomain: "authenticationtest-xhc.firebaseapp.com",
            databaseURL: "https://authenticationtest-xhc.firebaseio.com",
            projectId: "authenticationtest-xhc",
            storageBucket: "authenticationtest-xhc.appspot.com",
            messagingSenderId: "922498091915"
        };
        const firebaseApp = firebase.initializeApp(firebaseConfig);

        //User State Change
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress = {() => firebase.auth().signOut()}>
                        Logout
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size = 'large'/>;
        }
    }

    //Render UI to screen
    render() {
        return (
            <View>
                <Header headerText = {'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}
