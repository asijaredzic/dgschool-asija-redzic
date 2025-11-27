import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import About from '../screens/About'
import { Background } from '@react-navigation/elements';

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerStyle: {
        backgroundColor: "#384053", // boja pozadine naslova
    },
    headerTintColor: "white", // boja slova
};

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

const AboutStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, AboutStackNavigator };
// kada ima vise exporta onda se ne pise default i samo se pise lista
// { apple, cinammon, bananas };