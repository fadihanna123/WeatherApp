import * as dotenv from "dotenv";

// initialize dotenv
dotenv.config();

export default ({ config }) => ({
  name: "weatherapp",
  slug: "weatherapp",
  version: "1.0.1",
  orientation: "portrait",
  icon: "./src/assets/icon.png",
  splash: {
    image: "./src/assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/dd898676-81b1-46a0-af98-84977156f722",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    config: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      apiKey: process.env.EXPO_PUBLIC_API_KEY,
    },
    supportsTablet: true,
    bundleIdentifier: "com.fadihanna.weatherapp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: "com.fadihanna.weatherapp",
  },
  web: {
    favicon: "./src/assets/favicon.png",
  },
  description: "",
  extra: {
    eas: {
      projectId: "dd898676-81b1-46a0-af98-84977156f722",
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      apiKey: process.env.EXPO_PUBLIC_API_KEY,
    },
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
