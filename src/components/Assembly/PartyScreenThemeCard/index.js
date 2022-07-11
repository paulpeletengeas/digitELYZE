import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import fakeData from '../../../fakeData';

const PartyScreenThemeCard = ({ item, themeName, sheetRef, setDataIndex }) => {
    const openPopup = () => {
        sheetRef?.current?.collapse();
    };

    useEffect(() => {
        setDataIndex(fakeData.indexOf(item));
    }, [item]);
    return (
        <TouchableOpacity style={styles.container} onPress={openPopup}>
            <View style={styles.mainItems}>
                <View style={styles.textFields}>
                    <Text style={styles.body}>{item.body}</Text>
                    <Text style={styles.themeName}>{themeName}</Text>
                </View>
                <View style={styles.plusContainer}>
                    <AntDesign name='plus' size={16} color='white' />
                </View>
            </View>
            <View style={styles.divider} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    mainItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
        alignItems: 'center',
    },
    body: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
    themeName: {
        fontSize: 14,
    },
    divider: {
        height: 1,
        backgroundColor: '#b5b5b5',
    },
    plusContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f91d45',
    },
    plusSign: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default PartyScreenThemeCard;
