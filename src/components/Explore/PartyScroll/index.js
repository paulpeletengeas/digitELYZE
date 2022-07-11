import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import fakeAssembly from '../../../fakeAssembly';

const PartyScroll = ({ navigation }) => {
    const partyList = fakeAssembly || [];

    return (
        <ScrollView horizontal style={styles.container}>
            {partyList &&
                partyList.length > 0 &&
                partyList.map((party) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ExplorePartyScreen', { party: party.partyName })}
                        style={[styles.buttonContainer, styles.shadowProps]}
                        key={party._id}
                    >
                        <Image style={styles.logo} source={{ uri: party.logo }} resizeMode='contain' />
                        <Text style={styles.partyName}>{party.partyName}</Text>
                    </TouchableOpacity>
                ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    buttonContainer: {
        width: 120,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 15,
    },
    logo: {
        width: '55%',
        height: '55%',
    },
    partyName: {
        fontSize: 14,
        marginHorizontal: 10,
        textAlign: 'center',
    },
    shadowProps: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
});

export default PartyScroll;
