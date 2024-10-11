import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'side-button',
  standalone: true,
  imports: [],
  templateUrl: './side-button.component.html',
  styleUrl: './side-button.component.scss'
})
export class SideButtonComponent {
  @Input() public text : string = "Button";
  
  
}
