import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert('You have completed the quiz!');
    }
    // Reset for the next question
    setSelectedOptionIndex(null);
    setShowFeedback(false);
  };

  const handleOptionPress = (index: number) => {
    setSelectedOptionIndex(index);
    setShowFeedback(true);
  };

  const isOptionSelected = (index: number): boolean => {
    return index === selectedOptionIndex;
  };

  const renderOption = (option: Option, index: number) => {
    let backgroundColor = isOptionSelected(index) && showFeedback
      ? option.isCorrect ? 'green' : 'red'
      : '#f0f0f0'; // Default background color

    return (
      <TouchableOpacity
        key={index}
        style={[styles.optionButton, { backgroundColor }]}
        onPress={() => handleOptionPress(index)}
        disabled={showFeedback}
      >
        <Text style={styles.optionText}>{option.optionText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.codeContainer}>
        <ScrollView nestedScrollEnabled={true}>
          <Text style={styles.question}>{questions[currentQuestionIndex].questionText}</Text>
        </ScrollView>
      </View>
      <View style={styles.optionsContainer}>
        {questions[currentQuestionIndex].options.map(renderOption)}
      </View>
      {showFeedback && selectedOptionIndex !== null && (
        <Button
          title="Next"
          onPress={handleNextQuestion}
          color={questions[currentQuestionIndex].options[selectedOptionIndex].isCorrect ? 'green' : 'red'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  codeContainer: {
    maxHeight: 200, 
    width: '100%',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: 'black',
    color: 'limegreen',
    padding: 20,
    borderRadius: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#e7e7e7',
    padding: 15,
    margin: 5,
    width: '45%',
    borderRadius: 20,
    borderWidth: 1,
    flexBasis: '45%',
    borderColor: '#dcdcdc',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  optionText: {
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',
  },
});

export default QuizComponent;
