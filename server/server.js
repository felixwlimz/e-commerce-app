import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { connect } from 'mongoose';
import route from './route.js';


const app = express();
config();

app.use(cors());
app.use(express.json());
app.use(route);

const PORT = 8080

try {
    connect(process.env.URI);
     console.log('Connected to MongoDB Database');
 } catch (error) {
    console.log(error);
 }


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))