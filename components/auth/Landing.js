import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlignVertical: "center", textAlign: "center", fontSize: 50 }} >
                Solent Inspire
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
