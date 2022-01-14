import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  posts: any;
  featuredImage: any;
  noImage = '/assets/no-image.svg';
  testvar: any;

  constructor( private api: ApiService, private router: Router ) { }

  ngOnInit(){
    this.api.getNewPosts().subscribe(
      posts => {
        console.log(posts);

        this.posts = posts;
        // eslint-disable-next-line no-underscore-dangle
        this.featuredImage = this.posts[0].x_featured_media_medium;

        console.log(this.featuredImage);
        // [1]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url
      }
    );
  }

  goToPostDetails(postId)
  {
    this.router.navigate(['/post-details', postId]);
    console.log(postId);
  }

}
