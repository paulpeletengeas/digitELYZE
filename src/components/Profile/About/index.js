import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const About = () => (
    <ScrollView style={styles.container}>
        <View style={styles.createdBy}>
            <Text style={styles.elyze}>Elyze</Text>
            <Text style={styles.createdByText}> a été créée avec ❤️ par</Text>
        </View>
        <View style={styles.creatorButton}>
            <View style={styles.leftElements}>
                <View style={styles.nameElements}>
                    <Text style={styles.firstName}>Grégoire</Text>
                    <Text style={styles.lastName}> Cazcarra</Text>
                </View>
                <Text style={styles.coCreatorText}>Co-créateur</Text>
            </View>
            <Image
                source={require('../../../../assets/francoismari.png')}
                resizeMode='contain'
                style={styles.creatorImage}
            />
        </View>
        <View style={styles.creatorButton}>
            <View style={styles.leftElements}>
                <View style={styles.nameElements}>
                    <Text style={styles.firstName}>François</Text>
                    <Text style={styles.lastName}> Mari</Text>
                </View>
                <Text style={styles.coCreatorText}>Co-créateur</Text>
            </View>
            <Image
                source={require('../../../../assets/francoismari.png')}
                resizeMode='contain'
                style={styles.creatorImage}
            />
        </View>
        <View style={styles.secondCreators}>
            <TouchableOpacity style={styles.secondCreatorContainer}>
                <View style={styles.faceContainer}>
                    <Image
                        source={require('../../../../assets/paulpeletengeas.png')}
                        resizeMode='contain'
                        style={styles.secondCreatorImage}
                    />
                </View>
                <Text style={styles.secondCreatorName}>Paul Pélétengeas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondCreatorContainer}>
                <View styles={styles.faceContainer}>
                    <Image
                        source={require('../../../../assets/paulpeletengeas.png')}
                        resizeMode='contain'
                        style={styles.secondCreatorImage}
                    />
                </View>
                <Text style={styles.secondCreatorName}>Paul Pélétengeas</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.partyInfoButton}>
            <View style={styles.partyInfoTopText}>
                <Text style={styles.partyInfoLes}>les</Text>
                <Text style={styles.partyInfoEngages}> engagés </Text>
                <Text style={styles.partyInfoPoint}>!</Text>
            </View>
            <Text style={styles.partyInfoBottomText}>Le Mouvement Citoyen</Text>
        </TouchableOpacity>
        <View style={styles.incubator}>
            <Text style={styles.textWrapper}>
                <Text style={styles.incubated}>incubée</Text>
                <Text> par le mouvement citoyen a-partisan </Text>
                <Text style={styles.incubated}>Les Engagés !</Text>
                <Text> et plus de 30 bénévoles :</Text>
            </Text>
        </View>
        <View style={styles.volunteerContainer}>
            <Text style={styles.volunteerText}>
                Cloé Artaut · Gaston Anton Leon · Victor Barthes · Talia Belmont · Thibaut Chancy · Alexis Costa · Louis
                de Benoist · Enzo Gabriel · Fanny Graffin · Garance Hablot · Victor Jacquet · Anna Koulakssis · Loup
                Laurent · Marie Lafarge · Océanne Lewden · Tom Martin · Octavien Maury · Maxime Mazuel · Julien Mazzerbo
                · Vincent Monnet · Lena Museur · Camilo Pallasco · Swann Payan · Mathilde Pelletier · Louison Poilvert ·
                Baptiste Salis · Méliana Sebbag · Marius Simiand · Julia Thebault Laurier · Julie Wright
            </Text>
        </View>
        <View style={styles.socialMediaButtons}>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#ad2f8c' }]}>
                <AntDesign name='instagram' size={24} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#49a9c9' }]}>
                <AntDesign name='twitter' size={24} color='white' />
            </TouchableOpacity>
        </View>
        <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 10, paddingBottom: 20 }}>
            PS : Elyze est open-source !
        </Text>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 15,
    },
    createdBy: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
    },
    elyze: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    createdByText: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    creatorButton: {
        width: '95%',
        backgroundColor: '#5fadde',
        alignSelf: 'center',
        marginTop: 10,
        padding: 15,
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-between',
    },
    creatorImage: {
        width: 60,
        height: 60,
        bottom: -15,
    },
    leftElements: {
        justifyContent: 'space-evenly',
    },
    nameElements: {
        flexDirection: 'row',
    },
    firstName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    lastName: {
        color: 'white',
        fontSize: 20,
    },
    coCreatorText: {
        color: 'white',
        fontSize: 16,
    },
    secondCreators: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    secondCreatorContainer: {
        backgroundColor: '#aea3c4',
        width: '46%',
        padding: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 80,
        borderRadius: 15,
    },
    secondCreatorImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    partyInfoButton: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    partyInfoTopText: {
        flexDirection: 'row',
    },
    partyInfoLes: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    partyInfoEngages: {
        fontWeight: 'bold',
        fontSize: 16,
        fontStyle: 'italic',
    },
    partyInfoPoint: {
        fontWeight: 'bold',
        fontSize: 16,
        fontStyle: 'italic',
        color: '#edcf39',
    },
    partyInfoBottomText: {
        fontSize: 16,
        marginTop: 5,
        color: '#edcf39',
    },
    incubator: {
        marginTop: 10,
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textWrapper: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 16,
    },
    incubated: {
        fontWeight: 'bold',
    },
    engages: {
        fontWeight: 'bold',
    },
    volunteerContainer: {
        width: '95%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 15,
    },
    volunteerText: {
        fontSize: 15,
    },
    socialMediaButtons: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    socialButton: {
        padding: 10,
        width: '49%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
});

export default About;
