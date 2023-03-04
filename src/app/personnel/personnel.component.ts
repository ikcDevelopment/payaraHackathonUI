import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITreeOptions, KEYS } from '@circlon/angular-tree-component';
import { SpecialityInterface } from '../models/speciality-interface';
import { TypeOfMemberInterface } from '../models/type-of-member-interface';
import { SpecialityServiceService } from '../services/speciality-service.service';
import { TypeOfMemberService } from '../services/type-of-member.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
    treeTitle='';
    subtitle='';
    deleteBtnIsHidden: boolean = true;
    newBtnIsHidden: boolean = true;
    nodes = [];
    treeIconClass: string = 'i-Library';
    mySpace:string = '  ';
    dataTreeOptions: ITreeOptions = {

    actionMapping: {
        mouse:{
            dblClick:(_tree: any, _node: any, $event: any) =>{
            console.log(_node);
            console.log(_node.data.name);
            }
        },
        keys:{
            [KEYS.ENTER]: (tree: any, node: any, $event: any) => {
            console.log(node);
            console.log(node.data.name);
            }
        },
        scrollContainer: document.documentElement
        }
    };

    PHONE_PATTERN = /^\d{10}$/;

    employeeForm = new FormGroup({
        'fiscalId': new FormControl('', Validators.required),
        'firstName': new FormControl('', Validators.required),
        'lastName': new FormControl('', Validators.required),
        'personalId': new FormControl('', Validators.required),
        'smartPhone': new FormControl('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
        'homePhone': new FormControl('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
        'officePhone': new FormControl('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
        'email': new FormControl('', [Validators.required,Validators.email]),
        'typeOfMember': new FormControl('', Validators.required),
        'speciality': new FormControl('', Validators.required)
    });

    typeOfMembers!:TypeOfMemberInterface[];
    speciallyties!:SpecialityInterface[];


    constructor(
        private typeService:TypeOfMemberService,
        private speciallyService: SpecialityServiceService
        ) { }

    ngOnInit(): void {
        this.speciallyties = this.speciallyService.speciallytis;
        this.typeOfMembers = this.typeService.types;
    }

    upLoadData(): void{}

  deleteData(): void{}

  resetPatient(): void{}


}
