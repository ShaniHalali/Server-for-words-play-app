const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    learningLanguage: { type: String, required: true },
    difficulty: { type: String, required: true },
    totalScore: {type: Number, default: 0},
    numOfWrongAnswers: {type: Number, default: 0},
    NumOfCorrectAnswers: {type: Number, default: 0}
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
