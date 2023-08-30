import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResultsPage = ({ route }) => {
    const navigation = useNavigation();
    const { score, totalQuestions } = route.params;

    const handleTryAgain = () => {
        // Navigate back to the Playground component to start the quiz again
        navigation.navigate('Playground');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>You Scored {score} out of {totalQuestions}</Text>
            <TouchableOpacity style={styles.tryAgainButton} onPress={handleTryAgain}>
                <Text style={styles.tryAgainText}>Try Again</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    tryAgainButton: {
        backgroundColor: 'tomato',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    tryAgainText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default ResultsPage;
