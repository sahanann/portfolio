import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    FormsModule
  ]
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
