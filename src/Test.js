import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)


  const quizData = [
    {
    question: 'What is the capital City of Malawi?',
    options: ['Zomba', 'Blantyre', 'Lilongwe', 'nsanje'],
    answer: 'Lilongwe'
    },
    {
    question: 'What is my middle name?',
    options: ['Jane', 'Jebebe', 'Rabecca', 'Beautiful'],
    answer: 'Rabecca' 
    }
  ]

  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if (answer == selectedAnswer){
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <View style={styles.container}>
      {showScore ? <View>
          <Text> {score} </Text>
          <TouchableOpacity style={styles.optionContainer} onPress={handleRestart}>
            <Text style={styles.resetButton}>Try Again</Text>
          </TouchableOpacity>
      </View>:  
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{ quizData[currentQuestion]?.question }</Text>
          {quizData[currentQuestion]?.options.map((item) => {
            return <TouchableOpacity onPress={()=> handleAnswer(item)} style={styles.optionContainer}>
              <Text style={styles.optionStyle}> {item} </Text>
            </TouchableOpacity>
          })}
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer:{
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  questionText: {
    fontSize: 24,
  },
  optionContainer:{
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
  },
  optionStyle: {
    color: 'green',
    padding: 5,
    alignSelf: 'center',
    fontSize: 20,
  },
  resetButton:{
    fontSize: 18,
    paddingHorizontal: 10,
  }

});
