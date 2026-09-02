import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 bg-yellow-300 w-full text-center">Edit app/index.tsx to edit this screen.</Text>
      
    </View>
  );
}
