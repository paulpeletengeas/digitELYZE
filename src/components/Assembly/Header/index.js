import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ openShare }) => (
    <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Mon Assemblée</Text>
        <TouchableOpacity style={styles.shareButton} onPress={openShare}>
            <EvilIcons name='share-apple' color='white' size={27} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    headerBar: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '90%',
        marginTop: '15%',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    shareButton: {
        backgroundColor: '#f91d45',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;
