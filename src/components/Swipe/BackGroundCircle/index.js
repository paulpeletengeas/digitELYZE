import React from 'react';
import { StyleSheet, View } from 'react-native';

const BackgroundCircle = () => <View style={styles.circle} />;

const styles = StyleSheet.create({
    circle: {
        zIndex: 1,
        position: 'absolute',
        top: '60%',
        right: '-50%',
        height: '200%',
        width: '200%',
        borderRadius: '400%',
        backgroundColor: '#f91d45',
    },
});

export default BackgroundCircle;
