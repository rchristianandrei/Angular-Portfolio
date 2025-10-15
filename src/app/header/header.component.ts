import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  show = false;
}
