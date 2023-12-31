import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: any }>('http://localhost:3000/api/posts')
    .pipe(map((postData) => {
      return postData.posts.map((post: { _id: string; title: string; content: string; }) => {
        return {
          id: post._id,
          title: post.title,
          content: post.content
        }
      });
    }))
    .subscribe((transformedPosts) => {
      this.posts = transformedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPost(id: string) {
    return this.http.get<{_id: string, title: string, content: string}>('http://localhost:3000/api/posts/'+id);
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      id: null,
      title: title,
      content: content
    }
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
          post.id = responseData.postId;
          this.posts.push(post);
          this.postsUpdated.next([...this.posts]);
      });
  }

  updatePost(postId: string, title: string, content: string) {
    const post: Post = {
      id: postId,
      title: title,
      content: content
    }
    this.http.put('http://localhost:3000/api/posts/'+postId, post)
      .subscribe((responseData) => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/'+postId)
      .subscribe(() => {
          this.posts = this.posts.filter(post => post.id !== postId);
          this.postsUpdated.next([...this.posts]);
      });
  }
}
