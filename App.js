import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./Navigation/MealsNavigator";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";
import { composeWithDevTools } from "redux-devtools-extension";

const fetchFonts = () => {
  return Font.loadAsync({
    "Sriracha-Regular": require("./assets/fonts/Sriracha-Regular.ttf")
  });
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
