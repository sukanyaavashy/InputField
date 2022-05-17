import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View
} from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("User Name");
  const [password, onChangePassword] = React.useState(null);
  const onPress = () => {
    setIndicator(!indicator);
  };
  const [indicator, setIndicator] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Register</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <ActivityIndicator size="small" color="#00ff00" animating={indicator} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default UselessTextInput;