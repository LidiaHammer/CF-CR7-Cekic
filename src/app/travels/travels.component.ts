import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  info = new FormGroup({
    destination: new FormControl('',Validators.required),
    startigDate: new FormControl('',Validators.required),
    endingDate: new FormControl('',Validators.required),
    HowMany:new FormControl('',Validators.required),
    maxPrice:new FormControl('',Validators.required),
  });


  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  if(this.info.valid){
    var a = this.info.value;
    console.log(a)
 }
  }
}
