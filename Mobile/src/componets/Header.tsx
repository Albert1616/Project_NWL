import { View, Text, TouchableHighlight,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import Colors from 'tailwindcss/colors';
import Logo from '../../assets/logo.svg';

export function Header() {
    const {navigate} = useNavigation()

    return (
        <View className="w-full flex-row items-center justify-between">
            <Logo />
            <TouchableOpacity 
            className="flex-row border border-violet-500 rounded-lg items-center p-2.5"
            activeOpacity={0.7}
            onPress={() => navigate('newhabit')}>
                <AntDesign
                    name='plus' size={20} color={Colors.violet[500]} >
                </AntDesign>
                <Text className="text-white ml-3 font-semiBold text-base">Novo Hábito</Text>
            </TouchableOpacity>
        </View>
    )
}