import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ElectionScroll = () => (
    <ScrollView
        style={styles.electionCarrousel}
        decelerationRate={0.8}
        horizontal
        snapToInterval={365}
        showsHorizontalScrollIndicator={false}
    >
        <TouchableOpacity
            style={[
                styles.electionCarrouselButton,
                styles.electionCarrouselButtonShadow,
                { backgroundColor: '#e3b552' },
            ]}
        >
            <Text>📝</Text>
            <Text style={styles.electionCarrouselText}>Vérifier mon inscription sur les listes électorales</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[
                styles.electionCarrouselButton,
                styles.electionCarrouselButtonShadow,
                { backgroundColor: '#4287f5' },
            ]}
        >
            <Text>🗳</Text>
            <Text style={styles.electionCarrouselText}>Comment aller voter ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[
                styles.electionCarrouselButton,
                styles.electionCarrouselButtonShadow,
                { backgroundColor: '#d44a8a' },
            ]}
        >
            <Text>🏛</Text>
            <Text style={styles.electionCarrouselText}>{'à'.toUpperCase()} quoi sert un(e) député(e) ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[
                styles.electionCarrouselButton,
                styles.electionCarrouselButtonShadow,
                { marginRight: 15 },
                { backgroundColor: '#5b4cc2' },
            ]}
        >
            <Text>🤝</Text>
            <Text style={[styles.electionCarrouselText]}>Donner procuration</Text>
        </TouchableOpacity>
    </ScrollView>
);

const styles = StyleSheet.create({
    electionCarrouselButton: {
        width: 350,
        marginTop: 10,
        marginLeft: 15,
        height: 90,
        padding: 13,
        borderRadius: 15,
    },
    electionCarrouselText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    electionCarrouselButtonShadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
});

export default ElectionScroll;
