import mongoose from 'mongoose'

const connectToDB = () => {
    mongoose.connect('mongodb+srv://Vivi:password@1234@cluster0.5c9kk.mongodb.net/leaderboard?retryWrites=true&w=majority', { useNewUrlParser: true }).then(res => {
        console.log('CONNECTED');
    }).catch(err => {
        console.log(err);
    })
}

export default connectToDB