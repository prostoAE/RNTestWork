import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

export const AppItem = ({icon, title}) => {
    return (
        <View style={styles.appItem}>
            <LinearGradient
                start={{x: 0}}
                end={{x: 1}}
                colors={['#49bc6e', '#49BC6E']}
                style={styles.background}>
                <MaterialIcons style={styles.appIcon} name={icon}/>
            </LinearGradient>
            <Text style={styles.appItemTitle}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    appItem: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    background: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: 'hidden'
    },
    appIcon: {
        color: '#fff',
        fontSize: 35
    },
    appItemTitle: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5
    }
});
