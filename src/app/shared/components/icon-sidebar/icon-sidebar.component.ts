import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'icon-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './icon-sidebar.component.html',
  styleUrl: './icon-sidebar.component.scss'
})
export class IconSidebarComponent {
  @Input() image: string = '../../../../../public/icons/home.svg';
}
