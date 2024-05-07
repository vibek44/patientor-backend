import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosisRouter';
import patientRouter from './routes/patientRouter';

const app=express();
app.use(cors());
app.use(express.json());


app.get('/api/ping',(_req,res)=>{
  res.send('hello all');
});

app.use('/api/diagnosis',diagnosisRouter);
app.use('/api/patients', patientRouter);

const PORT=3001;

app.listen(PORT,()=>{
  console.log(` app running on port ${PORT}`);
  
});