import mongoose from 'mongoose';

const { schema } = mongoose;

const QuestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  choices: [
    {
      name: {
        type: String,
      },
      controlType: {
        type: String,
      },

      options: [
        {
          optionText: {
            type: String,
          },
        },
      ],
    },
  ],
  btnNext: {
    type: Boolean,
  },
});

export default mongoose.model('Question', QuestionSchema);
