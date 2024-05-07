import  express  from "express";
import patientService from "../services/patientService";

const diagnosisRouter=express.Router();

diagnosisRouter.get('/',(_req,res)=>{
  res.send(patientService.getDiagnosisData());
});


export default diagnosisRouter;

