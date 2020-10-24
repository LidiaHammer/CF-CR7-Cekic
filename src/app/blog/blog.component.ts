import { Component, OnInit } from '@angular/core';
import { blogsContent } from '../blogsContent';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogsContent = blogsContent;

  constructor() { }

  ngOnInit(): void {
  }

}
