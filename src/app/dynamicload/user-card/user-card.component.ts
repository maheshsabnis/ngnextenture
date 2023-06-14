import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IdComponent } from '../id/id.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, AfterViewInit {
  /* The ViewChild is used when the component is child but
     you do not want to raise any change on the child for
     change in parent
  */
  @ViewChild('id', { read: ViewContainerRef }) view: ViewContainerRef;
  @ViewChild('id2', { read: ViewContainerRef }) view2: ViewContainerRef;

  toggleView:boolean;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef
  ) {
      this.toggleView = true;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    /* Component Facytory
      this factory returns the IdComponent
    */
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(IdComponent);
      // Provide an instance of the Component
      // to the ViewChild that is ViewContainerRef
      // so that it can be attached in it
    let componentRef: ComponentRef<IdComponent> =
      this.view.createComponent(componentFactory);

    componentRef.instance.backgroundColor = 'red';
    componentRef.instance.foregroundColor = 'white';
    componentRef.instance.fontWeight = 'bold';

    //this.instantiateWithoutFactory();
   /* Hay DOM You are Changed */
    this.cdRef.detectChanges();
  }

  instantiateWithoutFactory(): void {
    const componentRef = this.view2.createComponent(IdComponent);

    componentRef.instance.backgroundColor = 'yellow';
    componentRef.instance.foregroundColor = 'red';
    componentRef.instance.fontWeight = 'normal';


  }

  toggle():void {
    if(this.toggleView){
      this.instantiateWithoutFactory();
      this.toggleView = false;
    } else {
      this.toggleView = true;

    }
  }
}
