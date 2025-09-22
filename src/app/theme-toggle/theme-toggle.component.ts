import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent implements OnInit {

  private toggleBtn: HTMLElement | null = null;
  private body = document.body;

  ngOnInit(): void {
    this.toggleBtn = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
      this.body.classList.add('dark-mode');
    }
  }

  toggleTheme() {
    if(!this.toggleBtn) return;

    this.body.classList.toggle('dark-mode');
    if (this.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
  }

  isDarkMode(){
    return this.body.classList.contains('dark-mode')
  }
}
