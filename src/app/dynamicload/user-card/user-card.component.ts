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
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(IdComponent);
    let componentRef: ComponentRef<IdComponent> =
      this.view.createComponent(componentFactory);

    componentRef.instance.backgroundColor = 'blue';
    componentRef.instance.foregroundColor = 'white';
    componentRef.instance.fontWeight = 'bold';

    //this.instantiateWithoutFactory();

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
