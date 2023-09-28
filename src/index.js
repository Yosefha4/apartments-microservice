import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import apartsRoute from './routes/apartRoute.js';

dotenv.config();

const app = express()

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5057;

app.use("/aparts",apartsRoute)

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Apartments Service listening on port ${port}`)
})

export {app} ;