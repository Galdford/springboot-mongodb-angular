import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts;
  constructor(
    private service : PostService
  ) { }

  ngOnInit() {
    this.service.findAll()
    .subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

}
