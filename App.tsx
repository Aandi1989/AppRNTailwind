import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <TouchableOpacity className="bg-teal-500 p-3 rounded-lg">
        <Text className="text-white text-3xl font-bold ">Hello world!</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

