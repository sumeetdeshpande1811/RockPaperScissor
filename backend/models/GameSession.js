const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  playerMove: { type: String, required: true },
  computerMove: { type: String, required: true },
  result: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const GameSession = mongoose.model('GameSession', gameSchema);

module.exports = GameSession;
