import { Inject, Injectable, OnInit, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initTheme();
  }

  theme: Theme = localStorage.getItem('theme') as Theme || 'light-theme';

  initTheme = () => document.body.classList.add(this.theme);

  switchTheme() {
    document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
    localStorage.setItem('theme', this.theme);
  }

  isDarkTheme() {
    return this.theme === 'dark-theme';
  }
}

export type Theme = 'light-theme' | 'dark-theme';