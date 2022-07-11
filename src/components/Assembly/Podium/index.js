import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const Podium = ({ navigation, data }) => (
    <View style={styles.podium}>
        <TouchableOpacity
            onPress={() => navigation.navigate('PartyScreen', { party: data[1].partyName })}
            style={[styles.second, { backgroundColor: data[1].partyColor }]}
        >
            <TouchableOpacity
                style={[styles.icon, { backgroundColor: '#919191' }]}
                onPress={() => navigation.navigate('PartyScreen', { party: data[1].partyName })}
            >
                <View style={styles.imageContainer}>
                    <Image source={{ uri: data[1].logo }} resizeMode='contain' style={styles.partyLogo} />
                </View>
            </TouchableOpacity>
            <Text style={styles.number}>#2</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('PartyScreen', { party: data[0].partyName })}
            style={[styles.first, { backgroundColor: data[0].partyColor }]}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('PartyScreen', { party: data[0].partyName })}
                style={[styles.icon, { backgroundColor: '#cf9323' }]}
            >
                <View style={styles.imageContainer}>
                    <Image source={{ uri: data[0].logo }} resizeMode='contain' style={styles.partyLogo} />
                </View>
            </TouchableOpacity>
            <Text style={styles.number}>#1</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('PartyScreen', { party: data[2].partyName })}
            style={[styles.third, { backgroundColor: data[2].partyColor }]}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('PartyScreen', { party: data[2].partyName })}
                style={[styles.icon, { backgroundColor: '#ad5f3b' }]}
            >
                <View style={styles.imageContainer}>
                    <Image source={{ uri: data[2].logo }} resizeMode='contain' style={styles.partyLogo} />
                </View>
            </TouchableOpacity>
            <Text style={styles.number}>#3</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    podium: {
        zIndex: 2,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'flex-end',
        top: 5,
        height: 200,
        width: '100%',
    },
    imageContainer: {
        backgroundColor: 'white',
        width: '84%',
        height: '84%',
        alignSelf: 'center',
        marginTop: '8%',
        borderRadius: '50%',
    },
    partyLogo: {
        height: '90%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    second: {
        flexDirection: 'column',
        width: '20%',
        height: '55%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    icon: {
        width: '60%',
        height: 50,
        borderRadius: 25,
        top: -25,
        alignSelf: 'center',
    },
    number: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        top: -12,
    },
    first: {
        width: '20%',
        height: '70%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    third: {
        width: '20%',
        height: '40%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
});

export default Podium;
