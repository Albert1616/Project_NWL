import { TouchableOpacity, Dimensions } from "react-native";
const Week_days = 7;
const Padding_home = (32 * 2) / 5;
const Day_margin_beetween = 8;

export const size_screen = (Dimensions.get('screen').width/Week_days) - (Padding_home + 5)

export function HabitDay() {
    return (
        <TouchableOpacity
            className="bg-slate-600 rounded-lg border border-slate-600 h-8 w-8 ml-2 mb-2"
            style={{width:size_screen, height:size_screen}} 
            activeOpacity={0.8}>
        </TouchableOpacity>
    )
}