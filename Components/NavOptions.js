import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from 'twrnc'
import { Icon } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Slice/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    Image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "456",
    title: "Order food",
    Image: "https://links.papareact.com/28w",
    //buraya eklenecek olan başka bir sayfa adı gerekli.
    //navigator sayfasunda var olan sayfa adının kısaltmmasını burada yönlendirmede kullnıyorum.
    screen: "Home",
  },
];

const NavOptions = () => {
    const navigation=useNavigation()
    const origin=useSelector(selectOrigin)
    return (  
      /* Burada flatllist yardımıyla birlikte,tanımlanan sayflara ilgili özelliklere sahip bileşen içinde yerleştirme yaptık. */
    <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      //showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item }) => (
        //Ülke ve ülkelerin ayrıntılı adresleri gereği sayfların yönlendirilme API??
        <TouchableOpacity  style={tw`bg-gray-200 p-5 pl-8 pb-8 m-5 w-40`} onPress={()=>navigation.navigate(item.screen)}>
          <View style={tw`w-50 h-50`}>
            <Image source={{uri:item.Image}} style={{width:100,height:100,resizeMode:"contain"}}/>
            <Text style={tw`font-semibold`}>{item.title}</Text>
            <Icon style={tw`bg-black p-2 rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign"/>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
