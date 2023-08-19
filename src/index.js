import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const QuizApp = () => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
       <View style={styles.categoryContainer}>
           <TouchableOpacity style={styles.category} 
           onPress={() => navigation.navigate('Playground',{category: 'Geography'})}>
                <Text style={styles.categoryTitle}>Geography</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.category} 
           onPress={() => navigation.navigate('Playground',{category: 'Science'})}>
                <Text style={styles.categoryTitle}>Science</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.category} 
           onPress={() => navigation.navigate('Playground',{category: 'Science'})}>
                <Text style={styles.categoryTitle}>Facts about Jessey</Text>
           </TouchableOpacity>
       </View>
      </View>
    )
}

export default QuizApp

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    category: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 5, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'tomato'
    }
});
