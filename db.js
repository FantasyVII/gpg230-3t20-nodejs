import mongoose from 'mongoose'

const connectToDB = () => {
    mongoose.connect(process.env.LEADERBOARD_DB_URL, { useNewUrlParser: true }).then(res => {
        console.log('CONNECTED');
    }).catch(err => {
        console.log(err);
    })
}

export default connectToDB