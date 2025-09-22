import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ThemeToggleComponent, IntroductionComponent, GalleryComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-portfolio';
}
