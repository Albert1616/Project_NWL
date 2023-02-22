import { View, Text, ScrollView } from "react-native";
import Logo from '../../assets/logo.svg';
import { HabitDay, size_screen } from "../componets/HabitDay";
import { Header } from "../componets/Header";
import { Generate_Days } from "../utils/Generate_Days";

const WeekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const Dates = Generate_Days();
const maximumDays = 18 * 7;
const minumum_habitdays = maximumDays - Dates.length;

export function Home() {
    return (
        <View className='flex-1 bg-background px-8 pt-16'>
            <Header />
            <View className="flex-row mt-6 mb-2">
                {WeekDays.map((day, i) => (
                    <Text key={`${day}-${i}`} className='text-white font-bold text-xl text-center mx-1'
                        style={{ width: size_screen }}>{day}</Text>
                ))}
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100}}>
                <View className="flex-row flex-wrap">
                    {
                        Dates.map(date => (
                            <HabitDay key={date.toISOString()} />
                        ))
                    }
                    {
                        minumum_habitdays > 0 && Array.
                            from({ length: minumum_habitdays }).
                            map((day, index) => (
                                <View
                                    className="bg-slate-600 rounded-lg border border-slate-600 h-8 w-8 ml-2 mb-2 opacity-40"
                                    style={{ width: size_screen, height: size_screen }} />
                            ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}