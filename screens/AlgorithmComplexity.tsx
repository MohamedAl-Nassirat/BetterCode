import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, ScrollView } from 'react-native';
import QuizComponent from '../components/Quiz';

interface ComplexityOption {
  optionText: string;
  isCorrect: boolean;
}

interface ComplexityQuestion {
  questionText: string;
  options: ComplexityOption[];
}

const commonComplexities = [
  'O(1)',
  'O(n)',
  'O(n^2)',
  'O(n^3)',
  'O(log n)',
  'O(n log n)',
];

const AlgorithmComplexity: React.FC = () => {
  const [questions, setQuestions] = useState<ComplexityQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getComplexityQuestions = async () => {
      try {
        const response = await fetch('http://192.168.0.14:3000/complexity');
        const data = await response.json();
        // Transform the data into the format expected by QuizComponent
        const formattedQuestions: ComplexityQuestion[] = data.map((item: any) => {
          const correctOption = `Time: ${item.timeComplexity}`;
          const incorrectOptions = commonComplexities
            .filter(complexity => complexity !== item.timeComplexity)
            .sort(() => 0.5 - Math.random()) // Randomize the array
            .slice(0, 3) // Pick three random complexities
            .map(complexity => ({ optionText: `Time: ${complexity}`, isCorrect: false }));

          return {
            questionText: `Analyze the time complexity for this algorithm:\n${item.codeSample}`,
            options: [
              { optionText: correctOption, isCorrect: true },
              ...incorrectOptions,
            ].sort(() => 0.5 - Math.random()), // Shuffle the combined options
          };
        });
        setQuestions(formattedQuestions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getComplexityQuestions();
  }, []);

  return (
    <View style={styles.screenContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {questions.length > 0 ? (
            <QuizComponent questions={questions} />
          ) : (
            <Text>No complexity questions available.</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#282c34',
    padding: 20,
  },
  // Additional styles if needed
});

export default AlgorithmComplexity;
