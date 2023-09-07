import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-lg`}>
        <Text style={tw`text-white text-3xl font-bold `}>Hello world!</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

