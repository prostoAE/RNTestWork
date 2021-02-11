import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import {AppHeader} from "../components/AppHeader";
import {AppBanner} from "../components/AppBanner";
import {AppItems} from "../components/AppItems";

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <AppHeader />
            <AppBanner/>
            <AppItems/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
