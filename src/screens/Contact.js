import React from 'react'
import { View, Text, Stylesheet, Button } from "react-native";

const Contact = ({ navigation }) => {
    return(
        <View style={Stylesheet.container}>
            <Text> Welcome to Contact Screen </Text>
             <Button
            title="Go to About screen"
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

export default Contact;