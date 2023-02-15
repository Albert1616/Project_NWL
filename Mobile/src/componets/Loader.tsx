import { View,Text,ActivityIndicator,ActivityIndicatorIOSProps } from "react-native"

export default function Loader(){
    return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center',backgroundColor:'#09090A'}}>
            <ActivityIndicator color="#390069"/>
        </View>
    )
}