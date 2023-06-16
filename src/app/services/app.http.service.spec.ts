import { TestBed, getTestBed } from '@angular/core/testing';
// HttpClientTestingModule --> load the HttpClient dependency and resolve it
// in test case
// HttpTestingController -->  manage the http mock
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DepartmentHttpService } from './app.dept.http.service';
import { Department } from '../models/app.dept.model';
// mock data for testing
const dummyDepartmentsResponse: Array<Department> =
   [

  ];


const dummyDepartmentDetails ={
  data: {

 }
};

describe('HttpService', () => {
  let injector: TestBed;
  let service : DepartmentHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DepartmentHttpService],
    });

    // testing configuration for NgModule
    // provide the DI container registered object (HttpService)
    // provide all dependency resolvers e.g. HttpClient object
    injector = getTestBed();
    // resolve the HttpService and provide its instace
    service = injector.get(DepartmentHttpService);
    // resolve the HttpClient and provide its instance to make calls
    httpMock = injector.get(HttpTestingController);
  });

  // verification of the Mock
  afterEach(() => {
    httpMock.verify();
  });

  it('get() should return products data', () => {
    // the actula method call from the service
    // act
    service.getDepartments().subscribe((res) => {
      expect(res).toEqual(dummyDepartmentsResponse);
    });
    // mock the calls to the external service
    // act
    const req = httpMock.expectOne('http://localhost:4000/api/Departments');
    expect(req.request.method).toBe('GET');
    req.flush(dummyDepartmentsResponse);
  });

  it('post() should POST and return data', () => {
    const dept = new  Department(100,'DD','LL',2322);
    service.postDepartment(dept).subscribe((res) => {
      dept.deptNo  = 7;
      expect(res).toEqual(dept);
    });

    const req = httpMock.expectOne('http://localhost:4000/api/Departments');
    expect(req.request.method).toBe('POST');
    req.flush(dept);
  });

});
