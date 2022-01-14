import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {

  postId: any;
  post: any;
  postTitle: string;
  postContent: any;
  postImage: string;

  authorIvatar: string;
  authorName: string;

  clean2: string;
  clean1: any;

  constructor( private actRoute: ActivatedRoute, private api: ApiService, private sanitize: Sanitizer, private domSan: DomSanitizer ) { }

  ngOnInit() {
    this.postId = this.actRoute.snapshot.params.postId;
    console.log(this.postId);

    this.getData();
    // this.transform(this.postContent);

  }

  async getData() {
    this.api.getSinglePosts(this.postId).subscribe((e: any) => {
      this.post = e;
      this.postTitle = e.title.rendered;
      this.postContent = e.content.rendered;
      this.postImage = e.x_featured_media_medium;
      this.authorIvatar = e.x_gravatar;
      this.authorName = e.x_author;

      this.clean1 = this.domSan.bypassSecurityTrustHtml(this.postContent);
      // eslint-disable-next-line @typescript-eslint/naming-convention
    //  this.clean2 = DOMPurify.sanitize(this.postContent, {USE_PROFILES: {html: true}});
      console.log(this.clean1);
      console.log(this.clean2);

      console.log(this.post);
    });
  }

  async shareData()
  {
    await Share.share({
      title: this.postTitle,
      text: this.clean2,
      // url: 'http://ionicframework.com/',
      dialogTitle: 'Dapatkan aplikasi ini di google playstore. Gratis!',
    });
  }

  public transform(value) {

    // this.sanitize.sanitize(SecurityContext.HTML, value);
    return  console.log(value);


 }

}
