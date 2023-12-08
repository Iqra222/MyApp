import { View, StyleSheet, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.input} placeholder=" Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title={"login"} />
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

  input: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});
