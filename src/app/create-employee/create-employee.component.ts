import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {

    //calls the addDetails method in the service and passes down the informaion
    this.service.addDetails(form.value.name, form.value.dob, form.value.address).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
      
  }



}
