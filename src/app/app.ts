import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuPage } from './features/menu/menu-page/menu-page';

@Component({
  selector: 'app-root',
  imports: [MenuPage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<app-menu-page />',
})
export class App {}
