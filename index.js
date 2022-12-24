import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import ClientRoute from './routes/Client.js'
import AuthRoute from './routes/Auth.js'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors())
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('db connecerd')
})

app.use('/api/auth', AuthRoute)
app.use('/api/client', ClientRoute)

console.log(mongoose.Types)

app.listen(PORT, () => {
    console.log("backedn is running")
})
