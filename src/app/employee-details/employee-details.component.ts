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
    //this.posts = this.ps.getPosts();
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
  }

  onDelete(id:String){
    console.log(id);
    
    this.ngOnInit();
    this.ps.deletePost(id).subscribe(); 
  }

}
