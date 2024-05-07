import diagnosisData from '../../data/diagnoses';
import patientData from '../../data/patients';
import { Diagnosis,NonSensitiveData } from '../types';



const getDiagnosisData=():Diagnosis[]=>{
return diagnosisData;
};

const getPatientData=():NonSensitiveData[]=>{
   return patientData.map(({id,name,dateOfBirth,gender,occupation})=>({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
   }));
};

export default {
  getDiagnosisData,
  getPatientData
};