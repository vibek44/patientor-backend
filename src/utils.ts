import { NewPatient,Gender } from "./types";


const isString=(param:unknown):param is string=>{
   return typeof param==='string';
};

const isDate=(dateOfBirth:string):boolean=>{
  return Boolean(Date.parse(dateOfBirth));
};

const isGender=(param:string):param is Gender=>{
  return Object.values(Gender).map(v=>v.toString()).includes(param);
};

const parseName=(name:unknown):string=>{
  if(!name || !isString(name)){
    throw new Error('Incorrect name field');
  }
  return name;
};

const parseDateOfBirth=(dateOfBirth:unknown):string=>{
  if (!dateOfBirth || !isString(dateOfBirth)|| !isDate(dateOfBirth)){
    throw new Error('Incorrect or missing date field');
  }
  return dateOfBirth;
 
};

const parseSsn=(ssn:unknown):string=>{
  if(!ssn || !isString(ssn)){
    throw new Error('Incorrect ssn field');
  }
  return ssn;
};

const parseGender=(gender:unknown):Gender=>{
  if(!gender || !isString(gender) || !isGender(gender)){
    throw new Error('Incorrect gender!');
  }
  return gender;
};

const parseOccupation=(occupation:unknown):string=>{
  if(!occupation || !isString(occupation)){
    throw new Error('Incorrect occupation!');
  }
  return occupation;
};

const parseEntries=(entries:unknown):[]=>{
  /*if(entries && Array.isArray(entries) && entries.length===0){
   return [];
  }
  throw new Error('incorrect Entries');
  */

 if(!entries || !Array.isArray(entries)){
  throw new Error('incorrect Entries');
  
  }
  return [];
  
};

const getNewPatientEntry=(entry:unknown):NewPatient=>{
  if(!entry || typeof entry!=='object'){
    throw new Error('Incorrect or missing data');
  }
  if('name' in entry && 'ssn' in entry && 'dateOfBirth' in entry && 'gender' in entry && 'occupation' in entry && 'entries' in entry && 'entries' in entry ){
    const newEntry:NewPatient={
      name:parseName(entry.name),
      dateOfBirth:parseDateOfBirth(entry.dateOfBirth),
      ssn:parseSsn(entry.ssn),
      gender:parseGender(entry.gender),
      occupation:parseOccupation(entry.occupation),
      entries:parseEntries(entry.entries)
    };
    return newEntry;
  }

  throw new Error('Incorrect or fields missing');
    
};

export default getNewPatientEntry;