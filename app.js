import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDb from './db/connectDb.js';
import userRouter from './routes/userRouter.js';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5050

//middlewares 
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); 

//database connections
connectDb()


//Routes
app.use('/api/users' , userRouter)


app.listen(PORT , () =>{
    console.log(`App listening on port ${PORT}`);
})