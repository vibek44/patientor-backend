import express from 'express';
import patientService from '../services/patientService';
import getNewPatientEntry from '../utils';


const patientRouter=express.Router();

patientRouter.get('/',(_req,res)=>{
 res.send(patientService.getPatientData());
});

patientRouter.post('/',(req,res)=>{
  try {
    const newPatientEntry=getNewPatientEntry(req.body);
    const patientEntry=patientService.addPatient(newPatientEntry);
    res.json(patientEntry);
  } catch (error:unknown) {
    let errorMessage='something wrong:';
    if(error instanceof Error){
      errorMessage +=error.message;
    }
    res.sendStatus(400).send(errorMessage);
  }
 
});

export default patientRouter;


