import React from "react";
import {View, StyleSheet, Text, ImageBackground} from "react-native";
import { EvilIcons } from '@expo/vector-icons';

export const AppBanner = () => {
    return (
        <View style={styles.bannerWrapper}>
            <ImageBackground style={styles.image} source={require('../../assets/banner.jpg')}>
                <EvilIcons style={styles.bannerIcon} name="plus" size={50} color="white" />
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.subtitle}>Subtitle some text here</Text>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    bannerWrapper: {
        marginVertical: 10,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 30,
        overflow: 'hidden'
    },
    bannerIcon: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    textWrapper: {
        padding: 20
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
        marginBottom: 10
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
