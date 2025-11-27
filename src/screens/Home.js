import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icon";

const Home = ({ navigation }) => {
  const icons = [
    { name: "cellphone", color: "#22D4FF", size: 30 },
    { name: "android", color: "#EF5350", size: 30 },
    { name: "laptop", color: "#42A5F5", size: 30 },
    { name: "tablet", color: "#66BB6A", size: 30 },
    { name: "mouse", color: "#AB47BC", size: 30 },
    { name: "keyboard-outline", color: "#FFA726", size: 30 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper autoplay={true} autoplayTimeout={5} activeDotColor="#22D4FF">
          <View style={styles.slide}>
            <Image
              style={styles.img}
              source={require("../../assets/banner1.jpg")}
              resizeMode="cover"
            />
          </View>

          <View style={styles.slide}>
            <Image
              style={styles.img}
              source={require("../../assets/banner2.jpg")}
              resizeMode="cover"
            />
          </View>

          <View style={styles.slide}>
            <Image
              style={styles.img}
              source={require("../../assets/banner3.jpg")}
              resizeMode="cover"
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.grid}>
        {icons.map((item, index) => (
          <Icon
            key={index}
            name={item.name}
            color={item.color}
            size={item.size}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    width: "90%",
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },

  sliderContainer: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  slide: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;