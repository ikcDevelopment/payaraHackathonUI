import { Injectable } from '@angular/core';
import { TypeOfMemberInterface } from '../models/type-of-member-interface';

@Injectable({
  providedIn: 'root'
})
export class TypeOfMemberService {

    types: TypeOfMemberInterface[]=[
        {name:'Attending_physician',description:'attending physician'},
        {name:'Dietitians',description:'dietitians'},
        {name:'Doctor',description:'doctor'},
        {name:'Interpreters',description:'interpreters'},
        {name:'Intern',description:'intern'},
        {name:'Nurse',description:'nurse'},
        {name:'Occupational_therapists',description:'occupational therapists'},
        {name:'Patient_advocate',description:'patient advocate'},
        {name:'Pharmacists',description:'pharmacists'},
        {name:'Physical_therapists',description:'physical therapists'},
        {name:'Resident',description:'resident'},
        {name:'Social_workers',description:'Social workers'},
        {name:'Speech_pathologists',description:'peech pathologists'},
        {name:'Student',description:'student'},
        {name:'Technicians',description:'technicians'}
    ];

    constructor() { }
}
