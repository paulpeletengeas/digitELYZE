import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LikeActionBar = ({ swipeRef }) => (
    <View style={styles.container}>
        <TouchableOpacity
            style={[styles.secondaryActionCircle, styles.circleShadow]}
            onPress={() => swipeRef.current?.swipeBottom()}
        >
            <Text style={styles.emoji}>🤔</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.primaryActionCircle, styles.circleShadow]}
            onPress={() => swipeRef.current?.swipeLeft()}
        >
            <Text style={styles.emoji}>❌</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.primaryActionCircle, styles.circleShadow]}
            onPress={() => swipeRef.current?.swipeRight()}
        >
            <Text style={styles.emoji}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.secondaryActionCircle, styles.circleShadow]}
            onPress={() => swipeRef.current?.swipeTop()}
        >
            <Text style={styles.emoji}>🤩</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '10%',
        marginTop: '10%',
    },
    secondaryActionCircle: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 10,
    },
    primaryActionCircle: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },
    circleShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    emoji: {
        fontSize: 25,
    },
});

export default LikeActionBar;
