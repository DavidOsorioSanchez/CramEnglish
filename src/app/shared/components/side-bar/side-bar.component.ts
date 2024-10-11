import { Component } from '@angular/core';
import { SideButtonComponent } from '../side-button/side-button.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SideButtonComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss', '../side-button/side-button.component.scss']
})
export class SideBarComponent {

}
