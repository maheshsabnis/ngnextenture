/* TestBed: The Surface configuraion of the Test for Angular
- Initialize Test Env.
- Loads all dependencies as like @NgModule
  - declaration
  - imports
  - providers
*/
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
/* The Test Suit: A Collection of Test Cases */
describe('AppComponent', () => {
  /* The Code Block that is invoked before each test case */

  /*
  configureTestingModule: The Memory place where
  all components, imports, and provides are loaded
  and initialized
  */
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));
 /* The Test case */
  it('should create the app', () => {
    /* Create a Component's Instance
      createComponent() This returns an instance of the
      ComponentFixture
      This is responsible for following
      - Component's Code (public properties, methods as well as Lifecycle method) also the HTML DOM with its DataBinding
      Property-Binding, Event-BInding, and Tow-Way Binding

      - The detectChanges() of fixture is responsible for monitoring any changes in component
    */
    const fixture = TestBed.createComponent(AppComponent);

    // fixture.detectChanges();

    /* FOcus to that specific Component */
    const app = fixture.componentInstance;

    /* Check if the Component is instantiated */
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-demo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-demo-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-demo-app app is running!');
  });
});
