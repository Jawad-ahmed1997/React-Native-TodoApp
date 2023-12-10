// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home.js/Home";
import Categories from "./categories/Categories";
import CategoriesTodoList from "./categories/CategoriesTodoList";
import TodosForm from "./form";
import TaskByDates from "./categories/TaskByDates";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CategoriesTodoList"
          component={CategoriesTodoList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TaskByDates"
          component={TaskByDates}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TodosForm"
          component={TodosForm}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
