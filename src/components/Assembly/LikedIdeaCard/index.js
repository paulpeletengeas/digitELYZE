import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LikedIdeaCard = ({ data, index, popupSheetRef, setPopupIndex, themeData }) => {
    const [categoryName, setCategoryName] = useState('');
    const [body, setBody] = useState(data.body);
    const openPopup = () => {
        popupSheetRef.current?.collapse();
        setPopupIndex(index);
    };

    useEffect(() => {
        const foundTheme = themeData.find((theme) => theme.categoryId === data.themeId);
        setCategoryName(foundTheme.categoryName);
        setBody(data.body);
    }, [index]);

    return (
        <TouchableOpacity style={styles.container} onPress={openPopup} key={data.id}>
            <View style={styles.leftContent}>
                <Text style={styles.body}>{body}</Text>
                <Text style={styles.categoryName}>{categoryName}</Text>
            </View>
            <View style={styles.plusCircle}>
                <Text style={styles.plusSign}>+</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: '1px',
        borderColor: '#b0b0b0',
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContent: {
        width: '80%',
    },
    body: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    categoryName: {
        fontSize: 13,
    },
    plusCircle: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#f91d45',
        borderRadius: 15,
    },
    plusSign: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
    },
});

export default LikedIdeaCard;
