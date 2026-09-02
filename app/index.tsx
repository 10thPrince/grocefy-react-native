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
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image source={require('../assets/images/android-icon-background.png')} 
        style={{
          width: 200,
          height: 200
        }}/>
    </View>
  );
}
