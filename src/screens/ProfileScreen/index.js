import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import fakeData from '../../fakeData';
import themeData from '../../themeData';
import FindOutMorePopup from '../../components/Swipe/FindOutMorePopup';
import Favorites from '../../components/Profile/Favorites';
import About from '../../components/Profile/About';
import SettingsTab from '../../components/Profile/Settings';

const user = {
    favoriteParties: [1, 2, 3],
    favoritePropositions: [1, 2, 4],
};

const ProfileScreen = ({ navigation }) => {
    const [displayState, setDisplay] = useState(0);
    const [me, setMe] = useState(undefined);
    const [propositionObjArray, setPropositionObjArray] = useState([]);
    const [dataIndex, setDataIndex] = useState(0);

    const propositionSheetRef = useRef(null);
    const settingsSheetRef = useRef(null);

    const openFavoritesTab = () => setDisplay(0);
    const openAboutTab = () => setDisplay(1);
    const openSettings = () => settingsSheetRef.current?.collapse();

    useEffect(() => {
        setMe(user);
        const tmpArray = fakeData.filter((prop) => user.favoritePropositions.includes(prop.id));
        setPropositionObjArray(tmpArray);
    }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.emptyView} />
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Mon profil</Text>
                    <TouchableOpacity onPress={openSettings} style={styles.settingsIconContainer}>
                        <Ionicons name='settings' size={24} color='#9c9c9c' />
                    </TouchableOpacity>
                </View>
                <View style={styles.tabButtonsContainer}>
                    <TouchableOpacity
                        onPress={openFavoritesTab}
                        style={[styles.tabButton, { backgroundColor: displayState === 0 ? '#f91d45' : '#cfcfcf' }]}
                    >
                        <Text style={[styles.tabButtonText, { color: displayState === 0 ? 'white' : 'black' }]}>
                            ⭐️ FAVORIS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={openAboutTab}
                        style={[styles.tabButton, { backgroundColor: displayState === 1 ? '#f91d45' : '#cfcfcf' }]}
                    >
                        <Text style={[styles.tabButtonText, { color: displayState === 1 ? 'white' : 'black' }]}>
                            {'à'.toUpperCase()} PROPOS
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                    {displayState === 0 && (
                        <Favorites
                            me={me}
                            navigation={navigation}
                            setDataIndex={setDataIndex}
                            propositionSheetRef={propositionSheetRef}
                        />
                    )}
                    {displayState === 1 && <About />}
                </View>
            </SafeAreaView>
            {me && propositionObjArray.length > 0 && (
                <FindOutMorePopup
                    displayParty
                    themeData={themeData}
                    data={propositionObjArray}
                    index={dataIndex}
                    sheetRef={propositionSheetRef}
                />
            )}
            <SettingsTab sheetRef={settingsSheetRef} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -50,
    },
    header: {
        backgroundColor: '#f91d45',
        height: '15%',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        top: '18%',
        fontSize: 24,
    },
    settingsIconContainer: {
        backgroundColor: 'white',
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        top: '13%',
    },
    tabButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabButton: {
        width: '46%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 7,
    },
    tabButtonText: {
        fontSize: 14,
        textAlign: 'center',
    },
    tabContainer: {
        height: '84%',
    },
});

export default ProfileScreen;
