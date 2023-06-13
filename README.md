# Notes

1. Rules for Creating re-usable components
  - Understand its frequency
  - Plan for UI
  - Plan for Data
    - The data is used to render the Component
    - USed to define @Input properties
  - Plan for Behavior (Logic + Events)
    - This is used to decide about the mechansim using which the component can connect with its parent     
      - USed to define @Output EVentEmitter

      https://www.webnethelper.com/2022/11/implementing-server-side-pagination.html

        https://www.webnethelper.com/2022/11/implementing-server-side-pagination.html
2. Forms
- ngModel
````html
  - <input type="text" [ngModel]="Name"/>
````
  - The 'change' event for the DOMElement
    - NG System (BrowserModule), listen to the 'change', and it will trigger 'ngModelChanged' event
      - The 'property' value will be passed to Component
        - ngOnChanges, the component's event 
        - The COmponent will update the property
        - ngModelChanged will commit the property value and any UI element will be updated
          - ViewChanges 
  - FormGroup
    - AbstractControl, base class for Angular UI Elements
      - The 'value'
    - setValue()
        - A method to Assign Value to Element
        - A Single Object
    - Object.create() and Object.assign()   


3. Communciation Across Components
  - Parent-Child Relationship    
    - @Input, @Output
    - @ViewChild
  - Sister Components
    - Having Common Parent
      - Use Angular Service as a Singleton Instance
      - Services
        - Resource INtensive Operations
    - The sender Component will subscribe to the service and pass data to it
      - The service will maintain state of the data and raise an event
    - The Receiver component will subscribe to service and also to the event and wiat for the notification received from the event

    https://www.dotnetcurry.com/angularjs/1445/angular-services-component-communication
    
             


