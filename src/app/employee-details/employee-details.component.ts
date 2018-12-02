import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
  }



}
