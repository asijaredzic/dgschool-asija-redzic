import React from 'react'
import { View, Text, Stylesheet, Button } from "react-native";

const About = ({ navigation }) => {
    return(
        <View style={Stylesheet.container}>
            <Text> Welcome to About Screen </Text>
             <Button
            title="Go to Home screen"
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

export default About;