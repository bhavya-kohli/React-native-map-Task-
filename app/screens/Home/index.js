import React,{useState} from "react";
import { SafeAreaView,Image,View} from "react-native";
import {Button, Card} from "react-native-paper";
import MapView, { Marker } from 'react-native-maps';
import { styles } from "./style";
export const HomeScreen=()=>{
    const state=1;
    const mapref=React.createRef();
    const [active,setActive]=useState('Deoband')
    const changeRegion=(txt)=>{
        if(txt==='Deoband'){
            const targetlatitude=29.685249
            const targetlongitude=77.673561
            mapref.current.animateToRegion({
                latitude:targetlatitude,
                longitude:targetlongitude,
                latitudeDelta:0,
                longitudeDelta:0.05
            })
        }else{
            const targetlatitude=29.969879
            const targetlongitude=77.550173
            mapref.current.animateToRegion({
                latitude:targetlatitude,
                longitude:targetlongitude,
                latitudeDelta:0,
                longitudeDelta:0.05
            })
        }
    }
    const _handlePress=(txt)=>{
        setActive(txt);
        changeRegion(txt)
    }
    const deoband={
        latitude:29.685249,
                    longitude:77.673561,
                    latitudeDelta:0,
                    longitudeDelta:0.05,
    }
    const deobandm1={latitude:29.685192,
        longitude:77.673839}
    const deobandm2={
        latitude:29.685300,
        longitude:77.673400
    }
    const deobandm3={
        latitude:29.685200,
        longitude:77.673839
    }

    const deobandm4={
        latitude:29.685192,
        longitude:77.673500
    }

    const saharanpur={
        latitude:29.969879,
                    longitude:77.550173,
                    latitudeDelta:0,
                    longitudeDelta:0.05,
    }
    const saharanpurm1={latitude:29.969960,
        longitude:77.550223}
    const saharanpurm2={
        latitude:29.969795,
        longitude:77.549948
    }
    const saharanpurm3={
        latitude:29.970100,
        longitude:77.550110
    }

    const saharanpurm4={
        latitude:29.969635,
        longitude:77.550505
    }

    return(
        <SafeAreaView style={styles.flex}>
            
            <MapView style={styles.flex}
                initialRegion={active==='Deoband'?deoband:saharanpur}
                ref={mapref}
                showsUserLocation={true}
            >
                {
                    state===1?
                    <View>
                        <Marker 
                description="Store 1"
                coordinate={active==='Deoband'?deobandm1:saharanpurm1}>
                <Image source={require("../../assets/store.png")} style={{
                    width:45,
                    height:45,
                    tintColor:"purple"
                }}/>
                </Marker>
                <Marker 
                description="Store 2"
                coordinate={active==='Deoband'?deobandm2:saharanpurm2}>
                <Image source={require("../../assets/store.png")} style={{
                    width:45,
                    height:45,
                    tintColor:"purple"
                }}/>
                </Marker>
                <Marker 
                description="Store 3"
                coordinate={active==='Deoband'?deobandm3:saharanpurm3}>
                <Image source={require("../../assets/store.png")} style={{
                    width:45,
                    height:45,
                    tintColor:"purple"
                }}/>
                </Marker>
                <Marker 
                description="Store 4"
                coordinate={active==='Deoband'?deobandm4:saharanpurm4}>
                <Image source={require("../../assets/store.png")} style={{
                    width:45,
                    height:45,
                    tintColor:"purple"
                }}/>
                </Marker>
                    </View>:null
                }
                
            </MapView>
            
            {state===1?<View>
                <Card style={styles.bottomCard}>
                    <Card.Content style={styles.content} >
                        <Button mode={active==='Deoband'?'contained':null}
                         style={styles.buttonStyle}
                         onPress={()=>_handlePress('Deoband')}
                         >Deoband</Button>
                        <Button mode={active==='Saharanpur'?'contained':null}
                         style={styles.buttonStyle}
                         onPress={()=>_handlePress('Saharanpur')}
                         >Saharanpur</Button>
                    </Card.Content>
                </Card>
            </View>:null}
            
        </SafeAreaView>
    );

     
}

