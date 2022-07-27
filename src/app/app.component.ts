import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <p>app-root-shell</p>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
