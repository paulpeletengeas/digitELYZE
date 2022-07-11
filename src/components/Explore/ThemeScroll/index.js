import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import themeData from '../../../themeData';

const ThemeScroll = ({ navigation }) => {
    const themes = themeData || [];

    return (
        <View style={styles.container}>
            {themes &&
                themes.length > 0 &&
                themes.map((theme) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ThemeIdeaScreen', { themeId: theme.categoryId })}
                        key={theme.categoryId}
                        style={[styles.themeButton, styles.shadowProps, { backgroundColor: theme.categoryColor }]}
                    >
                        <View style={styles.leftItems}>
                            <View style={styles.emojiContainer}>
                                <Text style={styles.emoji}>{theme.emoji}</Text>
                            </View>
                            <Text style={styles.themeName}>{theme.categoryName}</Text>
                        </View>
                        <AntDesign name='right' size={24} color='white' />
                    </TouchableOpacity>
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    themeButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        width: '94%',
        height: 70,
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 15,
    },
    shadowProps: {
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.2,
    },
    leftItems: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emojiContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    themeName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
});

export default ThemeScroll;
