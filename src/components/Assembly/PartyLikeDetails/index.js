import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import fakeData from '../../../fakeData';
import LikedIdeaCard from '../LikedIdeaCard';

const PartyLikeDetails = ({ data, sheetRef, popupSheetRef, setPopupIndex, themeData }) => {
    const [barState, setBarState] = useState(0);
    const [liked, setLiked] = useState(fakeData);
    const [superLiked, setSuperLiked] = useState([]);
    const [disliked, setDisiked] = useState([]);
    const [superDisliked, setSuperDisliked] = useState([]);
    const [toDisplay, setToDisplay] = useState(liked);
    const [nothingToDisplayText, setNothingToDisplayText] = useState('likée');
    const snapPoints = useMemo(() => ['94%'], []);

    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />,
        [],
    );
    const handleDataChange = (index) => {
        if (index === 0) {
            setToDisplay(liked);
            setBarState(0);
            setNothingToDisplayText('likée');
        } else if (index === 1) {
            setToDisplay(superLiked);
            setBarState(1);
            setNothingToDisplayText('super-likée');
        } else if (index === 2) {
            setToDisplay(superDisliked);
            setBarState(2);
            setNothingToDisplayText('sans opinion');
        } else {
            setToDisplay(disliked);
            setBarState(3);
            setNothingToDisplayText('dislikée');
        }
    };

    useEffect(() => {
        setLiked(fakeData);
        setSuperLiked([]);
        setDisiked([]);
        setSuperDisliked([]);
    }, []);
    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose
            onDismiss={() => {
                sheetRef?.current?.close();
            }}
            backgroundStyle={{ backgroundColor: 'white' }}
            borderRadius={10}
            backdropComponent={renderBackdrop}
            handleComponent={() => <View />}
        >
            <BottomSheetView style={[styles.container, { backgroundColor: 'white' }]}>
                <View style={[styles.topBar, { backgroundColor: data.partyColor }]}>
                    <Text style={styles.partyName}>{data.partyName}</Text>
                    <View style={styles.selectButtonList}>
                        <TouchableOpacity
                            style={[styles.button, barState === 0 && { borderWidth: 3, borderColor: 'red' }]}
                            onPress={() => handleDataChange(0)}
                        >
                            <Text style={styles.buttonEmoji}>❤️</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, barState === 1 && { borderWidth: 3, borderColor: 'red' }]}
                            onPress={() => handleDataChange(1)}
                        >
                            <Text style={styles.buttonEmoji}>🤩</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, barState === 2 && { borderWidth: 3, borderColor: 'red' }]}
                            onPress={() => handleDataChange(2)}
                        >
                            <Text style={styles.buttonEmoji}>🤔</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, barState === 3 && { borderWidth: 3, borderColor: 'red' }]}
                            onPress={() => handleDataChange(3)}
                        >
                            <Text style={styles.buttonEmoji}>❌</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    {toDisplay && toDisplay.length > 0 ? (
                        toDisplay.map((item, index) => (
                            <LikedIdeaCard
                                key={item.id}
                                data={item}
                                index={index}
                                setPopupIndex={setPopupIndex}
                                popupSheetRef={popupSheetRef}
                                themeData={themeData}
                            />
                        ))
                    ) : (
                        <View style={styles.nothingToDisplayContainer}>
                            <Text style={styles.nothingToDisplay}>Aucune proposition {nothingToDisplayText}</Text>
                        </View>
                    )}
                </ScrollView>
                <TouchableOpacity
                    style={[styles.closeButton, { backgroundColor: data.partyColor }]}
                    onPress={() => {
                        sheetRef.current?.close();
                    }}
                >
                    <Text style={styles.closeButtonText}>RETOUR</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    topBar: {
        width: '100%',
        paddingTop: 15,
    },
    partyName: {
        marginHorizontal: 15,
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
    },
    selectButtonList: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
    button: {
        width: '18%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 10,
    },
    closeButton: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 25,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 15,
    },
    nothingToDisplayContainer: {
        paddingVertical: 60,
        alignSelf: 'center',
    },
    nothingToDisplay: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    closeButtonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default PartyLikeDetails;
