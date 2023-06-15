import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
/* Attribute directive has the selector in [] */
@Directive({ selector: '[setColor]' })
export class ColorDirective {

  /* A Property that will be used to accept data for the directive and this property will map itself to the selector */

  @Input('setColor')setColor:string;

 /* Inject Renderer2 and ElementRef that will be used to target to DOM element and also set its rendering
  These are resoloved by BrowserModule
 */
  constructor(private ele: ElementRef, private render:Renderer2) { }

  /* The Logic that will be used to defibne rendering */

  private applyColor(color:string):void {
     this.render.setStyle(this.ele.nativeElement, 'backgroundColor', color);
     console.log('====================================');
     console.log(this.ele.nativeElement);
     console.log('====================================');
  }

  /* Register events based on which the cplyCOlor will be executed */

  @HostListener('mouseenter')
  onmouseenter():void{
    console.log('enter');
    this.applyColor(this.setColor || 'yellow');
  }

  @HostListener('mouseleave')
  onmouseleave():void{
    this.applyColor('');
  }

}
