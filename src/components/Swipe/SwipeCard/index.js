import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SwipeCard = ({ data, sheetRef, themeData }) => {
    const [color, setColor] = useState('');
    const [emoji, setEmoji] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    const openPopup = () => {
        sheetRef?.current?.collapse();
    };

    useEffect(() => {
        const foundTheme = themeData.find((theme) => theme.categoryId === data.themeId);
        setColor(foundTheme.categoryColor);
        setEmoji(foundTheme.emoji);
        setCategoryName(foundTheme.categoryName);
        setIsLoaded(true);
    }, []);
    return isLoaded === true ? (
        <View style={[styles.container, styles.cardShadow, { backgroundColor: color }]}>
            <View style={styles.titleContainer}>
                <View style={[styles.themeIconCircle, { backgroundColor: color }]}>
                    <Text style={styles.circleIcon}>{emoji}</Text>
                </View>
                <Text style={[styles.mainTitle, { color }]}>{categoryName}</Text>
            </View>
            <Text style={styles.body}>{data.body}</Text>
            <TouchableOpacity onPress={openPopup} style={styles.seeMoreButton}>
                <Text style={[styles.seeMoreText, { color }]}>+ EN SAVOIR PLUS</Text>
            </TouchableOpacity>
        </View>
    ) : (
        <View>
            <Text>Erreur de chargement</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '60%',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
    },
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        flexDirection: 'row',
        marginTop: 14,
        marginLeft: 14,
        height: '8%',
        alignSelf: 'flex-start',
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    themeIconCircle: {
        height: 33,
        width: 33,
        borderRadius: 16,
        marginLeft: 3,
        justifyContent: 'center',
    },
    circleIcon: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    mainTitle: {
        padding: 7,
        fontSize: 15,
        textAlign: 'center',
        marginRight: 7,
    },
    body: {
        height: '70%',
        color: 'white',
        marginLeft: 14,
        marginRight: 14,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 14,
    },
    seeMoreButton: {
        height: '12%',
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    seeMoreText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default SwipeCard;
