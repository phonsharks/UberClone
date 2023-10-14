import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../Components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//yeni ve extra güncelleme gerekebilir.API ekleme içinde gerekli olan ayarlamaları yapmadım hali hazırda.
import {} from "@env";

const HomeScreen = () => {
  return (
    <View style={tw`bg-white w-100 h-210`}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}  
        source={{
          uri: "https://links.papareact.com/gzs",
        }}
      />

      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInputContainer: {
            padding:50,
            //backgroundColor: 'gray',
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />

      <NavOptions />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
