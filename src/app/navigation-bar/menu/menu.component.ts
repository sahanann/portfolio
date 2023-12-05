import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
})
export class MenuComponent implements AfterViewInit {

  @ViewChild('buttonsDiv') menuButtonsDiv!: ElementRef;

  ngAfterViewInit() {
    const buttons = this.menuButtonsDiv.nativeElement.getElementsByClassName('menu-button');
    for (const button of buttons) {
      button.onmousemove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
      }
    }
    // this.menuButtonsDiv.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
    //   for (const button of buttons) {
    //     const rect = button.getBoundingClientRect(),
    //       x = e.clientX - rect.left,
    //       y = e.clientY - rect.top;

    //     button.style.setProperty('--mouse-x', `${x}px`);
    //     button.style.setProperty('--mouse-y', `${y}px`);
    //   }
    // });
  }


}
