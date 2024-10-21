import express from 'express';
import morgan from 'morgan'
import indexRoutes from './routes/index';
import path from 'path';
import  cors  from "cors";

const app = express();


// seting  

app.set('port',process.env.Port || 4000);
app.use(cors());
// middleware

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api',indexRoutes)

// this folder for this applications will be used to store public files

app.use('/uploads',express.static(path.resolve('uploads')));

export default app;