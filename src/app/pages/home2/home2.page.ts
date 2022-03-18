import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  // 10 most used tags
  tagsEndpoint = 'https://www.warungsatekamu.org/wp-json/wp/v2/tags?orderby=count&order=desc';

  constructor() { }

  ngOnInit() {
    console.log('get 10 most used tags from :',this.tagsEndpoint);
    console.log('get tags id and name:');
    console.log('get first indexed tags as homepage content :');

  }

}
