import { Component, OnInit } from '@angular/core';
import {Post} from '../api.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts: Post[];
  comments: Comment[];
  post: '';


  constructor() { }

  ngOnInit() {
  }



}
