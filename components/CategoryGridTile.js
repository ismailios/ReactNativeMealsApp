import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.dataItem} onPress={props.onSelect}>
      <View style={{ ...styles.container, backgroundColor: props.color }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dataItem: {
    flex: 1,
    margin: 10,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3
  },
  title: {
    fontSize: 20,
    fontFamily: "Sriracha-Regular"
  }
});

export default CategoryGridTile;
