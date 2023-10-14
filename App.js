import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Store";
import HomeScreen from "./Screens/HomeScreen";
//import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./Screens/MapScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <KeyboardAvoidingView style={{flex:1}}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Map"  component={MapScreen}  options={{headerShown:false}} />
          </Stack.Navigator>
          {/* <StatusBar style="auto" /> */}
          </KeyboardAvoidingView>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

//main design codes\\
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
