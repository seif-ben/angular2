import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  @HostListener('click')
  onClick() {
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.isOpen = false;
  }

  @HostBinding('class.open')
  get setOpen() {
    return this.isOpen;
  }

  isOpen: boolean = false;

}
