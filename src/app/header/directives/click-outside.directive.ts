import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutsideEvent = new EventEmitter<void>();
  private readonly el = inject(ElementRef);

  @HostListener('document:click', ['$event.target']) onClick(
    target: HTMLElement
  ): void {
    const isClickedInside: boolean = this.el.nativeElement.contains(target);
    if (!isClickedInside) {
      console.log(1);
      this.clickOutsideEvent.emit();
    }
  }
}
