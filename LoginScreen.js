import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../services/firebase";

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState("");

  const login = async () => {
    await signInAnonymously(auth);
    navigation.replace("Chat");
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Username"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />

      <Button title="Enter LetsTalk" onPress={login} />
    </View>
  );
}
