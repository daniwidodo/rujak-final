import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'https://panelrujak.bangturstudio.com/wp-json/wp/v2/';
  page = 1 ;

  constructor(private http: HttpClient) { }

  checkNewPosts()
  {
    return this.http.get( '' );
  }

  getNewPosts()
  {
    return this.http.get( this.endpoint + 'posts' + '?_embed');
  }

  getAllCategories()
  {
    return this.http.get( this.endpoint + 'categories');
  }

  searchPosts(query)
  {
    return this.http.get( this.endpoint + 'search' + '?subtype=post&_embed' + '&'  + 'search=' + query );
  }

  getSinglePosts(id)
  {
    return this.http.get( this.endpoint + 'posts' + '/' + id);
  }
}
