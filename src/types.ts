
export interface Diagnosis{
  code:string;
  name:string;
  latin?:string
}

export enum Gender{
  Male='male',
  Female='female' ,
  Other='other'
} 
// eslint-disable-next-line @typescript-eslint/no-empty-interface

export interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface HospitalEntry extends BaseEntry{
  type:"Hospital";
  discharge:{
    date:string;
    criteria:string;
  }
}
interface OccupationalHealthcareEntry extends BaseEntry{
  type:"OccupationalHealthcare";
  employerName:string;
  sickLeave?:{
    startDate:string;
    endDate:string;
  }
}

export type Entry=HealthCheckEntry | HospitalEntry | OccupationalHealthcareEntry;

export interface Patient {
  id:string;
  name:string;
  dateOfBirth?:string;
  ssn:string;
  gender:Gender;
  occupation:string;
  entries:Entry[];
}

export type NewPatient=Omit<Patient, 'id' >;
export type NonSensitiveData=Omit<Patient,'ssn'|'entries'>;