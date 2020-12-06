import express from 'express'
import 'dotenv/config.js'
import connectToDB from './db.js'
import leaderboardModel from './models/leaderboardSchema.js'

const app = express()

const router = express.Router()

//http://127.0.0.1:27016/api/v1/GPG230/setLeaderboard
router.get('/setLeaderboard', (req, res) => {
    //const leaderboard = new leaderboardModel({ username: 'バイブルマン', score: 5, highScore: 10, gameMode: '1v1 fall guys', timeCompleted: 65 });
    const leaderboard = new leaderboardModel({ username: 'Vivi2', score: 1, highScore: 2, gameMode: '1v1 fall guys', timeCompleted: 90 });

    leaderboard.save().then(leaderboardRes => {
        res.send('Success');
        console.log(leaderboardRes);
    }).catch(err => {
        console.log(err);
    })
})

router.get('/getAllLeaderboard', (req, res) => {
    leaderboardModel.find().lean().then(leaderboardRes => {
        res.send(leaderboardRes);
        console.log(leaderboardRes);
    }).catch(err => {
        console.log(err);
    })
})

router.get('/getLeaderboardByID/:id', (req, res) => {
    leaderboardModel.findById(req.params.id).lean().then(leaderboardRes => {
        res.send(leaderboardRes);
        console.log(leaderboardRes);
    }).catch(err => {
        console.log(err);
    })
})

router.get('/getLeaderboardByUsername/:username', (req, res) => {
    leaderboardModel.findOne({ username: req.params.username }).lean().then(leaderboardRes => {
        res.send(leaderboardRes);
        console.log(leaderboardRes);
    }).catch(err => {
        console.log(err);
    })
})

app.use('/api/v1/GPG230', router)
/*app.use('/', (req, res) => {
    res.send('HOME PAGE')
})*/

connectToDB()

app.listen(8080, () => {
    console.log('Hello')
})