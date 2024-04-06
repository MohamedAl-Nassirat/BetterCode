import express, { Request, Response } from 'express';
import Question from './question'; 
import AlgorithmQuestion from './algorithmQuestions'; 
// init express
const app = express();
const PORT = process.env.PORT || 3000;

//init monogdb
import mongoose from 'mongoose';
const mongoURI = 'mongodb://localhost:27017/BetterCodeDB';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
app.use(express.json());
app.get('/questions', async (req, res) => {
    const questions = await Question.find(); // Fetch all questions
    console.log(questions.length); 
    console.log(questions);
    res.json(questions); // Send the questions as a JSON response
  });
  
  app.get('/complexity', async (req, res) => {
    try {
        const algorithmQuestions = await AlgorithmQuestion.find();
        console.log("Number of documents fetched: ", algorithmQuestions.length);
        console.log(algorithmQuestions);
        res.json(algorithmQuestions);
    } catch (error: unknown) {
        // Perform type checking before accessing the error object
        if (error instanceof Error) {
            console.error("Error fetching complexity data: ", error.message);
            res.status(500).json({ message: error.message });
        } else {
            // If it's not an Error instance or doesn't have a message property
            console.error("An unexpected error occurred: ", error);
            res.status(500).json({ message: "An unexpected error occurred." });
        }
    }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
