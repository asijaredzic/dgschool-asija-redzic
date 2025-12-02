import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import data from "../../data/products.json";
import { ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item';

class Ios extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [],
    };
  }

  componentDidMount() {
    this.setState({
        products: data,
    });
  }

  render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.desc}>Ios Products</Text>

                <FlatList
                    data={this.state.products}
                    renderItem={({ item }) => (
                        <View>
                            <Item item={item} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View More</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignSelf: "center",
        padding: 20,
    },
    desc: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    btn: {
        backgroundColor: "#384053",
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    }
})

export default Ios;