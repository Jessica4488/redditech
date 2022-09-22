import React from 'react';
import { useState,useEffect } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, View } from 'react-native';

function HomeScreen(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

    return (
        <>
            <ImageBackground
                resizeMode='contain'
                style={styles.background}
                source={require('../assets/follow.jpg')}>

            </ImageBackground>

            <Button
                title='Click me'
                onPress={() => Alert.prompt('Tape your', 'Username', text => console.log(text))}
                style={styles.loginButton} />

        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,

    },
    loginButton: {
        backgroundColor: "#B76428"
    }


})
export default HomeScreen;
