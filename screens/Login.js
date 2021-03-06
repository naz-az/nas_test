import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

const Login = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image 
                    source={require('../assets/friibee_back_white1.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Welcome back!</Text>
                <Text style={styles.textBody}>Log into your existing account</Text>
                <View style={{marginTop: 20}} />
                <Inputs name="EMAIL or USERNAME" icon="user" />
                <Inputs name="PASSWORD" icon="lock" pass={true} />
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Username or Password?</Text>
                </View>
                <Submit title="LOG IN" color="#D2573C" />
                <Text style={styles.textBody}>or connect using</Text>
                <View style={{flexDirection: 'row'}}>
                    <Account color="#ec482f" icon="google" title="Google" />
                    <Account color="#3b5c8f" icon="facebook" title="Facebook" />
                    <Account color="gray" icon="apple" title="Apple" />
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Don't have an account? </Text>
                    <Text style={[styles.textBody, {color: '#D2573C'}]} onPress={() => props.navigation.navigate('SignUp')}> Sign Up</Text>
                </View>
            </View>
        </ScrollView>      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    }
});

export default Login