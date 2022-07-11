import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ElectionScroll from '../../components/Explore/ElectionScroll';
import PartyScroll from '../../components/Explore/PartyScroll';
import ThemeScroll from '../../components/Explore/ThemeScroll';

const ExploreScreen = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.screenTitle}>Explorer</Text>
        </View>
        <ScrollView style={styles.scrollView}>
            <View style={{ flex: 1, height: '100%' }}>
                <View>
                    <Text style={styles.sectionTitle}>L&apos;élection</Text>
                    <Text style={styles.countdown}>J-17</Text>
                    <Text style={styles.countdownSubTitle}>avant le premier tour</Text>
                    <ElectionScroll />
                </View>
                <View>
                    <View style={styles.partySectionHeader}>
                        <Text style={styles.sectionTitle}>Groupes parlementaires</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('PartyListScreen')}>
                            <AntDesign
                                name='rightcircle'
                                size={24}
                                color='#f91d45'
                                style={{ marginTop: 15, marginRight: 15 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <PartyScroll navigation={navigation} />
                </View>
                <View>
                    <Text style={styles.sectionTitle}>Par thème</Text>
                    <ThemeScroll navigation={navigation} />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -50,
    },
    header: {
        height: '15%',
        width: '100%',
    },
    screenTitle: {
        height: '100%',
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 15,
        paddingBottom: 15,
        top: '60%',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,
    },
    countdown: {
        fontSize: 36,
        fontWeight: 'bold',
        paddingLeft: 15,
        marginTop: 8,
    },
    countdownSubTitle: {
        marginLeft: 15,
        fontWeight: 'bold',
    },
    partySectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ExploreScreen;
