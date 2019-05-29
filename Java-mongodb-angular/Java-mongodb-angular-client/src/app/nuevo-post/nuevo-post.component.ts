import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  public nombre;
  public post;

  constructor(
    private postService : PostService,
    private router : Router
  ) {}

  ngOnInit() {
  }

  public enviar(){
    const post = {
      'nombre' : this.nombre,
      'texto' : this.post
    }

  this.postService.save(post)
    .subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/posts');
    });


  }
}