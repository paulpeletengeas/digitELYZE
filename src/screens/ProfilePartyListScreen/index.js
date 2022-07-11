import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import fakeAssembly from '../../fakeAssembly';

const ProfilePartyListScreen = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.statusBar} />
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='leftcircle' size={26} color='#f91d45' />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Groupes parlementaires</Text>
            <View style={styles.emptyView} />
        </View>
        <ScrollView>
            {fakeAssembly &&
                fakeAssembly.length > 0 &&
                fakeAssembly.map((party) => (
                    <TouchableOpacity
                        key={party._id}
                        onPress={() => navigation.navigate('ProfilePartyScreen', { party: party.partyName })}
                        style={[styles.partyButton, styles.shadowProps]}
                    >
                        <Image source={{ uri: party.logo }} resizeMode='contain' style={styles.logo} />
                        <Text style={styles.partyName}>{party.partyName}</Text>
                    </TouchableOpacity>
                ))}
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: '5%',
        backgroundColor: 'white',
    },
    statusBar: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        height: 50,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    emptyView: {
        width: 26,
        height: 26,
    },
    partyButton: {
        width: '95%',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 15,
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    partyName: {
        fontWeight: 'bold',
    },
    shadowProps: {
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
});

export default ProfilePartyListScreen;
