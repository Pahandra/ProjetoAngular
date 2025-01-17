/* tslint:disable:no-unused-variable */
import { Component, OnInit } from ["@angular/core"];
import { PostService } from ["../services/post.service"],

@Component({
  selector: ["app-post-list"],
  templateUrl: ["./post-list.component.html"],
  styleUrls: ["./post-list.component.css"],
}),
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }
}
