import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

// Define the questions array
const dsaQuestions: Question[] = [
  {
    questionText: 'What is the time complexity of inserting an element into a binary search tree?',
    options: [
      { optionText: 'O(log n)', isCorrect: true },
      { optionText: 'O(n)', isCorrect: false },
      { optionText: 'O(n log n)', isCorrect: false },
      { optionText: 'O(n^2)', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the time complexity of finding an element in a binary search tree?',
    options: [
      { optionText: 'O(log n)', isCorrect: true },
      { optionText: 'O(n)', isCorrect: false },
      { optionText: 'O(n log n)', isCorrect: false },
      { optionText: 'O(n^2)', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the time complexity of deleting an element from a binary search tree?',
    options: [
      { optionText: 'O(log n)', isCorrect: true },
      { optionText: 'O(n)', isCorrect: false },
      { optionText: 'O(n log n)', isCorrect: false },
      { optionText: 'O(n^2)', isCorrect: false },
    ],
  },
];

// Define the DSA component
const DSA: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>This section will have various Data Structures and Algorithm questions to help you prepare for your interviews</Text>
      <QuizComponent questions={dsaQuestions} />
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
