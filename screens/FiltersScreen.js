import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import CustomHeaderButtons from "../components/headerButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { setFilters } from "../store/actions/meals";
import { useDispatch } from "react-redux";

const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      GlutenFree: isGlutenFree,
      Vegan: isVegan,
      Vegetarian: isVegetarian,
      LactoseFree: isLactoseFree
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterSwitch = props => {
    return (
      <View style={styles.filterContainer}>
        <Text style={styles.textChoosen}>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.primary }}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.title}>Aviailable Filters / Restrictions </Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Filters Screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        ></Item>
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={navigationData.navigation.getParam("save")}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 25,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10
  },
  textChoosen: {
    fontFamily: "Sriracha-Regular",
    fontSize: 18
  }
});

export default FiltersScreen;
