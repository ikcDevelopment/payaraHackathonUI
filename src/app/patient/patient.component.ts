import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITreeOptions, KEYS } from '@circlon/angular-tree-component';
import { ToastrService } from 'ngx-toastr';
import { PatientInterface } from '../models/patient-interface';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
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

  patientForm = new FormGroup({
    'fiscalId': new FormControl('', Validators.required),
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'personalId': new FormControl('', Validators.required),
    'smartPhone': new FormControl('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
    'homePhone': new FormControl('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
    'officePhone': new FormControl('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
    'email': new FormControl('', [Validators.required,Validators.email]),
    'bloodType': new FormControl('', Validators.required),
    'allergicTo': new FormControl('', Validators.required),
    'inEmergencyCallTo': new FormControl('', Validators.required),
    'inEmergencySmartPhone': new FormControl('',[Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
    'inEmergencyHomePhone': new FormControl('',[Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
    'inEmergencyOfficePhone': new FormControl('', [Validators.required, Validators.pattern(this.PHONE_PATTERN)]),
    'inEmergencyEmail': new FormControl('', [Validators.required,Validators.email]),
    'context': new FormControl('', [Validators.required,Validators.email]),
});

    constructor(
        private patientService: PatientService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
    }

    upLoadData(): void{
        if(this.patientForm.dirty){
            if(this.patientForm.controls.context.value == 'add'){
                this.patientService.insertPatient(this.buildBody()).subscribe(response => {
                    if(response.success){
                        if(response.status == 'ok') {
                            this.showMessage('success', response.message);
                            this.patientForm.controls.context.setValue('from_server');
                            this.patientForm.markAsPristine();
                        }else {
                            this.showMessage('error', response.message);
                        }
                    }else{
                        this.showMessage('error', response.message);
                    }
                })
            }else{
                this.patientService.updatePatient(this.buildBody()).subscribe(response =>{
                    if(response.success){
                        if(response.status == 'ok') {
                            this.showMessage('success', response.message);
                            this.patientForm.controls.context.setValue('from_server');
                            this.patientForm.markAsPristine();
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

    private buildBody(): PatientInterface{
        const body:PatientInterface ={
          fiscalId: this.patientForm.controls.fiscalId.value!,
          firstName: this.patientForm.controls.firstName.value!,
          lastName: this.patientForm.controls.lastName.value!,
          personalId: this.patientForm.controls.personalId.value!,
          smartPhone: this.patientForm.controls.smartPhone.value!,
          homePhone: this.patientForm.controls.homePhone.value!,
          officeHome: this.patientForm.controls.officePhone.value!,
          email: this.patientForm.controls.email.value!,
          bloodType: this.patientForm.controls.bloodType.value!,
          allergicTo: this.patientForm.controls.allergicTo.value!,
          inEmergencyCallTo: this.patientForm.controls.inEmergencyCallTo.value!,
          inEmergencySmartPhone: this.patientForm.controls.inEmergencySmartPhone.value!,
          inEmergencyHomePhone: this.patientForm.controls.inEmergencyHomePhone.value!,
          inEmergencyOfficeHome: this.patientForm.controls.inEmergencyOfficePhone.value!,
          inEmergencyEmail: this.patientForm.controls.inEmergencyEmail.value!
        };
        return body;
    }

    deleteData(): void{
        this.patientService.deletePatient(this.patientForm.controls.fiscalId.value!).subscribe(response =>{
            if(response.success){
                if(response.status == 'ok') {
                    this.showMessage('success', response.message);
                    this.resetPatient();
                }else {
                    this.showMessage('error', response.message);
                }
            }else{
                this.showMessage('error', response.message);
            }
        });
    }

    getPatient(fiscalId: string){
        this.patientService.getPatient(fiscalId).subscribe(response=>{
            if(response.success){
                if(response.status == 'ok') {
                    this.showMessage('success', response.message);
                    this.setValues(response.patient);
                }else {
                    this.showMessage('error', response.message);
                }
            }else{
                this.showMessage('error', response.message);
            }
        });
    }

    private showMessage(typeOfMessage: string, message:string){
        if(typeOfMessage == 'success'){
            this.toastr.success(`${message}`, 'Cuentas contables', {progressBar: false, enableHtml: true});
        }else{
            this.toastr.error(`${message}`, 'Cuentas contables', {progressBar: false, enableHtml: true});
        }
    }

    resetPatient(){
        this.patientForm.reset();
        this.resetInitValues();
    }

    private resetInitValues(){
        this.deleteBtnIsHidden = true;
        this.newBtnIsHidden = true;

        this.patientForm.controls.fiscalId.setValue(''),
        this.patientForm.controls.firstName.setValue(''),
        this.patientForm.controls.lastName.setValue(''),
        this.patientForm.controls.personalId.setValue(''),
        this.patientForm.controls.smartPhone.setValue(''),
        this.patientForm.controls.homePhone.setValue(''),
        this.patientForm.controls.officePhone.setValue(''),
        this.patientForm.controls.email.setValue(''),
        this.patientForm.controls.bloodType.setValue(''),
        this.patientForm.controls.allergicTo.setValue(''),
        this.patientForm.controls.inEmergencyCallTo.setValue(''),
        this.patientForm.controls.inEmergencySmartPhone.setValue(''),
        this.patientForm.controls.inEmergencyHomePhone.setValue(''),
        this.patientForm.controls.inEmergencyOfficePhone.setValue(''),
        this.patientForm.controls.inEmergencyEmail.setValue('')
    }

    private setValues(values: PatientInterface){
        this.patientForm.controls.fiscalId.setValue(values.fiscalId);
        this.patientForm.controls.firstName.setValue(values.firstName);
        this.patientForm.controls.lastName.setValue(values.lastName);
        this.patientForm.controls.personalId.setValue(values.personalId);
        this.patientForm.controls.smartPhone.setValue(values.smartPhone);
        this.patientForm.controls.homePhone.setValue(values.homePhone);
        this.patientForm.controls.officePhone.setValue(values.officeHome);
        this.patientForm.controls.email.setValue(values.email);
        this.patientForm.controls.bloodType.setValue(values.bloodType);
        this.patientForm.controls.allergicTo.setValue(values.allergicTo);
        this.patientForm.controls.inEmergencyCallTo.setValue(values.inEmergencyCallTo);
        this.patientForm.controls.inEmergencySmartPhone.setValue(values.inEmergencySmartPhone);
        this.patientForm.controls.inEmergencyHomePhone.setValue(values.inEmergencyHomePhone);
        this.patientForm.controls.inEmergencyOfficePhone.setValue(values.inEmergencyOfficeHome);
        this.patientForm.controls.inEmergencyEmail.setValue(values.inEmergencyEmail);
    }

}
