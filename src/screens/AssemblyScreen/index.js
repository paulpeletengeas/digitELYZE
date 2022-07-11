import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PartyScoreCard from '../../components/Assembly/PartyScoreCard';
import PartyLikeDetails from '../../components/Assembly/PartyLikeDetails';
import ShareBottomSheet from '../../components/Assembly/ShareBottomSheet';
import FindOutMorePopup from '../../components/Swipe/FindOutMorePopup';
import Podium from '../../components/Assembly/Podium';

import fakeAssembly from '../../fakeAssembly';
import fakeData from '../../fakeData';
import themeData from '../../themeData';
import Flag from '../../components/Assembly/Flag';
import Header from '../../components/Assembly/Header';

const AssemblyScreen = ({ navigation }) => {
    const [data, setData] = useState(fakeAssembly);
    const [popupData, setPopupData] = useState(fakeData);
    const [idx, setIdx] = useState(0);
    const [popupIndex, setPopupIndex] = useState(0);

    const sheetRef = useRef(null);
    const popupSheetRef = useRef(null);
    const shareSheetRef = useRef(null);

    const openShare = () => {
        shareSheetRef?.current?.collapse();
    };

    useEffect(() => {
        setData(fakeAssembly);
        setPopupData(fakeData);
    });
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
                <Header openShare={openShare} />
                <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 50 }}>
                    <View style={styles.circle} />
                    <Podium data={data} navigation={navigation} />
                    <Flag />
                    <View style={styles.assemblyList}>
                        <Text style={styles.allResultsLabel}>🏆 Tous les résultats</Text>
                        <Text style={styles.voteCountLabel}>{'SUR 142 PROPOSITIONS PASSées'.toUpperCase()}</Text>
                        <Text style={styles.keepVotingLabel}>
                            {'continue à voter pour affiner tes résultats'.toUpperCase()}
                        </Text>
                        {data &&
                            data.map((item, index) => (
                                <PartyScoreCard
                                    index={index}
                                    setIndex={setIdx}
                                    data={item}
                                    key={item._id}
                                    sheetRef={sheetRef}
                                />
                            ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
            {data && data[idx] && (
                <PartyLikeDetails
                    data={data[idx]}
                    sheetRef={sheetRef}
                    popupSheetRef={popupSheetRef}
                    setPopupIndex={setPopupIndex}
                    themeData={themeData}
                />
            )}
            {popupData && popupData[popupIndex] && (
                <FindOutMorePopup data={popupData} sheetRef={popupSheetRef} index={popupIndex} themeData={themeData} />
            )}
            <ShareBottomSheet sheetRef={shareSheetRef} />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        top: 60,
    },
    circle: {
        top: 125,
        position: 'absolute',
        zIndex: 1,
        width: 800,
        height: 400,
        borderTopLeftRadius: 400,
        borderTopRightRadius: 400,
        alignSelf: 'center',
        backgroundColor: '#f91d45',
    },
    assemblyList: {
        backgroundColor: 'white',
        alignItems: 'center',
        zIndex: 3,
        top: 5,
    },
    allResultsLabel: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 19,
    },
    voteCountLabel: {
        marginTop: 7,
        fontWeight: 'bold',
        fontSize: 16,
    },
    keepVotingLabel: {
        marginVertical: 7,
        fontSize: 12,
        width: '50%',
        textAlign: 'center',
    },
});

export default AssemblyScreen;
