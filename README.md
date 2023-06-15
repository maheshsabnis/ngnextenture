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
    
# Design Practices, Patterns
- Services
  - Service for all modules in App must be 'Singleton' i.e. 'root'
  - Service scopped to specific modules must be instantiated for that all components of that module them register it the providers of that module only
  - Service for specific components and hence for all of its children then register in providers of that component
  - If a Component(s) are trying to use multiple services then instead of individual service inbjection in component, create a facade service and inject all services in this facade service and this facade service can then be injected in component(s)
  - Create a Interceptor when using the additional headers to every HTTP outgoing message e.g. Headerrs, Tokens, etc.


- Components
  - Use @ViewChild instead of @Input to avoid the changes in child for each change in parent                    
  - *** Choose for dynamic creation of same component when that very same component needs to be rendered but only change in some of its properties  
    - We need the Factory Pattern
  - Choose for Dynamic Forms when required
- Custom UI behaviors
  - If the component(s) is affected based on Keyboard/Mouse events then instaed of using frequent event binding for UI of each component, use Custom Directive


  ````javascript
getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      formGroupFields[field] = new FormControl(fieldProps.value);
this.fields.push({ ...fieldProps, fieldName: field });
    }
    return formGroupFields;
  }


<form [formGroup]="formName">
    <label>{{field.label}}</label>
    <input [type]="field.type" [formControlName]="field.fieldName"/>
</form>

  ````



