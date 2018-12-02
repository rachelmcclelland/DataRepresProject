import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  details: any = [];

  constructor(private route:ActivatedRoute, private router:Router, private service:PostService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);

    //save the details of an employee with a certain ID into an array
    this.service.getDetails(this.route.snapshot.params['id']).subscribe(data => 
    {
      this.details = data;
    });
  }

  //used when the user clicks the update button
  onUpdatePost(form: NgForm)
  {
    this.service.updateEmployee(this.details._id, form.value.name, form.value.dob, form.value.address).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
