import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Switch } from 'react-native';
import data from "../../data/products.json";
import { ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item';

class Android extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: data.android,
        showInStockOnly: false,
    };
  }

  toggleInStock = (value) => {
    this.setState({ showInStockOnly: value });
  };

  render() {

    let filteredProducts = this.state.products;

    if (this.state.showInStockOnly) {
        filteredProducts = filteredProducts.filter(
            (product) => product.stock
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.desc}>Android Products</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                    <Switch
                        value={this.state.showInStockOnly}
                        onValueChange={this.toggleInStock}
                    />
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>
                        Show only products in stock
                    </Text>
                </View>

                <FlatList
                    data={filteredProducts}
                    renderItem={({ item }) => <Item item={item} />}
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
        marginTop: 2,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    }
});

export default Android;