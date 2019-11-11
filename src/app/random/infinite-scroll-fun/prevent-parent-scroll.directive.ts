import { Directive, Renderer2, ElementRef } from "@angular/core";

@Directive({
  selector: "[prevent-parent-scroll]"
})
export class PreventParentScrollDirective {
  constructor(elRef: ElementRef, renderer: Renderer2) {
    renderer.listen(elRef.nativeElement, "wheel", event => {
      const el = elRef.nativeElement;
      if ((el.scrollTop + el.offsetHeight >= el.scrollHeight &&
        event.deltaY > 0) ||
      (el.scrollTop === 0 && event.deltaY < 0)) {
        event.preventDefault();
        event.returnValue = false;
      }
    });
  }
}
