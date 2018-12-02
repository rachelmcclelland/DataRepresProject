import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }

  //add an employee to the database
  addDetails(name: string, dob: string, address: string): Observable<any> {
    const post: Post = {name: name, dob: dob, address: address};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  //delete the details about an employee with a certain ID
  deletePost(id:String): Observable<any>{
    return this.http.delete("http://localhost:8081/api/posts/" + id);
  }

  getDetails(id:String): Observable<any>{
    return this.http.get("http://localhost:8081/api/posts/" + id);
  }

  //update and save the new information about the employee
  updateEmployee(id:String, name:string, dob:string, address:string): Observable<any>{
    const post: Post = {name: name, dob: dob, address: address};
    return this.http.put("http://localhost:8081/api/posts/"+ id, post);
  }
}
