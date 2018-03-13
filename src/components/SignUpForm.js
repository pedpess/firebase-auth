import React from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button, Card } from 'react-native-elements';

import axios from 'axios';

const BASE_URL = 'https://us-central1-one-time-password-6f6b1.cloudfunctions.net';

export default class SignUpForm extends React.Component {

    state = {
        phone: '',
    }

    handleSubmit = async () => {
        const { phone } = this.state;
        try {
            await axios.post(`${BASE_URL}/create_user`, { phone });
            await axios.post(`${BASE_URL}/requestOneTimePassword`, { phone });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Card title="Sign Up">
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number </FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <Button onPress={() => this.handleSubmit()} title="Submit" />
            </Card>
        );
    }
}