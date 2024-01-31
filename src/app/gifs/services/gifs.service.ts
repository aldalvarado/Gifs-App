import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class GifsService {
  private _TagHistory: string[] = [];

  get TagHistory() {
    return [...this._TagHistory];
  }

  SearchTag(tag: string) {
    this._TagHistory.unshift(tag);
  }

}
