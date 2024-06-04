import diagnosisData from '../../data/diagnoses';
import patientData from '../../data/patients';
import { Diagnosis,NonSensitiveData,NewPatient,Patient } from '../types';
import { v1 as uuid } from 'uuid';

const getDiagnosisData=():Diagnosis[]=>{
return diagnosisData;
};

const getPatientData=():NonSensitiveData[]=>{
  return patientData.map(({id,name,dateOfBirth,gender,occupation})=>({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
   
  }));
};

const getPatientDetail=(patientId:string):Patient=>{
  const result= patientData.find((p)=>p.id===patientId);
  if(result){
    return result;
  }
  throw new Error('patient not found');

};

const addPatient=(newPatientEntry:NewPatient):Patient=>{
  const patient:Patient={
    id:uuid(),
    ...newPatientEntry
   
  };
  patientData.push(patient);
  return patient;
};


export default {
  getDiagnosisData,
  getPatientData,
  addPatient,
  getPatientDetail
};