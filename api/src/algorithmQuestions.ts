import mongoose, { Schema, Document } from 'mongoose';

interface IOption extends Document {
  optionText: string;
  isCorrect: boolean;
}

interface IAlgorithmQuestion extends Document {
  algorithmName: string;
  codeSample: string;
  timeComplexity: string;
  spaceComplexity: string;
}

const optionSchema: Schema = new Schema({
  optionText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }
});

const algorithmQuestionSchema: Schema = new Schema({
  algorithmName: { type: String, required: true },
  codeSample: { type: String, required: true },
  timeComplexity: { type: String, required: true },
  spaceComplexity: { type: String, required: true }
});

const AlgorithmQuestion = mongoose.model<IAlgorithmQuestion>('AlgorithmComplexity', algorithmQuestionSchema, 'algorithmcomplexity');
export default AlgorithmQuestion;
