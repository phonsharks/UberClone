import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
//const MapView = require('react-native-maps');
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../Slice/navSlice";
import MapViewDirections from "react-native-maps-directions";
//import {  } from '@env'
import { useRef } from "react";
const Map = () => {
  //istediğim yerin nokta atışı neresi olduğunu gösterilmesi
  const origin = useSelector(selectOrigin);
  const destination=useSelector(selectDestination)
  const mapRef=useRef(null)
  useEffect(() => {
    if(!origin || !destination) return;

    //yakınlaştır ve işaretçileri sığdırma işleminde bulun.
    mapRef.current.fitToSuppliedMarkers(['Origin','destination'],{
      edgePadding:{top:50,bottom:50,left:50,right:50}
    })
  }, [origin,destination])
  
  return (
    <MapView
      style={tw`flex-1`}
      //normal görünüm e5 vs vs görünmemesini istiyoruz.
      mapType="mutedStandard"
      initialRegion={{
        //location tanımlaması ve çalışması için API düzenlemesş gerekli.
        /* latitude: origin.location.lat,
        longitude: origin.location.lng, */
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >

      {origin && destination && (
        <MapViewDirections
        origin={origin.description}
        destination={destination.description}
        //googlemapsapikey bazında kullanılacak olan ilgili kurulum ve servisler gerekli
        apikey=""
        //kullanılacak olan işaretlemenin kalınlık ayarlaması
        strokeWidth={3}
        //kullanılacak olan işaretlemenin renk düzeni

        strokeColor="red"
        />
      )}

      {/*  {origin?.location && (
            <Marker coordinate={{
                latitude:origin.location.lat,
                longitude:origin.location.lng
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            />
        )} */}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
