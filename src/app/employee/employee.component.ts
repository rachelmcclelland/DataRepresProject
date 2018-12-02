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
    
    //get the details of the ID that has been passed down
    this.service.getDetails(this.route.snapshot.params['id']).subscribe(data => 
      {
        this.details = data;
      }); 
  }

  onDelete(id:String){
    console.log(id);
    
    this.ngOnInit();
    //if the user clicks delete, the next line calls the deletePost method in the service
    this.service.deletePost(id).subscribe(); 
    //once the button is pressed, it will bring the user back to the list page
    this.router.navigate(['/list']);
  }

}
