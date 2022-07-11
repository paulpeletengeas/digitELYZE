import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PartyScreenThemeCard from '../../components/Assembly/PartyScreenThemeCard';
import FindOutMorePopup from '../../components/Swipe/FindOutMorePopup';

import fakeData from '../../fakeData';
import themeData from '../../themeData';

const ProfileThemeCardScreen = ({ route, navigation }) => {
    const { themeId, partyId } = route.params;
    const [filteredData, setFilteredData] = useState([]);
    const [themeName, setThemeName] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataIndex, setDataIndex] = useState(0);

    const sheetRef = useRef(null);

    useEffect(() => {
        const filtered = fakeData.filter(
            (proposition) => proposition.themeId === themeId && proposition.partyId === partyId,
        );
        const foundTheme = themeData.find((theme) => theme.categoryId === themeId);
        if (foundTheme && filtered) {
            setFilteredData(filtered);
            setThemeName(foundTheme.categoryName);
        }
        setIsLoaded(true);
    }, [themeId, partyId]);

    return isLoaded === true ? (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar hidden />
                <View style={styles.statusBar} />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                        <AntDesign name='left' size={17} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.themeName}>{themeName}</Text>
                    <View style={styles.emptyView} />
                </View>
                {filteredData && filteredData.length > 0 ? (
                    <ScrollView style={styles.scrollView}>
                        {filteredData.map((item) => (
                            <PartyScreenThemeCard
                                item={item}
                                themeName={themeName}
                                setDataIndex={setDataIndex}
                                sheetRef={sheetRef}
                                key={item.categoryId}
                            />
                        ))}
                    </ScrollView>
                ) : (
                    <View style={styles.noDataView}>
                        <Text style={styles.noDataText}>Aucune donnée à afficher</Text>
                    </View>
                )}
            </SafeAreaView>
            <FindOutMorePopup
                sheetRef={sheetRef}
                index={dataIndex}
                data={fakeData}
                themeData={themeData}
                displayParty
            />
        </>
    ) : (
        <View />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -50,
    },
    statusBar: {
        height: 50,
        backgroundColor: 'white',
        width: '100%',
    },
    header: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '6%',
        paddingHorizontal: 15,
    },
    iconContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#f91d45',
        justifyContent: 'center',
        alignItems: 'center',
    },
    themeName: {
        marginTop: 9,
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
    },
    emptyView: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataView: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        marginTop: 30,
    },
    noDataText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ProfileThemeCardScreen;
