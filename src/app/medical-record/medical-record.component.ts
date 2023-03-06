// TODO LIST OF doctors and patients to feed selects
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITreeOptions, KEYS } from '@circlon/angular-tree-component';
import { ToastrService } from 'ngx-toastr';
import { MedicalRecordInterface } from '../models/medical-record-interface';
import { MedicalRecordService } from '../services/medical-record.service';
import { KeysGeneratorService } from '../services/keys-generator.service';
import { AppointmentInterface } from '../models/appointment-interface';
import { LaboratoryAnalysis } from '../models/laboratory-analysis';
import { MedicalProcedureInterface } from '../models/medical-procedure-interface';
import { HospitalizationInterface } from '../models/hospitalization-interface';
import { HospitalRoomInterface } from '../models/hospital-room-interface';
import { PrescriptionInterface } from '../models/prescription-interface';
import { MedicineInterface } from '../models/medicine-interface';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
    doctors:any[]=[];
    patients:any[]=[];

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

    recordForm = new FormGroup({
        'recordKey': new FormControl('', Validators.required),
        'patientId': new FormControl('', Validators.required),
        'doctorId': new FormControl('', Validators.required),
        'additionalComments': new FormControl('', Validators.required),
        'context': new FormControl('', Validators.required),
    });

    constructor(
        private medicalRecordService: MedicalRecordService,
        private toastr: ToastrService,
        private keyGen: KeysGeneratorService
    ) { }

    ngOnInit(): void {
    }

    private showMessage(typeOfMessage: string, message:string){
        if(typeOfMessage == 'success'){
            this.toastr.success(`${message}`, 'Cuentas contables', {progressBar: false, enableHtml: true});
        }else{
            this.toastr.error(`${message}`, 'Cuentas contables', {progressBar: false, enableHtml: true});
        }
    }

    private buildBody():MedicalRecordInterface{
        const body:MedicalRecordInterface={
            recordKey: this.recordForm.controls.recordKey.value!,
            patientId: this.recordForm.controls.patientId.value!,
            doctorId: this.recordForm.controls.doctorId.value!,
            additionalComments: this.recordForm.controls.additionalComments.value!,
            appointments: []
        };

        return body;
    }

    /**
     *
     * @returns I need to design this area
     */
    private buildBodyAppointment():AppointmentInterface{
        const body:AppointmentInterface={
          appointmentKey: '',
          patientId: '',
          doctorId: '',
          symptoms: '',
          appointmentDate: '',
          symptomsStartedDate: '',
          appointmentDescription: '',
          analysisDone: [],
          prescriptions: [],
          procedures: [],
          hospitalizations: []
        };

        return body;
    }

    /**
     *
     * @returns I need to design this area
     */
    private buildBodyLab():LaboratoryAnalysis{
        const body:LaboratoryAnalysis={
          laboratoryKey: '',
          patientId: '',
          doctorId: '',
          analysis: ''
        };

        return body;
    }

     /**
     *
     * @returns I need to design this area
     */
     private buildBodyPrescription():PrescriptionInterface{
        const body:PrescriptionInterface={
          prescriptionKey: '',
          patientId: '',
          doctorId: '',
          prescriptionDate: '',
          medicine: this.buildBodyMedicine()
        };

        return body;
    }

    private buildBodyMedicine():MedicineInterface{
        const body:MedicineInterface={
          medicineKey: '',
          medicineName: '',
          medicineSupplier: '',
          medicinePrice: 0
        }
        return body;
    }

     /**
     *
     * @returns I need to design this area
     */
     private buildBodyMedicalProcedure():MedicalProcedureInterface{
        const body:MedicalProcedureInterface={
          procedureKey: '',
          patientId: '',
          primaryDoctorId: '',
          additionalComments: '',
          doctors: []
        }

        return body;
    }

     /**
     *
     * @returns I need to design this area
     */
     private buildBodyHospitalization():HospitalizationInterface{
        const body:HospitalizationInterface={
          hospitalizationKey: '',
          patientId: '',
          primaryDoctorId: '',
          description: '',
          hospitalizationDate: '',
          hospitalizationEnds: '',
          additionalComments: '',
          room: this.buildRoom()
        };

        return body;
    }

    /**
     * I need to design this area
     * @returns
     */
    private buildRoom():HospitalRoomInterface{
        const body:HospitalRoomInterface={
          roomKey: '',
          roomType: '',
          roomName: '',
          roomDescription: '',
          roomFee: 0
        };
        return body;
    }

    resetEmployee(): void{
        this.recordForm.reset();
        this.resetInitValues();
    }

    private resetInitValues(){
        this.deleteBtnIsHidden = true;
        this.newBtnIsHidden = true;

        this.recordForm.controls.additionalComments.setValue('');
        this.recordForm.controls.doctorId.setValue('');
        this.recordForm.controls.patientId.setValue('');
        this.recordForm.controls.recordKey.setValue(this.keyGen.getKey(
            55, 'abcdefghijklmnopqrstuvwxyz0123456789*#$@',
            true, true, false, false, true, true, true, false
          ));
        this.recordForm.controls.context.setValue('add');
    }

    private evalResponseJustMsg(response:any){
        if(response.success){
            if(response.status == 'ok') {
                this.showMessage('success', response.message);
            }else {
                this.showMessage('error', response.message);
            }
        }else{
            this.showMessage('error', response.message);
        }
    }

    upLoadData(){}

    deleteData(){}

    addMedicalRecord(){
        this.medicalRecordService.addMedicalRecord(this.buildBody()).subscribe(response => {
            this.evalResponseJustMsg(response);
        });
    }

    addAppointment(){
        this.medicalRecordService.addAppointment(this.buildBodyAppointment()).subscribe(response =>{
            this.evalResponseJustMsg(response);
        });
    }

    addLaboratoryAnalysis(appointmentKey: string){
        this.medicalRecordService.addLaboratoryAnalysis(this.buildBodyLab(), appointmentKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    addPrescription(appointmentKey: string){
        this.medicalRecordService.addPrescription(this.buildBodyPrescription(), appointmentKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    addMedicalProcedure(appointmentKey: string){
        this.medicalRecordService.addMedicalProcedure(this.buildBodyMedicalProcedure(), appointmentKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    addHospitalization(appointmentKey: string){
        this.medicalRecordService.addHospitalization(this.buildBodyHospitalization(), appointmentKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    updateMedicalRecord(recordKey: string){
        this.medicalRecordService.updateMedicalRecord(this.buildBody(), recordKey).subscribe(response=>{
            if(response.success){
                if(response.status == 'ok') {
                    this.showMessage('success', response.message);
                    this.recordForm.controls.context.setValue('from_server');
                }else {
                    this.showMessage('error', response.message);
                }
            }else{
                this.showMessage('error', response.message);
            }
        });
    }

    updateHospitalization(recordKey: string, appointmentKey: string){
        this.medicalRecordService.updateHospitalization(this.buildBodyHospitalization(),appointmentKey, recordKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    updateLaboratoryAnalysis(recordKey: string, appointmentKey: string){
        this.medicalRecordService.updateLaboratoryAnalysis(this.buildBodyLab(),appointmentKey,recordKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    updateMedicalProcedure(recordKey: string, appointmentKey: string){
        this.medicalRecordService.updateMedicalProcedure(this.buildBodyMedicalProcedure(),appointmentKey, recordKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        })
    }

    updatePrescription(recordKey: string, appointmentKey: string){
        this.medicalRecordService.updatePrescription(this.buildBodyPrescription(),recordKey, appointmentKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    deleteHospitalization(patienKey:string, recordKey: string, appointmentKey: string, hospitalizationKey: string){
        this.medicalRecordService.deleteHospitalization(patienKey, recordKey, appointmentKey, hospitalizationKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        })
    }

    deleteLaboratoryAnalysis(patienKey:string, recordKey: string, appointmentKey: string, labKey: string){
        this.medicalRecordService.deleteLaboratoryAnalysis(patienKey, recordKey, appointmentKey, labKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    deleteMedicalProcedure(patienKey:string, recordKey: string, appointmentKey: string, procedureKey: string){
        this.medicalRecordService.deleteMedicalProcedure(patienKey, recordKey, appointmentKey, procedureKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    deleteMedicalRecord(patienKey:string, recordKey: string){
        this.medicalRecordService.deleteMedicalRecord(patienKey, recordKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

    deletePrescription(patienKey:string, recordKey: string, appointmentKey: string, prescriptionKey: string){
        this.medicalRecordService.deletePrescription(patienKey, recordKey, appointmentKey, prescriptionKey).subscribe(response=>{
            this.evalResponseJustMsg(response);
        });
    }

}
