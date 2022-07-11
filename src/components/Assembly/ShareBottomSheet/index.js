import React, { useMemo, useCallback } from 'react';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Feather } from '@expo/vector-icons';
import ShareDataView from '../ShareDataView';

const ShareBottomSheet = ({ sheetRef }) => {
    const snapPoints = useMemo(() => ['94%'], []);

    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />,
        [],
    );
    const onShare = async () => {
        try {
            const result = await Share.share({ message: 'Voici mes résultats avec Elyze!' });
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose
            onDismiss={() => {
                sheetRef?.current?.close();
            }}
            backgroundStyle={{ backgroundColor: 'white' }}
            borderRadius={10}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView style={styles.container}>
                <Text style={styles.title}>Partager mes résultats</Text>
                <ShareDataView />
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.shareResultsButton} onPress={onShare}>
                        <Feather name='share' size={20} color='white' />
                        <Text style={styles.shareResultsButtonText}>Partager mes résultats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            sheetRef.current?.close();
                        }}
                        style={styles.cancelButton}
                    >
                        <Text style={styles.cancelButtonText}>Annuler</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    buttons: {
        width: '90%',
        alignContent: 'center',
    },
    shareResultsButton: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f91d45',
    },
    shareResultsButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 6,
    },
    cancelButton: {
        marginTop: 10,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#f91d45',
        borderWidth: 2,
    },
    cancelButtonText: {
        color: '#f91d45',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ShareBottomSheet;
