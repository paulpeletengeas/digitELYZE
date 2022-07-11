import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

const SettingsTab = ({ sheetRef }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const snapPoints = useMemo(() => ['94%'], []);

    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />,
        [],
    );

    const closeSettingsTab = () => sheetRef.current?.close();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return isLoaded ? (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose
            onDismiss={() => {
                sheetRef?.current?.close();
            }}
            backgroundStyle={{ backgroundColor: '#efefef' }}
            borderRadius={10}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView style={{ padding: 15 }}>
                <ScrollView>
                    <View style={styles.topBar}>
                        <Text style={styles.settingsTitle}>Paramètres</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={closeSettingsTab}>
                            <AntDesign name='closecircle' size={28} color='#f91d45' />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.howItWorks}>{'comment ça marche ?'.toUpperCase()}</Text>
                    <View style={styles.textView}>
                        <Text>
                            <Text style={styles.highlightedText}>1.</Text>
                            <Text> Vote pour tes propositions favorites : </Text>
                            <Text style={styles.highlightedText}>glisse à gauche</Text>
                            <Text> si tu es en désaccord avec celle-ci (dislike), </Text>
                            <Text style={styles.highlightedText}>à droite</Text>
                            <Text> si tu l&apos;apprécies (like), </Text>
                            <Text style={styles.highlightedText}>vers le bas </Text>
                            <Text>si tu n&apos;as pas d&apos;opinion sur la question (sans opinion), </Text>
                            <Text style={styles.highlightedText}>ou vers le haut </Text>
                            <Text>si tu es totalement en accord avec la proposition (super-like) !</Text>
                        </Text>
                        <Text style={{ marginTop: 7 }}>
                            <Text style={styles.highlightedText}>2.</Text>
                            <Text>
                                {' '}
                                Accède à tes résultats dans le deuxième onglet, et découvre avec quel groupe politique
                                tu es le plus en accord.
                            </Text>
                        </Text>
                        <Text style={{ marginTop: 7 }}>
                            <Text style={styles.highlightedText}>3.</Text>
                            <Text> Explore toutes</Text>
                            <Text style={styles.highlightedText}> les propositions des groupes </Text>
                            <Text>dans l&apos;onglet </Text>
                            <Text style={{ fontStyle: 'italic' }}>Explorer</Text>
                            <Text>, ainsi que des liens utiles sur l&apos;élection.</Text>
                        </Text>
                    </View>
                    <Text style={styles.howItWorks}>{'confidentialité'.toUpperCase()}</Text>
                    <View style={styles.textView}>
                        <Text>
                            <Text style={styles.highlightedText}> · Elyze ne collecte aucune donnée</Text>
                            <Text>
                                , même anonymisée. Tes réponses sont enregistrées uniquement sur ton téléphone et tu
                                peux les réinitialiser à tout moment.
                            </Text>
                        </Text>
                        <Text style={{ marginTop: 7 }}>
                            <Text style={styles.highlightedText}>
                                {' '}
                                · Les résultats ne sont pas une consigne de vote !
                            </Text>
                            <Text>
                                {' '}
                                Juste un moyen de t&apos;aider à mieux te repérer parmi les projets des différents
                                groupes politiques. Notre conseil : suis l&apos;actualité, lis les programmes et
                                multiplie les sources d&apos;information pour faire ton choix !
                            </Text>
                        </Text>
                    </View>
                    <Text style={styles.howItWorks}>{'résultats'.toUpperCase()}</Text>
                    <View style={styles.textView}>
                        <Text>
                            Tes résultats enregistrés sur cet appareil peuvent être réinitialisés en appuyant sur le
                            bouton ci-dessous.
                        </Text>
                        <TouchableOpacity style={styles.resetButton}>
                            <Text style={styles.resetButtonText}>Réinitialiser mes résultats</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.howItWorks}>{'bibliothèques open-source'.toUpperCase()}</Text>
                    <View style={styles.textView}>
                        <Text> · React Native Deck Swiper © Copyright 2018 Alexandre Brillant</Text>
                    </View>
                    <View style={styles.viewBottomText}>
                        <Text style={{ color: 'blue' }}>
                            <FontAwesome name='envelope-o' size={16} color='blue' /> Nous contacter / Signaler un
                            problème
                        </Text>
                        <Text style={{ color: 'blue' }}>
                            <SimpleLineIcons name='share-alt' size={16} color='blue' /> Mentions légales
                        </Text>
                        <Text style={{ color: 'blue' }}>
                            <SimpleLineIcons name='share-alt' size={16} color='blue' /> Conditions générales
                            d&apos;utilisation
                        </Text>
                        <Text style={{ marginTop: 10 }}>© 2022 Elyze App. Tous droits réservés</Text>
                        <Text>🇫🇷</Text>
                    </View>
                </ScrollView>
            </BottomSheetView>
        </BottomSheet>
    ) : (
        <View>
            <Text>No data</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    settingsTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    howItWorks: {
        color: '#ababab',
        paddingTop: 10,
        paddingBottom: 5,
    },
    textView: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    highlightedText: {
        fontWeight: 'bold',
    },
    resetButton: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f91d45',
        marginTop: 10,
        borderRadius: 10,
    },
    resetButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    viewBottomText: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SettingsTab;
