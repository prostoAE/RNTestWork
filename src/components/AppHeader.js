import React from "react";
import {View, StyleSheet, Text, StatusBar} from "react-native";
import { Entypo } from '@expo/vector-icons';

export const AppHeader = () => {
    return (
        <View style={styles.header}>
            <Entypo style={styles.headerIcon} name="menu" size={24} color="white" />
            <Text style={styles.headerText}>Some Header Text</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#49bc6e',
        width: '100%',
        height: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginTop: 10
    },
    headerIcon: {
        position: 'absolute',
        left: 20,
        top: 35,
    }
});
