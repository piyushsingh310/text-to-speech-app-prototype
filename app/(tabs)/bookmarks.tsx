/*import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../theme";

export default function BookmarkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Hazard Locations</Text>

      {[
        "Construction Warning",
        "Pothole Detected",
        "Broken Footpath",
        "Road Barrier",
      ].map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>⚠️ {item}</Text>
          <Text style={styles.cardText}>📍 Nerul, Navi Mumbai</Text>
          <Text style={styles.cardText}>
            🗺 19.0330° N, 73.0297° E
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 4,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardText: {
    color: COLORS.textDark,
  },
}); */

import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function BookmarkScreen() {
  const bookmarks = [
    "Construction Warning",
    "Pothole Detected",
    "Broken Footpath",
    "Road Barrier",
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Saved Locations</Text>

      {bookmarks.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="warning" size={20} color="#FF9800" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item}</Text>
            <View style={styles.infoRow}>
              <Ionicons name="location-sharp" size={14} color="#888" />
              <Text style={styles.cardText}> Nerul, Navi Mumbai</Text>
            </View>
            <Text style={styles.coordsText}>19.0330° N, 73.0297° E</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#CCC" />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1A1A",
    marginBottom: 24,
    marginTop: 40,
  },
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF4E5",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  cardText: {
    fontSize: 13,
    color: "#666",
  },
  coordsText: {
    fontSize: 11,
    color: "#AAA",
    fontFamily: "monospace",
  },
});