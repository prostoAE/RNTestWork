import React from "react";
import {View, StyleSheet} from "react-native";
import {AppItem} from "./AppItem";
import mockItems from "../mock/appItemsMock";

export const AppItems = () => {

    return (
        <View style={styles.itemsWrapper}>
            {mockItems.map(item => <AppItem key={item.id} icon={item.icon} title={item.title}/>)}
        </View>
    )
};

const styles = StyleSheet.create({
    itemsWrapper: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
});
