import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { firebase } from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Playground = ({ route }) => {

    const [questions, setQuestion] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(0)
    const [showResults, setShowResults] = useState(false);

    const { category } = route.params
    useEffect(() => {
        getQuestions()
        console.log("Fetching questions...");
    }, [])

    const getQuestions = async () => {
        setSelectedOptions({});
        setShowResults(false);
        const db = firebase.firestore();
        const questionRef = db.collection('testQuestions');
        const snapshot = await questionRef.where('category', '==', category).get();
        if (snapshot.empty) {
            console.log('No matching documents...');
            return;
        }
        const allQuestions = snapshot.docs.map(doc => doc.data());
        const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
        setQuestion(shuffleQuestions.slice(0,10));
    };

    const handleOptionsSelect = (questionIndex, Option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: Option,
        });
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((questions, index) => {
            if (selectedOptions[index] === questions.correctOption) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setShowResults(true);
    }
    
      
    return (
      <View style={styles.container}>
        <FlatList
            data={questions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>
                        {item.question}
                    </Text>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions[index] === 1 && styles.selectedOptions,
                            showResults && item.correctOption === 1 && styles.correctOption,
                            showResults && selectedOptions[index] === 1 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                        ]}
                        onPress={() => handleOptionsSelect(index, 1)}
                        disabled={showResults}
                    >
                        <Text>{item.option1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions[index] === 2 && styles.selectedOptions,
                            showResults && item.correctOption === 2 && styles.correctOption,
                            showResults && selectedOptions[index] === 2 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                        ]}
                        onPress={() => handleOptionsSelect(index, 2)}
                        disabled={showResults}
                    >
                        <Text>{item.option2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions[index] === 3 && styles.selectedOptions,
                            showResults && item.correctOption === 3 && styles.correctOption,
                            showResults && selectedOptions[index] === 3 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                        ]}
                        onPress={() => handleOptionsSelect(index, 3)}
                        disabled={showResults}
                    >
                        <Text>{item.option3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions[index] === 4 && styles.selectedOptions,
                            showResults && item.correctOption === 4 && styles.correctOption,
                            showResults && selectedOptions[index] === 4 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                        ]}
                        onPress={() => handleOptionsSelect(index, 4)}
                        disabled={showResults}
                    >
                        <Text>{item.option4}</Text>
                    </TouchableOpacity>
                   
                </View>
            )}
        />

        <TouchableOpacity 
            style={styles.submitbtn}
            onPress={handleSubmit}
            disabled={showResults}
        >
            <Text style={styles.submitbtnText}>Submit</Text>

        </TouchableOpacity>
        { showResults && (
                        <View style={styles.result}>
                            <Text style={styles.resultText}>You Scored {score} out of {questions.length}</Text>
                            <TouchableOpacity
                                style={styles.tryAgainButon}
                                onPress={getQuestions}
                            >
                                <Text style={styles.tryAgainText}>Try Again</Text>
                            </TouchableOpacity>
                        </View>
                    )}

      </View>
    )
}

export default Playground

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginBottom: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    option: {
        backgroundColor: '#eee',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    selectedOptions: {
        backgroundColor: '#949494'
    },
    correctOption: {
        backgroundColor: 'green',
    },
    wrongOption: {
        backgroundColor: 'red',
    },
    submitbtn: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    submitbtnText:{
        color: '#fff',
        fontSize: 20
    },
    result: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    tryAgainButon: {
        backgroundColor: 'tomato',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    tryAgainText: {
        color: '#fff',
        fontSize: 20,
    }

});
