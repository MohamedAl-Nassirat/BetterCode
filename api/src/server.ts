import express, { Request, Response } from 'express';
import Question from './question'; 
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
  


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
