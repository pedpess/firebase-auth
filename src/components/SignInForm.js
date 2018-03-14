import React from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button, Card } from 'react-native-elements';
import firebase from 'firebase';

import axios from 'axios';

const BASE_URL = 'https://us-central1-one-time-password-6f6b1.cloudfunctions.net';

export default class SignInForm extends React.Component {

    state = {
        phone: '',
        code: '',
    }

    handleSubmit = async () => {
        const { phone, code } = this.state;
        try {
            let { data } = await axios.post(`${BASE_URL}/verifyOneTimePassword`, { phone, code });
            await firebase.auth().signInWithCustomToken(data.token);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Card title="Sign In">
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number </FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                    <FormLabel>Enter Code Number </FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>
                <Button onPress={() => this.handleSubmit()} title="Submit" />
            </Card>
        );
    }
}