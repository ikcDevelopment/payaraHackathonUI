import { Injectable } from '@angular/core';
import { SpecialityInterface } from '../models/speciality-interface';

@Injectable({
  providedIn: 'root'
})
export class SpecialityServiceService {
    speciallytis:SpecialityInterface[]=[
        {name:'Allergists',description:'allergists'},
        {name:'Immunologists',description:'immunologists'},
        {name:'Anesthesiologists',description:'anesthesiologists'},
        {name:'Cardiologists',description:'cardiologists'},
        {name:'Colon_and_Rectal_Surgeons',description:'colon and rectal surgeons'},
        {name:'Critical_Care_Medicine_Specialists',description:'critical care medicine specialists'},
        {name:'Dermatologists',description:'dermatologists'},
        {name:'Endocrinologists',description:'endocrinologists'},
        {name:'Emergency_Medicine_Specialists',description:'emergency medicine specialists'},
        {name:'Family_physicians',description:'family physicians'},
        {name:'Gastroenterologists',description:'gastroenterologists'},
        {name:'Geriatric_MedicineSpecialists',description:'eriatric medicine specialists'},
        {name:'Hematologists',description:'hematologists'},
        {name:'Hospice_and_Palliative_Medicine_Specialists',description:'hospice and palliative medicine specialists'},
        {name:'Infectious_Disease_Specialists',description:'infectious disease specialists"),'},
        {name:'Internists',description:'internists'},
        {name:'Medical_Geneticists',description:'medical geneticists'},
        {name:'Nephrologists',description:'nephrologists'},
        {name:'Neurologists',description:'neurologists'},
        {name:'Obstetricians_and_Gynecologists',description:'obstetricians and Gynecologists'},
        {name:'Oncologists',description:''},
        {name:'Ophthalmologists',description:'ophthalmologists'},
        {name:'Osteopaths',description:'Osteopaths'},
        {name:'Otolaryngologists',description:'otolaryngologists'},
        {name:'Pathologists',description:'pathologists'},
        {name:'Pediatricians',description:'podiatrists'},
        {name:'Preventive_Medicine_Specialists',description:'Preventive Medicine Specialists'},
        {name:'Psychiatrists',description:'psychiatrists'},
        {name:'Pulmonologists',description:'pulmonologists'},
        {name:'Radiologists',description:'pulmonologists'},
        {name:'Radiologists',description:'radiologists'},
        {name:'Rheumatologists',description:'Rheumatologists'},
        {name:'Sleep_Medicine_Specialists',description:'sleep medicine specialists'},
        {name:'Sports_Medicine_Specialists',description:'sports medicine specialists'},
        {name:'General_Surgeons',description:'general surgeons'},
        {name:'Urologists',description:'urologists'}
    ]

    constructor() { }
}
