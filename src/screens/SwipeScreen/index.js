import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import BackgroundCircle from '../../components/Swipe/BackGroundCircle';
import LogoHeader from '../../components/Swipe/LogoHeader';
import SwipeCard from '../../components/Swipe/SwipeCard';
import LikeActionBar from '../../components/Swipe/LikeActionBar';
//import SwipeEndCard from '../../components/Swipe/SwipeEndCard';
import fakeData from '../../fakeData';
import themes from '../../themeData';
import FindOutMorePopup from '../../components/Swipe/FindOutMorePopup';

const SwipeScreen = () => {
    const data = fakeData;
    const themeData = themes;
    const [index, setIndex] = useState(0);

    const sheetRef = useRef(null);

    const swipeRef = useRef(null);

    const onSwiped = () => {
        setIndex(index === data.length - 1 ? 0 : index + 1);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
                <LogoHeader />
                <BackgroundCircle />
                <View style={styles.swipeView}>
                    <Swiper
                        ref={swipeRef}
                        cards={data}
                        cardIndex={index}
                        renderCard={(card) => <SwipeCard sheetRef={sheetRef} data={card} themeData={themeData} />}
                        onSwiped={onSwiped}
                        onSwipedAll={() => setIndex(0)}
                        stackSize={4}
                        animateOverlayLabelsOpacity
                        animateCardOpacity
                        infinite
                        backgroundColor='transparent'
                        overlayLabels={{
                            left: {
                                title: 'NON',
                                style: {
                                    label: {
                                        backgroundColor: 'red',
                                        color: 'white',
                                        fontSize: 24,
                                    },
                                    wrapper: {
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                        marginLeft: -25,
                                    },
                                },
                            },
                            right: {
                                title: 'OUI',
                                style: {
                                    label: {
                                        backgroundColor: 'green',
                                        color: 'white',
                                        fontSize: 24,
                                    },
                                    wrapper: {
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                        marginLeft: 25,
                                    },
                                },
                            },
                        }}
                    />
                </View>
                <View style={styles.likeView}>
                    <LikeActionBar swipeRef={swipeRef} />
                </View>
            </SafeAreaView>
            {data && index !== undefined && (
                <FindOutMorePopup data={data} index={index} sheetRef={sheetRef} themeData={themeData} />
            )}
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    swipeView: {
        flex: 5,
        zIndex: 2,
        top: -40,
    },
    likeView: {
        flex: 1,
        zIndex: 2,
    },
});

export default SwipeScreen;
