/* import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { COLORS } from "../../theme";

export default function HomeScreen() {
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      Speech.speak(
        "Construction warning detected from uploaded image. Five meters ahead."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assistive Navigation</Text>
      <Text style={styles.subtitle}>
        AI-powered real-time hazard detection
      </Text>

      <PrimaryButton
        title="Start Live Detection"
        onPress={() => router.push("/live")}
      />

      <PrimaryButton
        title="Upload Photo"
        onPress={pickImage}
      />

      <PrimaryButton
        title="View Bookmarks"
        onPress={() => router.push("/bookmarks")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: COLORS.textLight,
    marginBottom: 40,
  },
});*/

import { Ionicons } from "@expo/vector-icons"; // Assuming you have Expo Vector Icons
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../theme";

export default function HomeScreen() {
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      Speech.speak("Construction warning detected from uploaded image. Five meters ahead.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Assistive Navigation</Text>
        <Text style={styles.subtitle}>AI-powered real-time hazard detection</Text>
      </View>

      <View style={styles.menuGrid}>
        <TouchableOpacity 
          style={[styles.mainCard, { backgroundColor: COLORS.primary }]} 
          onPress={() => router.push("/live")}
        >
          <Ionicons name="eye" size={40} color="white" />
          <Text style={styles.cardTextMain}>Start Live Detection</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity style={styles.secondaryCard} onPress={pickImage}>
            <Ionicons name="image" size={28} color={COLORS.primary} />
            <Text style={styles.cardTextSecondary}>Upload Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard} onPress={() => router.push("/bookmarks")}>
            <Ionicons name="bookmark" size={28} color={COLORS.primary} />
            <Text style={styles.cardTextSecondary}>Bookmarks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA", // Cleaner off-white
    paddingHorizontal: 24,
    justifyContent: "space-around",
  },
  header: {
    marginTop: 60,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1A1A1A",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
  menuGrid: {
    gap: 16,
    marginBottom: 40,
  },
  mainCard: {
    height: 180,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  cardTextMain: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
  },
  row: {
    flexDirection: "row",
    gap: 16,
  },
  secondaryCard: {
    flex: 1,
    height: 120,
    backgroundColor: "white",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEE",
    elevation: 2,
  },
  cardTextSecondary: {
    color: "#333",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
});