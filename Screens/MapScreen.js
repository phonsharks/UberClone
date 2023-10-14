import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../Components/Map";
//import MapView from 'react-native-maps';
import tw from "twrnc";
import NavigateCard from "../Components/NavigateCard";
import { createStackNavigator } from "@react-navigation/stack";
import RideOptionsCard from "../Components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
