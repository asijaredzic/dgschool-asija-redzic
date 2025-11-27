import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';

const EasySwiper = () => {
    return (
        <Swiper>
            <View style={[styles.slide, { backgroundColor: "red" }]}>
                <Text style={styles.text}>Slide 1</Text>
            </View>

            <View style={[styles.slide, { backgroundColor: "blue" }]}>
                <Text style={styles.text}>Slide 2</Text>
            </View>

            <View style={[styles.slide, { backgroundColor: "green" }]}>
                <Text style={styles.text}>Slide 3</Text>
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    }
});

export default EasySwiper;