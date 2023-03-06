import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITreeOptions, KEYS } from '@circlon/angular-tree-component';
import { ToastrService } from 'ngx-toastr';
import { PersonnelInterface } from '../models/personnel-interface';
import { DataTreeNodeUi } from '../models/responses/data-tree-node-ui';
import { SpecialityInterface } from '../models/speciality-interface';
import { TypeOfMemberInterface } from '../models/type-of-member-interface';

import { PersonnelService } from '../services/personnel.service';
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
    nodes:DataTreeNodeUi[] = [];
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
        'speciality': new FormControl('', Validators.required),
        'context': new FormControl('', Validators.required)
    });

    typeOfMembers!:TypeOfMemberInterface[];
    speciallyties!:SpecialityInterface[];


    constructor(
        private typeService:TypeOfMemberService,
        private speciallyService: SpecialityServiceService,
        private peronnelService: PersonnelService,
        private toastr: ToastrService
        ) { }

    ngOnInit(): void {
        this.speciallyties = this.speciallyService.speciallytis;
        this.typeOfMembers = this.typeService.types;
        console.log('init');
        this.peronnelService.getEmployeesTreeUi().subscribe(response=>{
          if(response.success){
            if(response.status == 'ok') {
                this.nodes = response.nodes;
            }else {
                this.showMessage('error', response.message);
            }
        }else{
            this.showMessage('error', response.message);
        }
        });
        console.log('init-fin');
    }

    private showMessage(typeOfMessage: string, message:string){
        if(typeOfMessage == 'success'){
            this.toastr.success(`${message}`, 'Cuentas contables', {progressBar: false, enableHtml: true});
        }else{
            this.toastr.error(`${message}`, 'Cuentas contables', {progressBar: false, enableHtml: true});
        }
    }

    upLoadData(): void{
        if(this.employeeForm.dirty){
            if(this.employeeForm.controls.context.value == 'add'){
                this.peronnelService.insertEmployee(this.buildBody()).subscribe(response => {
                    if(response.success){
                        if(response.status == 'ok') {
                            this.showMessage('success', response.message);
                            this.employeeForm.controls.context.setValue('from_server');
                            this.employeeForm.markAsPristine();
                        }else {
                            this.showMessage('error', response.message);
                        }
                    }else{
                        this.showMessage('error', response.message);
                    }
                })
            }else{
                this.peronnelService.updateEmployee(this.buildBody()).subscribe(response =>{
                    if(response.success){
                        if(response.status == 'ok') {
                            this.showMessage('success', response.message);
                            this.employeeForm.controls.context.setValue('from_server');
                            this.employeeForm.markAsPristine();
                        }else {
                            this.showMessage('error', response.message);
                        }
                    }else{
                        this.showMessage('error', response.message);
                    }
                })
            }
        }
    }

    deleteData(): void{
        this.peronnelService.deleteEmployee(this.employeeForm.controls.fiscalId.value!).subscribe(response =>{
            if(response.success){
                if(response.status == 'ok') {
                    this.showMessage('success', response.message);
                    this.resetEmployee();
                }else {
                    this.showMessage('error', response.message);
                }
            }else{
                this.showMessage('error', response.message);
            }
        });
    }

    getEmployee(){
        this.peronnelService.getEmployee(this.employeeForm.controls.fiscalId.value!).subscribe(response =>{
            if(response.success){
                if(response.status == 'ok') {
                    this.showMessage('success', response.message);
                    this.setValues(response.employee);
                }else {
                    this.showMessage('error', response.message);
                }
            }else{
                this.showMessage('error', response.message);
            }
        });
    }

	  resetEmployee(): void{
        this.employeeForm.reset();
        this.resetInitValues();
      }

    private buildBody():PersonnelInterface{
        const body: PersonnelInterface ={
          fiscalId: this.employeeForm.controls.fiscalId.value!,
          firstName: this.employeeForm.controls.firstName.value!,
          lastName: this.employeeForm.controls.lastName.value!,
          personalId: this.employeeForm.controls.personalId.value!,
          typeOfMember: this.employeeForm.controls.typeOfMember.value!,
          speciality: this.employeeForm.controls.speciality.value!,
          smartPhone: this.employeeForm.controls.smartPhone.value!,
          homePhone: this.employeeForm.controls.homePhone.value!,
          officeHome: this.employeeForm.controls.officePhone.value!,
          email: this.employeeForm.controls.email.value!
        };

        return body;
    }

    private resetInitValues(){
        this.deleteBtnIsHidden = true;
        this.newBtnIsHidden = true;

        this.employeeForm.controls.fiscalId.setValue('');
        this.employeeForm.controls.personalId.setValue('');
        this.employeeForm.controls.firstName.setValue('');
        this.employeeForm.controls.lastName.setValue('');
        this.employeeForm.controls.homePhone.setValue('');
        this.employeeForm.controls.officePhone.setValue('');
        this.employeeForm.controls.smartPhone.setValue('');
        this.employeeForm.controls.email.setValue('');
        this.employeeForm.controls.speciality.setValue('');
        this.employeeForm.controls.typeOfMember.setValue('');
    }

    private setValues(values: PersonnelInterface){
        this.employeeForm.controls.fiscalId.setValue(values.fiscalId);
        this.employeeForm.controls.personalId.setValue(values.personalId);
        this.employeeForm.controls.firstName.setValue(values.firstName);
        this.employeeForm.controls.lastName.setValue(values.lastName);
        this.employeeForm.controls.homePhone.setValue(values.homePhone);
        this.employeeForm.controls.officePhone.setValue(values.officeHome);
        this.employeeForm.controls.smartPhone.setValue(values.smartPhone);
        this.employeeForm.controls.email.setValue(values.email);
        this.employeeForm.controls.speciality.setValue(values.speciality);
        this.employeeForm.controls.typeOfMember.setValue(values.typeOfMember);
    }
}
