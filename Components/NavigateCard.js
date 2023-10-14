import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../Slice/navSlice";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>NavigateCard</Text>
      <View style={tw`border-t border-gray-300 `}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Search"
            styles={{
              textInputContainer: {
                padding: 50,
                //backgroundColor: 'gray',
              },
              textInput: {
                height: 38,
                color: "#5d5d5d",
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: "#1faadb",
              },
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View>
      

      {/*başka bir sayfa için buton ile yön verme kodu*/}
      <View style={tw``}>
        <TouchableOpacity  onPress={()=>navigation.navigate("RideOptionsCard")} style={tw``}>
          <Icon  style={tw``}/>
          <Text  style={tw``}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
