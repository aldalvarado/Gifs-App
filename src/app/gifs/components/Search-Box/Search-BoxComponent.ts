import { Component, ElementRef, ViewChild } from '@angular/core';


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

  SearchTag ( ){
    const NewTag = this.TagInput.nativeElement.value
    console.log({ NewTag });
  }
}
