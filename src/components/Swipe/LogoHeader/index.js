import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const LogoHeader = () => (
    <View style={styles.container}>
        <Image source={require('../../../../assets/IMG_1413.png')} style={styles.image} resizeMode='contain' />
    </View>
);

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
        alignSelf: 'center',
        width: '45%',
        flex: 0.7,
    },
    image: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
    },
});

export default LogoHeader;
