import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import fakeAssembly from '../../../fakeAssembly';

const ShareDataView = () => {
    const [data, setData] = useState(fakeAssembly);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../../assets/IMG_1413.png')} resizeMode='contain' />
            <View style={styles.textView}>
                <Text>@elyze.app</Text>
                <Text style={styles.myResults}>Mes résultats</Text>
                <Text>{'à partir de 1 vote'.toUpperCase()}</Text>
            </View>
            <View style={styles.podiumView}>
                <View style={[styles.secondMarch, { backgroundColor: data[1].partyColor }]}>
                    <View style={[styles.iconWrapper, { backgroundColor: '#919191' }]}>
                        <View style={styles.logoBackground}>
                            <Image style={styles.podiumLogo} source={{ uri: data[1].logo }} resizeMode='contain' />
                        </View>
                    </View>
                    <Text style={styles.podiumNumber}>#2</Text>
                </View>
                <View style={[styles.firstMarch, { backgroundColor: data[0].partyColor }]}>
                    <View style={[styles.iconWrapper, { backgroundColor: '#cf9323' }]}>
                        <View style={styles.logoBackground}>
                            <Image style={styles.podiumLogo} source={{ uri: data[1].logo }} resizeMode='contain' />
                        </View>
                    </View>
                    <Text style={styles.podiumNumber}>#1</Text>
                </View>
                <View style={[styles.thirdMarch, { backgroundColor: data[2].partyColor }]}>
                    <View style={[styles.iconWrapper, { backgroundColor: '#ad5f3b' }]}>
                        <View style={styles.logoBackground}>
                            <Image style={styles.podiumLogo} source={{ uri: data[1].logo }} resizeMode='contain' />
                        </View>
                    </View>
                    <Text style={styles.podiumNumber}>#3</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '75%',
        borderWidth: 10,
        borderColor: '#4932c9',
        height: 300,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textView: {
        alignItems: 'center',
        top: -35,
    },
    myResults: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    logo: {
        width: '50%',
        marginTop: -20,
    },
    podiumView: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    secondMarch: {
        width: '20%',
        height: '80%',
        marginLeft: 30,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    firstMarch: {
        width: '20%',
        height: '120%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    thirdMarch: {
        width: '20%',
        height: '60%',
        marginRight: 30,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    iconWrapper: {
        width: '65%',
        height: 40,
        alignSelf: 'center',
        top: -20,
        borderRadius: 20,
    },
    logoBackground: {
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: '40%',
        alignSelf: 'center',
        marginVertical: '10%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    podiumLogo: {
        width: '100%',
        height: '50%',
    },
    podiumNumber: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        top: -15,
    },
});

export default ShareDataView;
