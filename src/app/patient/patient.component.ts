import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITreeOptions, KEYS } from '@circlon/angular-tree-component';

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
    'inEmergencyEmail': new FormControl('', [Validators.required,Validators.email])
});

  constructor() { }

  ngOnInit(): void {
  }

  upLoadData(): void{}

  deleteData(): void{}

  resetPatient(): void{}

}
