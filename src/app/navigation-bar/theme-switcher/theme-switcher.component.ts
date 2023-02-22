import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {

  isDarkTheme = false;

  constructor(private settings: SettingsService) { 
    this.isDarkTheme = this.settings.isDarkTheme();
  }

  switchTheme(event: Event) {
    console.log(this.isDarkTheme);
    this.settings.switchTheme();
    this.isDarkTheme = this.settings.isDarkTheme();
  }

  // isDarkTheme() {
  //   return this.settings.isDarkTheme();
  // }

}
