import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Item = ({ item }) => (
    <View style={styles.cardContainer}>
        <Image style={styles.img} source={{ uri: item.image }} />

        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>

            <Text style={styles.desc} numberOfLines={2}>
                {item.description}
            </Text>

            <Text style={styles.rating}>Rating: {item.rating}</Text>

            <Text style={styles.price}>${item.price}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 130,
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 16,
        padding: 8,
        elevation: 3,
    },

    img: {
        width: 100,
        height: "100%",
        borderRadius: 8,
    },

    textContainer: {
        paddingHorizontal: 10,
        width: "70%",
        justifyContent: "space-between"
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    category: {
        fontSize: 12,
        color: "#22D4FF",
        marginBottom: 2
    },

    desc: {
        fontStyle: 'italic',
        marginTop: 2,
        marginBottom: 4
    },

    rating: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    price: {
        marginTop: 6,
        fontWeight: 'bold',
        backgroundColor: "#384053",
        color: "white",
        borderRadius: 100,
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignSelf: "flex-start"
    },
});

export default Item;