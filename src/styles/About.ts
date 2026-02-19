import { StyleSheet } from "react-native";

export const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  appVersion: {
    fontSize: 14,
    fontWeight: "500",
  },
  descriptionCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  featuresCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 12,
    lineHeight: 22,
  },
  developerCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 3,
  },
  developerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  developerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  developerName: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15,
  },
  developerFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  madeWithText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  githubCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 3,
  },
  githubText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "500",
  },
  copyrightText: {
    textAlign: "center",
    marginTop: 20,
  },
});
