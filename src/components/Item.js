import React from 'react';
import { Text, View } from 'react-native';

const Item = ({ item }) => (
    <View style={styles.cardContainer}>
        <View>
            <Image style={styles.img} source={{uri: `${item.image}`}} resizeMode="cover"/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
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
    },

    img: {
        width: 100,
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginTop: 5,
    },

    textContainer: {
        paddingHorizontal: 10,
        marginVertical: '10',
        width: "70%",
    },

    name: {
        fontWeight: 'vold',
        fontSize: 16,
    },

    category: {
        fontSize: 12,
        color: "#22D4FF"
    },

    desc: {
        fontStyle: 'italic',
    },

    price: {
        fontWeight: 'bold',
        marginTop: 5,
        backgroundColor: "#384053",
        color: "white",
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 45,
    },
});

export default Item;
