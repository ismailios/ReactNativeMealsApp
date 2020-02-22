import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground
} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.imageUrl }}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealDetails, ...styles.mealRow }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#F5F5F5"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealHeader: {
    height: "80%"
  },
  mealDetails: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: "20%"
  },
  mealRow: {
    flexDirection: "row"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 5,
    paddingVertical: 5
  }
});

export default MealItem;
