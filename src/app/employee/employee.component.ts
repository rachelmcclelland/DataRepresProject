import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  details: any = [];

  constructor(private route:ActivatedRoute, private router:Router, private service:PostService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    
    this.service.getDetails(this.route.snapshot.params['id']).subscribe(data => 
      {
        this.details = data;
      }); 
  }

  onDelete(id:String){
    console.log(id);
    
    this.ngOnInit();
    this.service.deletePost(id).subscribe(); 
    this.router.navigate(['/list']);
  }

}
