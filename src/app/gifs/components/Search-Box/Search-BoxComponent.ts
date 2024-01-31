import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
  <h5>Buscar</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar Gifs"
  (keyup.enter)="SearchTag()"
  #txtTagInput>`
})

export class SearchBoxComponent {
  @ViewChild("txtTagInput")
  public TagInput!: ElementRef<HTMLInputElement>;

  constructor (private gifsService: GifsService) {}

  SearchTag ( ){
    const NewTag = this.TagInput.nativeElement.value
    this.gifsService.SearchTag(NewTag);
    this.TagInput.nativeElement.value="";
  }
}
