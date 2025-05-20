import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import reactNative from "../assets/images/react-native.png";

export default function RootLayout() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Image source={reactNative} style={style.image} />
        <Text>Olá mundo!</Text>
        <TextInput style={style.input} />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(36, 105, 189)" : "white",
            },
            style.button,
          ]}
        >
          <Text>+</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#535cc2",
    height: "100%",
  },
  image: {
    width: 50,
    height: 50,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 50,
    height: 50,
  },
});
