import { Component, OnInit } from '@angular/core';
import {PostComponentComponent} from './post-component/post-component.component';

import { ApiService, Post, Comment } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recruitment';
  dataIsAvailable: boolean;
  posts: Post[];
  comments: Comment[];
  post: '';

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
  }

  onCommentClick(id) {
    this.post = id;
    this.apiService.getComments(this.post).subscribe(comments => {
      this.comments = comments;
      this.dataIsAvailable = true;
      // this.post =
    });
  }
}
