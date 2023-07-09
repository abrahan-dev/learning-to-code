import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSubcription: Subscription;

  constructor(public postService: PostService) {}

  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }

  ngOnDestroy(): void {
    this.postsSubcription.unsubscribe();
  }

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSubcription = this.postService.getPostsUpdatedListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
