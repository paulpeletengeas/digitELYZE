import React from 'react';
import { View, StyleSheet } from 'react-native';

const Flag = () => (
    <View style={styles.flag}>
        <View style={[styles.flagLine, { backgroundColor: '#669cc4' }]} />
        <View style={[styles.flagLine, { backgroundColor: 'white' }]} />
        <View style={[styles.flagLine, { backgroundColor: '#d64b4b' }]} />
    </View>
);

const styles = StyleSheet.create({
    flag: {
        zIndex: 3,
        height: 15,
        top: 5,
    },
    flagLine: {
        flex: 1,
    },
});

export default Flag;
