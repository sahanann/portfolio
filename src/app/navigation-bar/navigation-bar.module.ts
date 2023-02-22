import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavigationBarComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
