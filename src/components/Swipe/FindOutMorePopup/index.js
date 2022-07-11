import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';

import fakeAssembly from '../../../fakeAssembly';

const FindOutMorePopup = ({ data, index, sheetRef, themeData, displayParty }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [color, setColor] = useState('');
    const [emoji, setEmoji] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [partyName, setPartyName] = useState('');
    const [partyLogo, setPartyLogo] = useState('');
    const snapPoints = useMemo(() => ['94%'], []);

    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />,
        [],
    );
    const likeAction = () => {
        if (isLiked === true) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    };
    useEffect(() => {
        const foundTheme = themeData.find((theme) => theme?.categoryId === data[index]?.themeId);
        const foundParty = fakeAssembly.find((party) => data[index]?.partyId === party._id);
        if (foundTheme !== undefined) {
            setColor(foundTheme.categoryColor);
            setEmoji(foundTheme.emoji);
            setCategoryName(foundTheme.categoryName);
            setIsLoaded(true);
        }
        if (foundParty !== undefined) {
            setPartyName(foundParty.partyName);
            setPartyLogo(foundParty.logo);
        }
    }, [index]);

    return isLoaded ? (
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
        >
            <BottomSheetView style={styles.topBar}>
                <View style={[styles.titleWrapper, { backgroundColor: color }]}>
                    <Text style={[styles.title]}>
                        {emoji} {categoryName.toUpperCase()}
                    </Text>
                    {displayParty === true && (
                        <View style={styles.displayPartyView}>
                            <View style={styles.partyLogoContainer}>
                                <Image style={styles.partyLogo} source={{ uri: partyLogo }} />
                            </View>
                            <Text style={styles.partyName}>De {partyName}</Text>
                        </View>
                    )}
                </View>
                <TouchableOpacity onPress={likeAction} style={[styles.likeButton, { backgroundColor: color }]}>
                    <Entypo
                        style={styles.likeStar}
                        name={isLiked === true ? 'star' : 'star-outlined'}
                        color='white'
                        size={24}
                    />
                </TouchableOpacity>
            </BottomSheetView>
            <Text style={styles.body}>{data[index]?.body}</Text>
            <Text style={styles.details}>{data[index]?.details}</Text>
            <TouchableOpacity
                style={[styles.closeButton, { backgroundColor: color }]}
                onPress={() => {
                    sheetRef.current?.close();
                }}
            >
                <Text style={styles.closeText}>FERMER</Text>
            </TouchableOpacity>
        </BottomSheet>
    ) : (
        <View>
            <Text>No data</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 3,
        left: 0,
        right: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    topBar: {
        flex: 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleWrapper: {
        borderRadius: 10,
        height: 35,
    },
    title: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 6,
    },
    likeButton: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 35,
        width: 50,
        borderRadius: 10,
    },
    displayPartyView: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    partyLogoContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    partyLogo: {
        width: '100%',
        height: '100%',
    },
    body: {
        fontSize: 26,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    details: {
        flex: 2,
        fontSize: 18,
        marginHorizontal: 20,
        marginTop: 10,
    },
    closeButton: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        marginBottom: '15%',
        height: '10%',
        borderRadius: 15,
    },
    closeText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    shadowProps: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
});

export default FindOutMorePopup;
