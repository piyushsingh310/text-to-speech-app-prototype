/*import { CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import * as Speech from "expo-speech";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { COLORS } from "../../theme";

interface Detection {
  object: string;
  direction: string;
  distance: string;
}

export default function LiveDetectionScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [detection, setDetection] = useState<Detection | null>(null);
  const [lastObject, setLastObject] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [commandStep, setCommandStep] = useState(0);

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) requestPermission();
  }, [permission]);

  // ✅ Default system voice (NO custom voice ID)
  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, {
      pitch: 1.0,
      rate: 0.9,
    });
  };

  const detectionCases: Detection[] = [
    { object: "Caution Sign", direction: "left", distance: "3 meters" },
    { object: "Stop Sign", direction: "center", distance: "2 meters" },
    { object: "Construction Warning", direction: "right", distance: "5 meters" },
  ];

  const handleScan = () => {
    const random =
      detectionCases[Math.floor(Math.random() * detectionCases.length)];

    if (random.object !== lastObject) {
      setDetection(random);
      setLastObject(random.object);

      speak(
        `${random.object} detected. Slightly to your ${random.direction}. Approximately ${random.distance}.`
      );
    }
  };

  const handleBookmark = () => {
    if (!detection) {
      speak("No object detected to bookmark.");
      return;
    }

    speak(
      "Event bookmarked at Nerul, Navi Mumbai"
    );
  };

  const handleRepeat = () => {
    if (detection) {
      speak(
        `${detection.object}. Slightly to your ${detection.direction}. ${detection.distance}.`
      );
    } else {
      speak("Nothing detected yet.");
    }
  };

  const handleTranslate = () => {
    speak(
      "निर्माण चेतावनी। आपके दाईं ओर। पाँच मीटर दूरी पर।"
    );
  };

  // ✅ Simulated Voice Command System (Repeat → Translate → Bookmark)
  const simulateVoiceCommand = () => {
    setIsListening(true);
    speak("Listening");

    setTimeout(() => {
      if (commandStep === 0) {
        handleRepeat();
      } else if (commandStep === 1) {
        handleTranslate();
      } else if (commandStep === 2) {
        handleBookmark();
      }

      setCommandStep((prev) => (prev + 1) % 3);
      setIsListening(false);
    }, 3000);
  };

  if (!permission) return <Text>Requesting permission...</Text>;
  if (!permission.granted) return <Text>No camera access</Text>;

  const getBoxPosition = () => {
    if (!detection) return {};
    if (detection.direction === "left") return { left: 40 };
    if (detection.direction === "right") return { right: 40 };
    return { alignSelf: "center" as const };
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <CameraView style={StyleSheet.absoluteFillObject} facing="back" />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.gradient}
        />

        {detection && (
          <>
            <View style={[styles.boundingBox, getBoxPosition()]} />
            <Text style={styles.overlayText}>{detection.object}</Text>
            <Text style={styles.overlaySub}>
              {detection.direction} • {detection.distance}
            </Text>
          </>
        )}

        <TouchableOpacity
          style={[
            styles.voiceButton,
            { backgroundColor: isListening ? "#00c853" : "#ff4d6d" },
          ]}
          onPress={simulateVoiceCommand}
        >
          <Text style={{ color: "white", fontSize: 24 }}>
            {isListening ? "🎙️" : "🎤"}
          </Text>
        </TouchableOpacity>
      </View>

      <PrimaryButton title="Scan Environment" onPress={handleScan} />
      <PrimaryButton title="Bookmark This Sign" onPress={handleBookmark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  cameraContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 8,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    height: 160,
    width: "100%",
  },
  boundingBox: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: COLORS.secondary,
    position: "absolute",
    top: "35%",
  },
  overlayText: {
    position: "absolute",
    bottom: 70,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  overlaySub: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    color: "white",
  },
  voiceButton: {
    position: "absolute",
    bottom: 120,
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
}); */
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Speech from "expo-speech";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../theme";

interface Detection {
  object: string;
  direction: string;
  distance: string;
}

export default function LiveDetectionScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [detection, setDetection] = useState<Detection | null>(null);
  const [lastObject, setLastObject] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [commandStep, setCommandStep] = useState(0);

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) requestPermission();
  }, [permission]);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { pitch: 1.0, rate: 0.9 });
  };

  const detectionCases: Detection[] = [
    { object: "Caution Sign", direction: "left", distance: "3 meters" },
    { object: "Stop Sign", direction: "center", distance: "2 meters" },
    { object: "Construction Warning", direction: "right", distance: "5 meters" },
  ];

  const handleScan = () => {
    const random = detectionCases[Math.floor(Math.random() * detectionCases.length)];
    if (random.object !== lastObject) {
      setDetection(random);
      setLastObject(random.object);
      speak(`${random.object} detected. Slightly to your ${random.direction}. ${random.distance}.`);
    }
  };

  const handleBookmark = () => {
    if (!detection) { speak("No object detected to bookmark."); return; }
    speak("Event bookmarked at Nerul, Navi Mumbai");
  };

  const handleRepeat = () => {
    if (detection) speak(`${detection.object}. ${detection.direction}. ${detection.distance}.`);
    else speak("Nothing detected yet.");
  };

  const handleTranslate = () => {
    speak("निर्माण चेतावनी। आपके दाईं ओर। पाँच मीटर दूरी पर।");
  };

  const simulateVoiceCommand = () => {
    setIsListening(true);
    speak("Listening");
    setTimeout(() => {
      if (commandStep === 0) handleRepeat();
      else if (commandStep === 1) handleTranslate();
      else if (commandStep === 2) handleBookmark();
      setCommandStep((prev) => (prev + 1) % 3);
      setIsListening(false);
    }, 3000);
  };

  if (!permission?.granted) return <View style={styles.container}><Text>No Camera Access</Text></View>;

  const getBoxPosition = () => {
    if (!detection) return {};
    if (detection.direction === "left") return { left: 40 };
    if (detection.direction === "right") return { right: 40 };
    return { alignSelf: "center" as const };
  };

  return (
    <View style={styles.container}>
      {/* Camera Viewport */}
      <View style={styles.cameraWrapper}>
        <CameraView style={StyleSheet.absoluteFillObject} facing="back" />
        <View style={styles.scannerLine} />
        
        {detection && (
          <View style={[styles.hudContainer, getBoxPosition()]}>
            <View style={styles.targetBox}>
              <View style={styles.cornerTL} />
              <View style={styles.cornerTR} />
              <View style={styles.cornerBL} />
              <View style={styles.cornerBR} />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>{detection.object}</Text>
              <Text style={styles.labelSub}>{detection.distance} • {detection.direction}</Text>
            </View>
          </View>
        )}
      </View>

      {/* Control Dashboard */}
      <View style={styles.dashboard}>
        {/* Voice Button floating above the bar */}
        <TouchableOpacity 
          style={[styles.micButton, { backgroundColor: isListening ? "#4CAF50" : COLORS.primary }]} 
          onPress={simulateVoiceCommand}
        >
          <Ionicons name={isListening ? "mic" : "mic-outline"} size={36} color="white" />
        </TouchableOpacity>

        <View style={styles.buttonRow}>
          {/* Bigger, Pill-Shaped Scan Button */}
          <TouchableOpacity style={styles.pillButtonSecondary} onPress={handleScan}>
            <Ionicons name="scan" size={20} color="white" />
            <Text style={styles.pillButtonText}>Scan</Text>
          </TouchableOpacity>

          <View style={{ width: 80 }} /> {/* Spacer for the Mic button */}

          {/* Bigger, Pill-Shaped Save Button */}
          <TouchableOpacity style={styles.pillButtonSecondary} onPress={handleBookmark}>
            <Ionicons name="bookmark" size={20} color="white" />
            <Text style={styles.pillButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },
  cameraWrapper: {
    flex: 0.72,
    margin: 16,
    marginTop: 50,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  scannerLine: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.4)",
    width: "100%",
    position: "absolute",
    top: "50%",
  },
  dashboard: {
    flex: 0.28,
    backgroundColor: "#1A1A1A",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  micButton: {
    width: 84,
    height: 84,
    borderRadius: 42,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -42, // Sits exactly on the edge
    borderWidth: 8,
    borderColor: "#1A1A1A",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  pillButtonSecondary: {
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 110,
    borderWidth: 1,
    borderColor: "#333",
  },
  pillButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
  hudContainer: { position: "absolute", top: "30%", alignItems: "center" },
  targetBox: { width: 160, height: 160 },
  cornerTL: { position: "absolute", top: 0, left: 0, width: 20, height: 20, borderLeftWidth: 3, borderTopWidth: 3, borderColor: COLORS.secondary },
  cornerTR: { position: "absolute", top: 0, right: 0, width: 20, height: 20, borderRightWidth: 3, borderTopWidth: 3, borderColor: COLORS.secondary },
  cornerBL: { position: "absolute", bottom: 0, left: 0, width: 20, height: 20, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: COLORS.secondary },
  cornerBR: { position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderRightWidth: 3, borderBottomWidth: 3, borderColor: COLORS.secondary },
  labelContainer: { backgroundColor: "rgba(0,0,0,0.6)", padding: 8, borderRadius: 8, marginTop: 10 },
  labelText: { color: "white", fontWeight: "bold", fontSize: 14 },
  labelSub: { color: "#CCC", fontSize: 12, textAlign: "center" },
});