import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='fire' style={{ fontSize: 50, textAlign: 'center' }}></Icon>
            <Text style={{ textAlignVertical: "center", textAlign: "center", fontSize: 35, fontWeight: 'bold', height: 300 }} >
                SOLENT INSPIRE
            </Text>
            <Button
                color="#000"
                title="Login"
                onPress={() => navigation.navigate("Login")} />
            <Button
                color="#000"
                title="Register"
                onPress={() => navigation.navigate("Register")} />
        </View>
    )
}