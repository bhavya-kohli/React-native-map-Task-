import { StyleSheet } from "react-native";
import { theme } from "../../../AppStyle";

export const styles=StyleSheet.create({
    flex:{
        flex:1,
    },
    fab:{
        position:"absolute",
        bottom:0,
        right:0,
        margin:16,
    },
    bottomCard:{
        width:"100%",
        height:120,
        bottom:0,
        paddingHorizontal:0,
        borderTopEndRadius:20
    },
    content:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    buttonStyle:{
        borderRadius:20,
        padding:5
    }

})