import mongoose, { Document, Schema } from 'mongoose';

interface IOption {
  optionText: string;
  isCorrect: boolean;
}

interface IQuestion extends Document {
  questionText: string;
  options: IOption[];
}

const questionSchema: Schema = new Schema({
  questionText: { type: String, required: true },
  options: [{ optionText: String, isCorrect: Boolean }]
});

const Question = mongoose.model<IQuestion>('Question', questionSchema);

export default Question;
