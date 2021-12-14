import React from "react";
import MapView,{Marker} from "react-native-maps";
import {View,Image} from 'react-native'
export const Map=({initialOrigin,marker1,marker2,marker3,marker4})=>{
    return(
        <View>
            <MapView style={{flex:1}}
                initialRegion={initialOrigin}
            >
                {/* {
                    state===1?
                    <View> */}
                        <Marker 
                description="Store 1"
                coordinate={marker1}>
                <Image source={require("../../app/assets/bicycle.png")} style={{
                    width:35,
                    height:35,
                    tintColor:"purple"
                }}/>
                </Marker>
                <Marker 
                description="Store 2"
                coordinate={marker2}>
                <Image source={require("../../app/assets/bicycle.png")} style={{
                    width:35,
                    height:35,
                    tintColor:"purple"
                }}/>
                </Marker>
                <Marker 
                description="Store 3"
                coordinate={marker3}>
                <Image source={require("../../app/assets/bicycle.png")} style={{
                    width:35,
                    height:35,
                    tintColor:"purple"
                }}/>
                </Marker>
                <Marker 
                description="Store 4"
                coordinate={marker4}>
                <Image source={require("../../app/assets/bicycle.png")} style={{
                    width:35,
                    height:35,
                    tintColor:"purple"
                }}/>
                </Marker>
                    {/* </View>:null
                } */}
                
            </MapView>
 
        </View>
    );
}