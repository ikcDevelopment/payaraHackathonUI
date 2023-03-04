import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITreeOptions, KEYS } from '@circlon/angular-tree-component';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
    treeTitle='Medicines';
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

    medicineForm = new FormGroup({
        'medicineKey': new FormControl('', Validators.required),
        'medicineName': new FormControl('', Validators.required),
        'medicineSupplier': new FormControl('', Validators.required),
        'medicinePrice': new FormControl('', Validators.required)
    });


    constructor() { }

    ngOnInit(): void {
    }

    upLoadData(): void{}

    deleteData(): void{}

    resetPatient(): void{}

}
