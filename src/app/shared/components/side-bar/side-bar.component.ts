import { Component } from '@angular/core';
import { SideButtonComponent } from '@components/side-button/side-button.component';
import { IconSidebarComponent } from '@components/icon-sidebar/icon-sidebar.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SideButtonComponent, IconSidebarComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss', '../side-button/side-button.component.scss', '../icon-sidebar/icon-sidebar.component.scss']
})
export class SideBarComponent {

}
