import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const PartyScoreCard = ({ data, sheetRef, index, setIndex }) => {
    const openLikeDetails = () => {
        sheetRef?.current?.collapse();
        setIndex(index);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openLikeDetails} style={[styles.button, { backgroundColor: data.partyColor }]}>
                <View style={styles.leftText}>
                    <Text style={styles.partyName}>
                        #{data.rank} {data.partyName}
                    </Text>
                    <Text style={styles.score}>Score: {data.score}</Text>
                </View>
                <View style={styles.partyLogoContainer}>
                    <Image style={styles.partyLogo} source={{ uri: data.logo }} resizeMode='contain' />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 4,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.9,
        padding: 11,
    },
    leftText: {
        width: '65%',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    partyName: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    score: {
        color: 'white',
        fontSize: 17,
    },
    partyLogoContainer: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
    },
    partyLogo: {
        width: '90%',
        height: '90%',
    },
});

export default PartyScoreCard;
