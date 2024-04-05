import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import QuizComponent from '../components/Quiz';

// Define the structure of each option in a question
interface Option {
  optionText: string;
  isCorrect: boolean;
}

// Define the structure of a question
interface Question {
  questionText: string;
  options: Option[];
}

const DSA: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch('http://192.168.0.14:3000/questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getQuestions();
  }, []);

  return (
    <View style={styles.screenContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text>This section will have various Data Structures and Algorithm questions to help you prepare for your interviews</Text>
          {questions.length > 0 ? (
            <QuizComponent questions={questions} />
          ) : (
            <Text>No questions available.</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DSA;
