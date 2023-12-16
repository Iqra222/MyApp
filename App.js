import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";

export default function App() {
  const onLoginPressed = () => {
    alert(" Hello from login Button");
  };

  return (
    <View style={styles.mainContainer}>
      <Image source={require("./assets/icon.png")} style={styles.logo} />
      <Text style={styles.heading}> HI we are here</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder=" Email"
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        keyboardType="number-pad"
        placeholder="Password"
      />
      <Text style={styles.forgotPassword}>forgot Password</Text>
      <Button title={"login"} color={"pink"} onPress={onLoginPressed} />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
    padding: 20,
    justifyContent: "center",
  },

  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  heading: {
    fontSize: 20,
    textDecorationLine: "underline",
    alignSelf: "center",
    marginVertical: 10,
  },
  forgotPassword: {
    fontSize: 15,
    margin: 10,
    textDecorationLine: "underline",
    alignSelf: "flex-end",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});
