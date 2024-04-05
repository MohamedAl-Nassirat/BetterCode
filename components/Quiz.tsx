import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface Option {
  optionText: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  options: Option[];
}

interface QuizComponentProps {
  questions: Question[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions }) => {


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleNextQuestion = () => {
    // declare nextQuest type
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setShowFeedback(false); // Reset feedback visibility for the next question
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      alert('Daily Quiz completed!'); // Placeholder completion action
    }
  };

  const renderOption = (option: Option, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.optionButton}
        onPress={() => handleOptionPress(option)}
      >
        <Text style={styles.optionText}>{option.optionText}</Text>
      </TouchableOpacity>
    );
  };

  const renderFeedback = () => {
    if (!showFeedback) return null; // No feedback to show

    if (selectedOption && selectedOption.isCorrect) {
      return <Text style={styles.correctFeedback}>Correct</Text>;
    } else {
      return <Text style={styles.incorrectFeedback}>Incorrect</Text>;
    }
  };

  const handleOptionPress = (option: Option) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestionIndex].questionText}</Text>
      <View style={styles.optionsContainer}>
        {questions[currentQuestionIndex].options.map(renderOption)}
      </View>
      {renderFeedback()}
      <Button title="Next" onPress={handleNextQuestion} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    width: '45%', // Takes up roughly half the container, minus margin
  },
  optionText: {
    textAlign: 'center',
  },
  correctFeedback: {
    padding: 10,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  incorrectFeedback: {
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default QuizComponent;
