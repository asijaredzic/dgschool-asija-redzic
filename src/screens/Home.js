import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icon";
import data from "../../data/products.json";
import Item from "../components/Item";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: data.popularproducts,
    });
  }

  sortAsc = () => {
    const sorted = [...this.state.products].sort((a, b) => a.price - b.price);
    this.setState({ products: sorted });
  };

  sortDesc = () => {
    const sorted = [...this.state.products].sort((a, b) => b.price - a.price);
    this.setState({ products: sorted });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.sliderContainer}>
            <Swiper autoplay={true} activeDotColor="rgba(34, 212, 255, 1)" autoplayTimeout={5}>
              <View style={styles.item}>
                <Image style={styles.imgItem} source={require("../../assets/banner_1.jpg")} />
              </View>

              <View style={styles.item}>
                <Image style={styles.imgItem} source={require("../../assets/banner_2.png")} />
              </View>

              <View style={styles.item}>
                <Image style={styles.imgItem} source={require("../../assets/banner_3.jpeg")} />
              </View>

              <View style={styles.item}>
                <Image style={styles.imgItem} source={require("../../assets/banner_5.jpg")} />
              </View>
            </Swiper>
          </View>

          <View style={styles.iconsContainer}>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate("Ios")}
            />
            
            <Icon name="cellphone" iconText="Iphone" />
            <Icon name="android" iconText="Samsung" />
            <Icon name="laptop" iconText="Laptop" />
          </View>

          <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet" />
            <Icon name="mouse" iconText="Mouse" />
            <Icon name="keyboard-outline" iconText="Keyboard" />
          </View>

          <View style={styles.productsContainer}>
            <Text style={styles.title}>Most Popular Products</Text>

            <View style={{ flexDirection: "row", marginBottom: 10, gap: 10 }}>
              <TouchableOpacity onPress={this.sortAsc} style={styles.sortBtn}>
                <Text style={styles.sortText}>Price ↑</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.sortDesc} style={styles.sortBtn}>
                <Text style={styles.sortText}>Price ↓</Text>
              </TouchableOpacity>
            </View>

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
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  iconsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  sliderContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 8,
  },

  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  item: {
    flex: 1,
    justifyContent: "center",
  },

  productsContainer: {
    marginHorizontal: 20,
  },

  title: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },

  sortBtn: {
    backgroundColor: "#384053",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },

  sortText: {
    color: "white",
    fontWeight: "bold",
  },

  btn: {
    backgroundColor: "#22D4FF",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 20,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Home;