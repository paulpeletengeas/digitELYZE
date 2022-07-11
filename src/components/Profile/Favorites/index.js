import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import fakeAssembly from '../../../fakeAssembly';
import fakeData from '../../../fakeData';
import themeData from '../../../themeData';

const Favorites = ({ me, navigation, propositionSheetRef, setDataIndex }) => {
    const getPartyObj = (partyId) => {
        const foundParty = fakeAssembly.find((party) => party._id === partyId);
        return foundParty;
    };
    const getPropositionObj = (id) => {
        const foundProposition = fakeData.find((proposition) => proposition.id === id);

        return foundProposition || null;
    };
    const getThemeName = (themeId) => {
        const foundTheme = themeData.find((theme) => theme.categoryId === themeId);

        return foundTheme.categoryName;
    };
    const openPopup = (index) => {
        setDataIndex(index);
        propositionSheetRef.current?.collapse();
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.sectionTitle}>Groupes favoris</Text>
            </View>
            {me && me.favoriteParties?.length > 0 ? (
                <ScrollView horizontal style={styles.partyScrollView} showsHorizontalScrollIndicator={false}>
                    {me.favoriteParties.map((partyId) => {
                        const { partyName, logo } = getPartyObj(partyId);
                        return (
                            <TouchableOpacity style={[styles.partyButtonContainer, styles.shadowProps]}>
                                <Image style={styles.partyLogo} source={{ uri: logo }} resizeMode='contain' />
                                <Text style={styles.partyName}>{partyName}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            ) : (
                <View style={styles.noPartiesView}>
                    <Text style={styles.assemblyIcon}>🏛</Text>
                    <Text style={styles.noPartiesText}>Aucun groupe favori</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProfilePartyListScreen')}
                        style={styles.searchPartiesButtonContainer}
                    >
                        <Text style={styles.searchParties}>+ PARCOURIR</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View>
                <Text style={styles.sectionTitle}>Propositions favorites</Text>
                {me && me.favoritePropositions?.length > 0 ? (
                    <View>
                        {me.favoritePropositions.map((propositionId, index) => {
                            const proposition = getPropositionObj(propositionId, index);
                            return (
                                <TouchableOpacity key={proposition.id} onPress={() => openPopup(index)}>
                                    <View style={styles.propositionCard}>
                                        <View style={styles.leftTexts}>
                                            <Text style={styles.body}>{proposition.body}</Text>
                                            <Text style={styles.themeName}>{getThemeName(proposition.themeId)}</Text>
                                        </View>
                                        <AntDesign name='pluscircle' size={24} color='#f91d45' />
                                    </View>
                                    <View style={styles.divider} />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ) : (
                    <View style={styles.noPartiesView}>
                        <Text style={styles.assemblyIcon}>🗳</Text>
                        <Text style={styles.noPartiesText}>Aucune proposition favorite</Text>
                        <TouchableOpacity style={styles.searchPartiesButtonContainer}>
                            <Text style={styles.searchParties}>+ PARCOURIR</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,
    },
    noPartiesView: {
        width: '95%',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 15,
    },
    assemblyIcon: {
        fontSize: 20,
    },
    noPartiesText: {
        marginTop: 5,
        fontSize: 16,
    },
    searchPartiesButtonContainer: {
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#f91d45',
        borderRadius: 12,
    },
    searchParties: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    propositionCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    body: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        opacity: 0.1,
    },
    partyScrollView: {
        padding: 15,
    },
    partyLogo: {
        width: '50%',
        height: '50%',
    },
    partyButtonContainer: {
        width: '24%',
        height: 120,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight: 10,
    },
    partyName: {
        fontSize: 12,
        textAlign: 'center',
        margin: 5,
    },
    shadowProps: {
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
});

export default Favorites;
