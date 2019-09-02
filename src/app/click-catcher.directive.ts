import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClickCatcher]'
})
export class ClickCatcherDirective {
  @HostListener('click', ['$event.target.id']) onClick(id: any) {
    alert(`You clicked on ${id}`);
    this.color="green"
  } 
  @HostBinding('style.color') color:string;
}
