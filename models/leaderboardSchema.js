import mongoose from 'mongoose'

const leadboardSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    score: {
        type: Number,
    },
    highScore: {
        type: Number,
    },
    gameMode: {
        type: String,
    },
    timeCompleted: {
        type: Number,
    },
})

export default mongoose.model('Leaderboard', leadboardSchema)