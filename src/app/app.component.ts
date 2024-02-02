import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { Sidebar } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, GifsModule, Sidebar, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Giffs-App';
}
