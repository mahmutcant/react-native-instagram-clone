import { Text, View } from "react-native";

export default function ProfileButton({text}){
    return(
        <View style={{borderWidth:1,padding:7,borderColor:"transparent",borderRadius:10,paddingHorizontal:40,alignItems:"center",justifyContent:"center",margin:5, marginLeft:7,backgroundColor:"#EFEFEF"}}>
            <Text style={{color:"#000",fontWeight:"bold",fontSize:13}}>{text}</Text>
        </View>
    )
}