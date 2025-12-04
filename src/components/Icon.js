import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, color = "#22D4FF", size = 27 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={name} size={size} color={color} />
      </View>
      <Text style={styles.label}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 80,
    alignItems: "center",
  },
  iconWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#384853",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: 5,
    fontWeight: "600",
  },
});

export default Icon;
