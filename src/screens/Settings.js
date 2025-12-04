import React from 'react'
import { View, Text, Stylesheet, Button } from "react-native";

const Settings = ({ navigation }) => {
    return(
        <View style={Stylesheet.container}>
            <Text> Welcome to Settings Screen </Text>
             <Button
            title="Go to Home Screen"
            onPress={() => navigation.goBack()}
            />        
        </View>
    );
}; 

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Settings;