import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class GifsService {
  private _TagHistory: string[] = [];
  private ApiKey: string = "MCIKbOaAxX8GFN70JBfvfUK9e0pa5wAF";

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

  SearchTag(tag: string) {
    if (tag.length === 0) return;
    this.OrganizedHistory(tag);
  }

}
