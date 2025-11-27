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
      products: data,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay={true}
              activeDotColor="rgba(34, 212, 255, 1)"
              autoplayTimeout={5}
            >
              <View style={styles.item}>
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/banner_1.jpg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/banner_2.png")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/banner_3.jpeg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/banner_5.jpg")}
                  resizeMode="cover"
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.iconsContainer}>
            <Icon name="cellphone" iconText="Iphone"></Icon>
            <Icon name="android" iconText="Samsung"></Icon>
            <Icon name="laptop" iconText="Laptop"></Icon>
          </View>
          <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet"></Icon>
            <Icon name="mouse" iconText="Mouse"></Icon>
            <Icon name="keyboard-outline" iconText="Keyboard"></Icon>
          </View>

          <View style={styles.productsContainer}>
            <Text style={styles.title}>Most Popular Products</Text>
            <FlatList
              data={this.state.products.popularproducts}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
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