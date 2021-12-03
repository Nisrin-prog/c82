import React, { Component } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import RFValue from "react-native-responsive-fontsize";

const customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }
  async loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontLoaded: true });
  }
  componentDidMount() {
    this.loadFontsAsync();
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView styles={styles.droidSafeArea} />
          <View style={styles.appTitle}></View>
          <View style={styles.appLogo}></View>
          <View style={styles.appText}>
            <Text styles={styles.texts}> StoryTelling App</Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  appLogo: {
    flex: 0.3,
  },
  appText: {
    justifyContent: "center",
    alignItems: "center",
  },
  texts: {
    color: "white",
    fontfamily: "Bubblegum-Sans",
    fontSize: 28,
  },
});
