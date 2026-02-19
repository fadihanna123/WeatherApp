import React from "react";
import { View, Text, useColorScheme, ScrollView, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCloudSun,
  faCode,
  faHeart,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { version } from "../../package.json";

// Components
import { aboutStyles } from "@styles/About";
import { handleLink } from "@functions/helper";
import { githubUrl } from "@utils/consts";

const About = () => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <ScrollView
      contentContainerStyle={aboutStyles.contentContainer}
      style={[
        aboutStyles.container,
        { backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" },
      ]}
    >
      <View style={aboutStyles.headerSection}>
        <View
          style={[
            aboutStyles.iconContainer,
            { backgroundColor: isDark ? "#2d3748" : "#ffffff" },
          ]}
        >
          <FontAwesomeIcon
            icon={faCloudSun}
            size={60}
            color={isDark ? "#60a5fa" : "#3b82f6"}
          />
        </View>
        <Text
          style={[
            aboutStyles.appTitle,
            { color: isDark ? "#ffffff" : "#1f2937" },
          ]}
        >
          Weather App
        </Text>
        <Text
          style={[
            aboutStyles.appVersion,
            { color: isDark ? "#9ca3af" : "#6b7280" },
          ]}
        >
          Version {version}
        </Text>
      </View>

      <View
        style={[
          aboutStyles.descriptionCard,
          { backgroundColor: isDark ? "#2d3748" : "#ffffff" },
        ]}
      >
        <Text
          style={[
            aboutStyles.descriptionTitle,
            { color: isDark ? "#ffffff" : "#1f2937" },
          ]}
        >
          About this app
        </Text>
        <Text
          style={[
            aboutStyles.descriptionText,
            { color: isDark ? "#e5e7eb" : "#4b5563" },
          ]}
        >
          A mobile app that provides real-time weather information for any city.
          Get current weather conditions, forecasts, and stay updated with the
          latest weather data.
        </Text>
      </View>

      <View
        style={[
          aboutStyles.featuresCard,
          { backgroundColor: isDark ? "#2d3748" : "#ffffff" },
        ]}
      >
        <Text
          style={[
            aboutStyles.featuresTitle,
            { color: isDark ? "#ffffff" : "#1f2937" },
          ]}
        >
          Features
        </Text>
        <View style={aboutStyles.featureItem}>
          <FontAwesomeIcon
            icon={faCloudSun}
            size={16}
            color={isDark ? "#60a5fa" : "#3b82f6"}
          />
          <Text
            style={[
              aboutStyles.featureText,
              { color: isDark ? "#e5e7eb" : "#4b5563" },
            ]}
          >
            Real-time weather data
          </Text>
        </View>
        <View style={aboutStyles.featureItem}>
          <FontAwesomeIcon
            icon={faCloudSun}
            size={16}
            color={isDark ? "#60a5fa" : "#3b82f6"}
          />
          <Text
            style={[
              aboutStyles.featureText,
              { color: isDark ? "#e5e7eb" : "#4b5563" },
            ]}
          >
            Search any city worldwide
          </Text>
        </View>
      </View>

      <View
        style={[
          aboutStyles.developerCard,
          { backgroundColor: isDark ? "#2d3748" : "#ffffff" },
        ]}
      >
        <View style={aboutStyles.developerHeader}>
          <FontAwesomeIcon
            icon={faCode}
            size={20}
            color={isDark ? "#60a5fa" : "#3b82f6"}
          />
          <Text
            style={[
              aboutStyles.developerTitle,
              { color: isDark ? "#ffffff" : "#1f2937" },
            ]}
          >
            Developer
          </Text>
        </View>
        <Text
          style={[
            aboutStyles.developerName,
            { color: isDark ? "#e5e7eb" : "#4b5563" },
          ]}
        >
          Fadi Hanna
        </Text>
        <View style={aboutStyles.developerFooter}>
          <Text
            style={[
              aboutStyles.madeWithText,
              { color: isDark ? "#9ca3af" : "#6b7280" },
            ]}
          >
            Made with
          </Text>
          <FontAwesomeIcon icon={faHeart} size={14} color="#ef4444" />
          <Text
            style={[
              aboutStyles.madeWithText,
              { color: isDark ? "#9ca3af" : "#6b7280" },
            ]}
          >
            using React Native
          </Text>
        </View>
      </View>

      <View
        style={[
          aboutStyles.githubCard,
          { backgroundColor: isDark ? "#1f2937" : "white" },
        ]}
      >
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          size={20}
          color={isDark ? "#ffffff" : "#1f2937"}
        />
        <Button
          title="Open source on GitHub"
          color={isDark ? "#e5e7eb" : "#4b5563"}
          onPress={() => handleLink(githubUrl)}
        />
      </View>
      <View>
        <Text style={aboutStyles.copyrightText}>
          Copyright (c) 2026 Fadi Hanna
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;
