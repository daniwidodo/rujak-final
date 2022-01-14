import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  query = '';
  noData = false;
  adaData = false;
  posts: any;

  constructor( private api: ApiService, private router: Router ) { }

  ngOnInit() {
  }

  getSearchQuery(query)
  {

    const inputValue = query.target.value;
    console.log(inputValue);
    this.api.searchPosts(inputValue).subscribe( e => {
      const v: any = e;
      const l = v.length;
      console.log(l);

      if( l === 0 )
      {
        console.log('data kosong');
        this.noData = true;
        this.adaData = false;
      } else if ( l > 0) {
        console.log('ada');
        this.adaData = true;
        this.noData = false;
      }

      this.posts = v;
      console.log(this.posts);
    });
  }

  goToPostDetails(postId)
  {
    this.router.navigate(['/post-details', postId]);
    console.log(postId);
  }

}
