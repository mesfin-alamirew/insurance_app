import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import questionsRoute from './routes/questions.js';
import insurancesRoute from './routes/insurances.js';
import cookieparser from 'cookie-parser';
import cors from 'cors';
const app = express();
app.use(cors());

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB!');
  } catch (error) {
    throw error;
  }
};

//Middleware
app.use(cookieparser());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/questions', questionsRoute);
app.use('/api/insurances', insurancesRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log('Connected to backend!');
});
