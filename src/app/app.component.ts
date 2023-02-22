import { Component, OnInit, Renderer2 } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private renderer: Renderer2, 
    private settings: SettingsService) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, this.settings.theme);
  }

  title = 'portfolio';
}
