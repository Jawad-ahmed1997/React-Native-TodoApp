import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TodosProvider } from "./context";

import Categories from "./screens/categories/Categories";
import AppNavigator from "./screens/AppNavigator";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <TodosProvider>
        <AppNavigator />
      </TodosProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
