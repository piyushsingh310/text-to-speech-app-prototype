import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../theme";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

export default function PrimaryButton({
  title,
  onPress,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    elevation: 3,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});