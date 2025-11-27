import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';

const MediumSwiper = () => {
    return (
        <Swiper
            autoplay={true}
            autoplayTimeout={3}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
        >
            <View style={[styles.slide, { backgroundColor: "#FF6B6B" }]}>
                <Text style={styles.text}>Slide 1</Text>
            </View>

            <View style={[styles.slide, { backgroundColor: "#4ECDC4" }]}>
                <Text style={styles.text}>Slide 2</Text>
            </View>

            <View style={[styles.slide, { backgroundColor: "#556270" }]}>
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
    },
    dot: {
        backgroundColor: "#baafafff",
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: "#22D4FF",
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
    }
});

export default MediumSwiper;