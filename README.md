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
- UI Reusability
  - Component
- Behavior ReUsability
  - Directives
    - Component
      - Autonomous (UI + Data + Behavior)
    - Structural
      - Dynmaic DOM Management on UI THread
        - *ngIf, *ngFor, *ngSwitchCase
        - ng-template
        - ng-Container
    - Attribute, executed based on Events
      - [(ngModel)]
      - [formGroup]
      - [formControlName]
- Classes used by BrowserModule for Directives
      - ElemenentRef
        - The Class that holds reference of the DOM Element that will be impacted because of the Directive
      - Rendrer2
        - Affect the rendering  based on the Events and the data processed by that event
      - HostListener
        - Listen the Event that is raised on DOM Element
    - A Custom Directive that do the the following
      - Listen to MouseEnter and MouseLeave events
      - Target to DOM Elements where these events are fired   
      - Define the new rendering for those DOM events
      - Apply the Style
- UI COmpopsition with Angular
  - Feature Modules aka Shared Modules
    - These modules contains all re-Usable Objects (Components, Directives, and Services)
    - These modules can also be other Angular applications    

- Practices with Angular App to Address COmposinal Pattern
  - If using multiple modules in the app then make sure that all components of those modules are declared into the individual Shared Module
  - Eachn Shared module MUST import the 'CommonModule' please note that one Angular app can have only one BrowserModule  

- Routers
  - @angular/router
    - RouterModule
      - Root Level Routing
        - a Table consiting of Route Expression for the Top level app
        - The 'forRoot(ROUTE-TABLE)' 
      - Lazy Routes
        - Used for Lazy Loading
        - Recommended for Managing the production bundle size of the main.js  
        - The 'forChild(ROUTE-TABLE)'
    - Routes
      - COllection of 'Route'
      - A Route Table
        - Singleton Instance for the application
      - Route
        - A row in RouteTable
          - path
          - component
          - Children:[] , a child route aka subroute
            - These are the child routes those are early loaded
          - redirectTo
          - loadChildren, lazy loading and loads module from the host over HTTP request   
          - canActivate, for Route Guards
          - data, used when route guards needs to be eveluated for routing      
      - Router
        - The class used to provide an explicit routing based on events
          - The 'navigate(PATH, [PARAMETERS])' method
            - PARAMETERS, route parameters    
            - navigateUrl()
      - ActivatedRoute
        - Used to provide a component subscription under the RouterModule to read route parameters
          - The 'subscribe()' method 
      - ActivatedRouterSnapShot
        - USed in case of (mostly) the Guarded ROutes   
      - router-Link
        - An attribute direcive for Routing
        - APplied to anchor tag
        - USed for Querying to the router table
      - router-outlet
        - A Component that is injected with Components from Route expression based on query exeuted by router-link             

        https://blog.angular-university.io/angular-custom-form-controls/  









