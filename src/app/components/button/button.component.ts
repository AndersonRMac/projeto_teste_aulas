import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({alias:'text', required:true})
  text:string = '';

  @Input({alias:'disabled', required:true})
  isDisabled:boolean = true;
}
