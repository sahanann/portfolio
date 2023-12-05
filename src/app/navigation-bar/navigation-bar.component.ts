import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import {MenuComponent} from "./menu/menu.component";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  standalone: true,
  imports: [
    MenuComponent,
    ThemeSwitcherComponent,
    MatIconModule,
    MatButtonModule
  ]
})
export class NavigationBarComponent {

  constructor(private settings: SettingsService) { }

  isMenuOpen = false;

  switchTheme() {
    this.settings.switchTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

}
