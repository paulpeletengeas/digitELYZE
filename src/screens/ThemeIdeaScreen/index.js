import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FindOutMorePopup from '../../components/Swipe/FindOutMorePopup';
import { AntDesign } from '@expo/vector-icons';

import fakeData from '../../fakeData';
import themeData from '../../themeData';

const ThemeIdeaScreen = ({ route, navigation }) => {
    const { themeId } = route.params;
    const [themeName, setThemeName] = useState('');
    const [filteredIdeas, setFilteredIdeas] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataIndex, setDataIndex] = useState(0);

    const sheetRef = useRef(null);

    useEffect(() => {
        const foundTheme = themeData.find((theme) => theme.categoryId === themeId);
        const foundIdeas = fakeData.filter((idea) => idea.themeId === themeId);

        if (foundIdeas.length > 0) setFilteredIdeas(foundIdeas);
        setThemeName(foundTheme !== undefined ? foundTheme.categoryName : 'Catégorie introuvable');
        setIsLoaded(true);
    }, [route]);

    return (
        isLoaded === true && (
            <>
                <SafeAreaView style={styles.container}>
                    <StatusBar hidden />
                    <View style={styles.statusBar} />
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name='leftcircle' size={26} color='#f91d45' />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>{themeName}</Text>
                        <View style={styles.emptyView} />
                    </View>
                    <ScrollView>
                        {filteredIdeas &&
                            filteredIdeas.length > 0 &&
                            filteredIdeas.map((idea, index) => (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        sheetRef.current?.collapse();
                                        setDataIndex(index);
                                    }}
                                >
                                    <View style={styles.elementsContainer}>
                                        <View style={styles.leftTexts}>
                                            <Text style={styles.body}>{idea.body}</Text>
                                            <Text style={styles.themeName}>{themeName}</Text>
                                        </View>
                                        <AntDesign name='pluscircle' size={24} color='#f91d45' />
                                    </View>
                                    <View style={styles.divider} />
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                </SafeAreaView>
                <FindOutMorePopup
                    sheetRef={sheetRef}
                    themeData={themeData}
                    data={filteredIdeas}
                    index={dataIndex}
                    displayParty
                />
            </>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: '5%',
        backgroundColor: 'white',
    },
    statusBar: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        height: 50,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    emptyView: {
        width: 26,
        height: 26,
    },
    button: {
        width: '100%',
    },
    elementsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 25,
        alignItems: 'center',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#b9bdba',
    },
    leftTexts: {
        justifyContent: 'space-evenly',
    },
    body: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    themeName: {
        fontSize: 12,
        marginTop: 5,
    },
});
export default ThemeIdeaScreen;
