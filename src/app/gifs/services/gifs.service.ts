import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  private _TagHistory: string[] = [];
  private ApiKey: string = "MCIKbOaAxX8GFN70JBfvfUK9e0pa5wAF";

  constructor( private http: HttpClient ) {}

  get TagHistory() {
    return [...this._TagHistory];
  }

  private OrganizedHistory (tag: string) {
    tag= tag.toLowerCase();

    if (this._TagHistory.includes(tag)) {
      this._TagHistory = this._TagHistory.filter((OldTag) => OldTag !== tag)
    }

    this._TagHistory.unshift(tag);

    this._TagHistory = this.TagHistory.splice(0,10);

  }

  SearchTag(tag: string): void {
    if (tag.length === 0) return;
    this.OrganizedHistory(tag);
    this.http.get("https://api.giphy.com/v1/gifs/search?api_key=MCIKbOaAxX8GFN70JBfvfUK9e0pa5wAF&q=Valorant&limit=10")
    .subscribe( resp => { console.log(resp) } );
    console.log(this.ApiKey);
  }

}
