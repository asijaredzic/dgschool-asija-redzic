import React from 'react'
import { View, Text, Stylesheet, Button } from "react-native";

const Profile = ({ navigation }) => {
    return(
        <View style={Stylesheet.container}>
            <Text> Welcome to Profile Screen </Text>
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

export default Profile;