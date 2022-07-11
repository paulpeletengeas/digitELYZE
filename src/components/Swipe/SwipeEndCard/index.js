import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SwipeEndCard = () => (
    <View>
        <Text style={styles.endText}>Vous avez fini de swiper...</Text>
    </View>
);

const styles = StyleSheet.create({
    endText: {
        fontSize: 20,
        //backgroundColor: 'black',
    },
});

export default SwipeEndCard;
