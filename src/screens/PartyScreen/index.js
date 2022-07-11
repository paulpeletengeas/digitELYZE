import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import fakeAssembly from '../../fakeAssembly';
import themeData from '../../themeData';

const PartyScreen = ({ route, navigation }) => {
    const { party } = route.params;
    const [partyObj, setPartyObj] = useState({});
    const [themes, setThemes] = useState(themeData);

    useEffect(() => {
        const foundParty = fakeAssembly.find((item) => item.partyName === party);
        if (foundParty) {
            setPartyObj(foundParty);
        }
    }, [party]);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#f91d45' hidden />
            <View style={styles.statusBar} />
            <View style={styles.header}>
                <View style={styles.headerButtons}>
                    <TouchableOpacity style={styles.headerButtonWrapper} onPress={() => navigation.goBack()}>
                        <AntDesign name='left' size={20} color='#f91d45' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerButtonWrapper}>
                        <FontAwesome name='star-o' size={20} color='#f91d45' />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconWrapper}>
                    <Image style={styles.partyLogo} source={{ uri: partyObj.logo }} resizeMode='contain' />
                </View>
                <Text style={styles.partyName}>{partyObj.partyName}</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.themeView}>
                    <Text style={[styles.about, { marginTop: 20 }]}>Propositions par thème</Text>
                </View>
                <ScrollView horizontal style={styles.themeScrollView} showsHorizontalScrollIndicator={false}>
                    {themes &&
                        themes.length > 0 &&
                        themes.map((theme) => (
                            <TouchableOpacity
                                key={theme.categoryId}
                                onPress={() =>
                                    navigation.navigate('ThemeCardScreen', {
                                        themeId: theme.categoryId,
                                        partyId: partyObj._id,
                                    })
                                }
                                style={[styles.themeButton, styles.themeButtonShadow]}
                            >
                                <Text style={styles.themeButtonEmoji}>{theme.emoji}</Text>
                                <Text style={styles.themeButtonTitle}>{theme.categoryName}</Text>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
                <View>
                    <Text style={styles.about}>{'à '.toUpperCase()}propos</Text>
                    <View style={styles.descriptionView}>
                        <Text>{partyObj.description}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -50,
    },
    statusBar: {
        height: 50,
        backgroundColor: '#f91d45',
        width: '100%',
    },
    header: {
        backgroundColor: '#f91d45',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    iconWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerButtonWrapper: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    partyLogo: {
        width: 90,
        height: 90,
    },
    partyName: {
        marginLeft: 15,
        marginBottom: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    descriptionView: {
        backgroundColor: 'white',
        margin: 15,
        padding: 10,
        borderRadius: 10,
    },
    about: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollView: {
        height: '70%',
    },
    themeScrollView: {
        marginHorizontal: 5,
    },
    themeButton: {
        backgroundColor: 'white',
        height: 90,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 15,
        marginHorizontal: 5,
        padding: 14,
    },
    themeButtonShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    themeButtonEmoji: {
        textAlign: 'center',
        fontSize: 24,
    },
    themeButtonTitle: {
        textAlign: 'center',
        fontSize: 12,
    },
});

export default PartyScreen;
