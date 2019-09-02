import { Directive, TemplateRef, ViewContainerRef, Input, HostListener } from '@angular/core';
@Directive({
  selector: '[appAsRepeat]'
})
export class AsRepeatDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input() set appAsRepeat(range: number) {
    if (range) {
      this.viewContainerRef.clear();
      for (let i = 1; i <= range; i++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          index : i
        });
      }
    }
  }
 
}
