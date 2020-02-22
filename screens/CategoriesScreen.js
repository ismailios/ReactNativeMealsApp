import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButtons from "../components/headerButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const CategoriesScreen = props => {
  const renderItem = dataItem => {
    return (
      <CategoryGridTile
        title={dataItem.item.title}
        color={dataItem.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMeal",
            params: {
              categoryId: dataItem.item.id
            }
          })
        }
      />
    );
  };

  return <FlatList numColumns="2" data={CATEGORIES} renderItem={renderItem} />;
};

CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Categories Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  dataItem: {
    flex: 1,
    margin: 10,
    height: 150
  }
});

export default CategoriesScreen;
