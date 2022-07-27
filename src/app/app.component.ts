import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  styles: [`a { margin-right: 1rem }`],
  template: `
    <p>app-root-shell</p>
    <a [routerLink]="['lazy']">to lazy (shell internal)</a>
    <a [routerLink]="['mfe1']">to mfe1 (external)</a>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
