import React from 'react'
import { View, Text, Stylesheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={Stylesheet.container}>
            <Text> Welcome to Home Screen </Text>
            <Button 
            title="Go to About screen"
            onPress={() => navigation.navigate()}
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

export default Home;